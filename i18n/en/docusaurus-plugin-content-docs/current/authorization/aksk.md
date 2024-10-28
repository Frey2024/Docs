# AK/SK

`APIPark` offers an AK/SK (Access Key/Secret Key) authentication mechanism designed to provide secure identity verification and access control for API calls.

## **What is AK/SK Authentication?**

AK/SK authentication is a security mechanism that uses a pair of keys (access key and secret key) to authenticate users. This mechanism ensures that only authorized users can access specific APIs and resources.

* **AK (Access Key)**: An access key used to uniquely identify the caller's identity.
* **SK (Secret Key)**: A secret key used in conjunction with the access key for signing and verifying requests.

## Advantages

* When calling an API, the user needs to sign the request with the SK to ensure the integrity and authenticity of the request.
* After receiving the request, the server will use the same SK to verify the request, confirming the request has not been tampered with and is from a legitimate user.

## Operation Demonstration

1. When configuring authentication, select `AkSk` as the authentication type and fill in the authentication information:

![](images/2024-10-28/44cdd772fd68263808ff44f530612d136ce7d1d57b3167101678c6dfbee2164d.png)  

**Configuration Instructions**

| Field Name    | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| Parameter Position | Position where authentication validation is placed in the request, supporting Header, Query, Body |
| Parameter Name | Parameter name                                               |
| AK            | Access Key                                                    |
| SK            | Access Secret Key                                             |
| Expiration Time| User expiration time, if not specified, never expires (accurate to the day)|
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

**AK/SK Process Overview**

The client-related AK/SK signing and request sending process are summarized as follows:

1. Construct a canonical request. Assemble the content of the request to be sent according to the rules agreed with the API gateway backend, ensuring that the request content used by the client signature and the API gateway backend are consistent.
2. Use the canonical request and other information to create a string to be signed.
3. Use the AK/SK and the string to sign to calculate the signature.
4. Add the generated signature information as an HTTP request header or as a query string parameter in the HTTP request.

**Instructions for Use**

**1. Construct a Canonical Request**

To perform signing and authentication using AK/SK, you must first standardize the request content before signing it. Consistent request specification between the client and the API gateway ensures that both the frontend and backend get the same signature result for the same HTTP request, thus completing identity verification.

HTTP request specification pseudocode is as follows:

```
CanonicalRequest =
      HTTPRequestMethod + '\n' +
      CanonicalURI + '\n' +
      CanonicalQueryString + '\n' +
      CanonicalHeaders + '\n' +
      SignedHeaders + '\n' +
      HexEncode(Hash(RequestPayload))
```

Suppose the **raw request** is as follows:

```
GET http://www.demo.com/demo/login?parm1=value1&parm2= HTTP/1.1
Host: www.demo.com
X-Gateway-Date: 20200605T104456Z
```

**1. HTTPRequestMethod: Construct the HTTP request method, ending with a newline.**

The HTTP request method, such as GET, PUT, POST, etc.

Example construction:

```
GET
```

**2. CanonicalURI: Add canonical URI parameters, ending with a newline.**

1. The canonical URI, or request resource path, is the URI-encoded absolute path part of the URI.
2. Normalize the URI path according to RFC 3986, removing redundant and relative path parts, and URI-encode each part of the path. If the URI path does not end with "/", add "/" at the end.

Note:

> When calculating the signature, the URI must end with "/". When sending the request, it may not end with "/".

Example construction:

```
GET
/demo/login/
```

**3. CanonicalQueryString: Add a canonical query string, ending with a newline.**

1. Query string, i.e., query parameters. If there are no query parameters, it is an empty string, i.e., the standardized request is a blank line.

2. The canonical query string needs to meet the following requirements:

   1. URI encode each parameter name and value according to these rules: Do not URI encode any of the non-reserved characters defined by RFC 3986, which include characters: A-Z, a-z, 0-9, -, _, . and ~.
   2. Use %XY to percent-encode all non-reserved characters, where X and Y are hexadecimal characters (0-9 and A-F). For example, the space character must be encoded as %20, and extended UTF-8 characters must be encoded as “%XY%ZA%BC”.

3. For each parameter, append "URI encoded parameter name=URI encoded parameter value". If there is no parameter value, use an empty string as a placeholder, but do not omit "=". For example, the following contains two parameters, where the second parameter parm2 is empty.

   ```
    parm1=value1&parm2=
   ```

4. Sort parameter names in ascending order based on character code. For example, a parameter name starting with the uppercase letter F comes before a parameter name starting with the lowercase b.

5. Construct the canonical query string starting with the first parameter name alphabetically.

Example construction:

```
GET
/demo/login/
parm1=value1&parm2=
```

**4. CanonicalHeaders: Add canonical headers, ending with a newline.**

1. Canonical headers, i.e., a list of request headers. It includes all the HTTP headers from the signing request. Headers must include X-Gateway-Date for verifying the signature time, formatted as ISO8601 standard UTC format: YYYYMMDDTHHMMSSZ.
2. CanonicalHeaders consist of multiple request headers in the format of Lowercase(HeaderName) + ‘:’ + Trimall(HeaderValue) + ‘\n’, where each request header forms a CanonicalHeadersEntry.
3. Convert the header name to lowercase and remove leading and trailing spaces.
4. Sort header names in ascending order based on character code.

Note:

* Lowercase indicates a function to convert all characters to lowercase.
* Trimall indicates a function to remove excessive spaces around values.
* The last request header will also carry a newline. Due to the overlap with the newline the CanonicalHeaders itself carries, an empty line will appear.

> For example, the original headers are:
>
> ```
> Host: www.demo.com\n
> Content-Type: application/json;charset=utf8\n
> My-header1:    a   b   c  \n
> X-Gateway-Date:20200605T104456Z\n
> My-Header2:    "x   y   \n
> ```
>
> Convert the header name to lowercase, sort the headers by character code, and remove leading and trailing spaces from the values. Finally, the canonical headers are:
>
> ```
> content-type:application/json;charset=utf8\n
> host:www.demo.com\n
> my-header1:a   b   c\n
> my-header2:"x   y\n
> x-gateway-date:20200605T104456Z\n
> ```

Example construction:

```
GET
/demo/login/
parm1=value1&parm2=
content-type:application/json
host:www.demo.com
x-gateway-date:20200605T104456Z
```

**5. SignedHeaders: Add a declaration of headers used for signing, ending with a newline.**

1. A list of headers used in signing. Adding this header informs the API gateway which headers are part of the signing process and which headers can be ignored during request validation. X-Gateway-Date must be included as a signed header.
2. The signed headers must meet the following requirements: Convert signed header names to lowercase, sort them by character code, and separate multiple headers using ";". SignedHeaders = Lowercase(HeaderName0) + ‘;’ + Lowercase(HeaderName1) + “;” + …

Suppose three headers are involved in the signing: Content-Type, Host, X-Gateway-Date, then the signed headers will be:

```
SignedHeaders=content-type;host;x-gateway-date
```

Example construction:

```
GET
/demo/login/
parm1=value1&parm2=
content-type:application/json
host:www.demo.com
x-gateway-date:20200605T104456Z

content-type;host;x-gateway-date
```

Please refer to **Step Four: Add signature information to the request header** for examples of headers being added to requests.

**6. RequestPayload: Use the SHA 256 hash function on the body content in the HTTP or HTTPS request to create a hash.**

1. The request message body. The body requires two levels of conversion: HexEncode(Hash(RequestPayload)), where Hash uses the SHA-256 algorithm. HexEncode returns the Base-16 encoded hash in lowercase. For example, HexEncode(“m”) returns “6d” rather than “6D”. Each byte of input is represented by two hexadecimal characters. a. When calculating the hash for RequestPayload in scenarios where "RequestPayload == null", directly use the empty string "" for calculation.

In this example, it's a GET request, so the body is empty. The hashed body (empty string) is as follows:

```
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

Example construction:

```
GET
/demo/login/
parm1=value1&parm2=
content-type:application/json
host:www.demo.com
x-gateway-date:20200605T104456Z

content-type;host;x-gateway-date
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

At this point, the construction of the canonical request is complete.

**7. Hash the constructed canonical request, using the SHA 256 algorithm, the same algorithm used for hashing RequestPayload.**

The hashed canonical request must be represented as a lowercase hexadecimal string.

Algorithm pseudocode:

```
Lowercase(HexEncode(Hash.SHA256(CanonicalRequest)))
```

Hashed canonical request example:

```
1ace9c4e12e4e322a506e3866a6e81e62c8f9ae674aca7966a55b9c6deb6ea00
```

**2. Create the String to Sign**

After standardizing the HTTP request and obtaining its hash value, combine it with the signing algorithm and signing time to form the string to be signed.

```
StringToSign =
    Algorithm + \n +
    RequestDateTime + \n +
    HashedCanonicalRequest
```

1. Algorithm: The signing algorithm, for SHA 256, the algorithm is HMAC-SHA256.
2. RequestDateTime: Request timestamp, same as the X-Gateway-Date header, formatted as YYYYMMDDTHHMMSSZ.
3. HashedCanonicalRequest: The hashed canonical request.

The resulting string to sign from the above example is:

```
HMAC-SHA256
20200605T104456Z
1ace9c4e12e4e322a506e3866a6e81e62c8f9ae674aca7966a55b9c6deb6ea00
```

**3. Calculate the Signature**

Use the SK (Access Secret Key) and the created string to sign as inputs to the cryptographic hash function, calculate the signature, and convert the binary value to a hexadecimal representation.

Pseudocode is as follows:

```
signature = HexEncode(HMAC(Access Secret Key, string to sign))
```

1. HMAC stands for Hash-based Message Authentication Code, HexEncode refers to the conversion to hexadecimal.
2. Access Secret Key: The signing key.
3. string to sign: The created string to sign.

Assuming the Access Secret Key is 8f8154ff07f7153eea59a2ba44b5fcfe443dba1e4c45f87c549e6a05f699145d, the calculated signature is:

```
3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab
```

**4. Add Signature Information to the Request Header**

After calculating the signature, add it to the Authorization HTTP header. The Authorization header is not included in signed headers and is primarily used for identity verification.

The pseudocode for the authorization header is:

```
Authorization: algorithm Access=Access key, SignedHeaders=SignedHeaders, Signature=signature
```

Be aware that there is a **space** between algorithm and Access but no comma, while a **comma** separates SignedHeaders and Signature.

The resulting signature header is:

```
HMAC-SHA256 Access=19823ef8f417b489515570c83e3d397f, SignedHeaders=content-type;host;x-gateway-date, Signature=3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab
```

After obtaining the signature header, add it to the original HTTP request content, and the request will be sent to the API gateway, where identity authentication is completed.

The complete request with signature information is as follows:

```
GET /demo/login?parm1=value1&parm2= HTTP/1.1
Host: www.demo.com
Content-Type: application/json
x-gateway-date: 20200605T104456Z
Authorization: HMAC-SHA256 Access=19823ef8f417b489515570c83e3d397f, SignedHeaders=content-type;host;x-gateway-date, Signature=3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab
```

An example using Curl is as follows:

```shell
curl -X GET "http://www.demo.com:6689/demo/login?parm1=value1&parm2=" -H "content-type: application/json" -H "x-gateway-date: 20200605T104456Z" -H "host: www.demo.com"  -H "Authorization-Type: AK/SK" -H "Authorization: HMAC-SHA256 Access=19823ef8f417b489515570c83e3d397f, SignedHeaders=content-type;host;x-gateway-date, Signature=3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab" 
```

**The example request above is for demonstration purposes only**