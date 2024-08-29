# AK/SK

`APIPark` provides an AK/SK (Access Key/Secret Key) authentication mechanism designed to offer secure identity verification and access control for API calls.

## **What is AK/SK Authentication?**

AK/SK authentication is a security mechanism that uses a pair of keys (access key and secret key) to authenticate users. This mechanism ensures that only authorized users can access specific APIs and resources on the platform.

* **AK (Access Key):** A key used to uniquely identify the caller's identity.
* **SK (Secret Key):** A key used in conjunction with the access key to sign and verify requests.

## Advantages

* When calling an API, users must use the SK to sign requests to ensure the integrity and authenticity of the request.
* Upon receiving a request, the server uses the same SK to verify the request, ensuring it has not been tampered with and is from a legitimate user.

## Operation Demonstration

1. When configuring authentication, select `AkSk` as the authentication type and fill in the required information:

![Authentication Configuration](images/2024-08-13/f737e1aa8cf47cdef5aecc57624ee3c755f115ce8aecfffb4abe25db601b1d5f.png)

**Configuration Explanation**

| Field Name      | Description                                          |
| --------------- | ---------------------------------------------------- |
| Parameter Location | The location in the request where authentication is checked, supports Header, Query, Body |
| Parameter Name  | Name of the parameter                               |
| AK              | Access Key                                           |
| SK              | Access Secret Key                                    |
| Expiration Time | Expiration time; if not filled, it never expires; accurate to the day |
| Hide Authentication Info | Whether to hide user info when forwarding to upstream services |

**AK/SK Flow Overview**

The AK/SK signing and request sending process on the client side is summarized as follows:

1. Construct a canonical request. Assemble the request contents to be sent according to the agreed rules with the API gateway backend to ensure that the client and backend verification use the same request content.
2. Create a string to sign using the canonical request and other information.
3. Calculate the signature using the AK/SK and the string to sign.
4. Add the generated signature information to the HTTP request as a header or as a query string parameter.

**Usage Instructions**

**I. Constructing a Canonical Request**

When signing and authenticating using the AK/SK method, you must first standardize the request content before signing. Using the same request standards for both the client and the API gateway ensures that the same HTTP request results in the same signature outcome on both ends, completing identity verification.

The HTTP request canonicalization pseudocode is as follows:

```
CanonicalRequest =
      HTTPRequestMethod + '\n' +
      CanonicalURI + '\n' +
      CanonicalQueryString + '\n' +
      CanonicalHeaders + '\n' +
      SignedHeaders + '\n' +
      HexEncode(Hash(RequestPayload))
```

Assuming the **original request** is as follows:

```
GET http://www.demo.com/demo/login?parm1=value1&parm2= HTTP/1.1
Host: www.demo.com
X-Gateway-Date: 20200605T104456Z
```

**1. HTTPRequestMethod: Construct the HTTP request method, ending with a newline character.**

HTTP request method, such as GET, PUT, POST, etc.

Construction example:

```
GET
```

**2. CanonicalURI: Add the canonical URI parameter, ending with a newline character.**

1. The canonical URI is the URI encoding of the absolute path part of the requested resource path.
2. Normalize the URI path according to the RFC 3986 standard, removing redundant and relative path parts, and URI-encode each part of the path. If the URI path does not end with "/", add "/" to the end.

Note:

> When calculating the signature, the URI must end with a "/". When sending the request, it does not need to end with a "/".

Construction example:

```
GET
/demo/login/
```

**3. CanonicalQueryString: Add the canonical query string, ending with a newline character.**

1. The query string refers to query parameters. If no query parameters exist, it should be an empty string, which means the canonicalized request is a blank line.

2. The canonical query string must meet the following requirements:

   1. URI-encode each parameter name and value according to the following rules: Do not URI-encode any non-reserved characters defined by RFC 3986, which include: A-Z, a-z, 0-9, -, _, . and ~.
   2. Percent-encode all non-reserved characters using %XY, where X and Y are hexadecimal characters (0-9 and A-F). For example, space characters must be encoded as %20, and extended UTF-8 characters must be in the format "%XY%ZA%BC".

3. For each parameter, append "URI-encoded parameter name=URI-encoded parameter value". If there is no parameter value, use an empty string but do not omit the "=". For example, there are two parameters below, where the value of the second parameter parm2 is empty.

   ```
    parm1=value1&parm2=
   ```

4. Sort parameter names in ascending order by character code. For instance, a parameter name beginning with the uppercase letter F precedes one beginning with the lowercase letter b.

5. Construct the canonical query string, beginning with the first sorted parameter name.

Construction example:

```
GET
/demo/login/
parm1=value1&parm2=
```

**4. CanonicalHeaders: Add the canonical headers, ending with a newline character.**

1. Canonical headers are a list of request headers, which include all HTTP request headers in the signing request. Headers must include X-Gateway-Date for signature time validation, formatted as UTC in ISO8601 standard: YYYYMMDDTHHMMSSZ.
2. CanonicalHeaders consist of multiple request headers, represented as CanonicalHeadersEntry0 + CanonicalHeadersEntry1 + ..., where each request header (CanonicalHeadersEntry) has the format Lowercase(HeaderName) + ':' + Trimall(HeaderValue) + '\n'
3. Convert header names to lowercase and remove leading and trailing spaces.
4. Sort header names in ascending order by character code.

Note:

* Lowercase indicates a function that converts all characters to lowercase letters.
* Trimall indicates a function that removes excess spaces before and after values.
* The last request header carries a newline. The canonicalization in CanonicalHeaders itself ends with a newline, resulting in a blank line.

> For instance, if the original headers are:
>
> ```
> Host: www.demo.com\n
> Content-Type: application/json;charset=utf8\n
> My-header1:    a   b   c  \n
> X-Gateway-Date:20200605T104456Z\n
> My-Header2:    "x   y   \n
> ```
>
> Convert header names to lowercase, sort headers by name in ascending character code, remove leading and trailing spaces from header values. The canonical headers are:
>
> ```
> content-type:application/json;charset=utf8\n
> host:www.demo.com\n
> my-header1:a   b   c\n
> my-header2:"x   y\n
> x-gateway-date:20200605T104456Z\n
> ```

Construction example:

```
GET
/demo/login/
parm1=value1&parm2=
content-type:application/json
host:www.demo.com
x-gateway-date:20200605T104456Z
```

**5. SignedHeaders: Add the declaration of headers used for signing, ending with a newline character.**

1. A list of request headers used for signing. By adding this header, you inform the API gateway of which headers in the request are part of the signing process, and allow the API gateway to ignore certain headers when verifying requests. X-Gateway-Date must be a signed header.
2. Signed headers must meet the following requirements: Convert signed header names to lowercase, sort headers by character code, and use ";" to separate multiple headers. SignedHeaders = Lowercase(HeaderName0) + ';' + Lowercase(HeaderName1) + ";"

Assuming there are three headers involved in signing: Content-Type, Host, X-Gateway-Date, the signed headers will be:

```
SignedHeaders=content-type;host;x-gateway-date
```

Construction example:

```
GET
/demo/login/
parm1=value1&parm2=
content-type:application/json
host:www.demo.com
x-gateway-date:20200605T104456Z

content-type;host;x-gateway-date
```

Refer to **Step 4: Adding Signed Info to Request Headers** for specific examples of adding headers to requests.

**6. RequestPayload: Using the SHA 256 hash function, create a hash value based on the body of the HTTP or HTTPS request payload.**

1. Request body. The body must undergo two transformations: HexEncode(Hash(RequestPayload)), where Hash denotes the function that generates the message digest, currently supporting the SHA-256 algorithm. HexEncode signifies the function that returns a Base-16 encoding of the digest in lowercase letter representation. For instance, HexEncode("m") yields "6d" rather than "6D". Each byte of input is represented by two hexadecimal characters. a. When calculating the hash value of the RequestPayload and "RequestPayload==null" occurs, directly use an empty string "" for calculation.

This example uses the GET method, with an empty body. The body (empty string) after hashing is as follows:

```
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

Construction example:

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

Thus, the canonical request construction is complete.

**7. Perform a hash operation on the constructed canonical request using the SHA 256 algorithm, identical to the hashing of RequestPayload.**

The hash of the canonical request after processing needs to be presented as a lowercase hexadecimal string.

Algorithm pseudocode:

```
Lowercase(HexEncode(Hash.SHA256(CanonicalRequest)))
```

The processed hash of the canonical request is:

```
1ace9c4e12e4e322a506e3866a6e81e62c8f9ae674aca7966a55b9c6deb6ea00
```

**II. Create a String to Sign**

After standardizing the HTTP request and obtaining the hash value of the request, incorporate it together with the signature algorithm and signature time to form a string to sign.

```
StringToSign =
    Algorithm + \n +
    RequestDateTime + \n +
    HashedCanonicalRequest
```

1. Algorithm: The signature algorithm; for SHA 256, the algorithm is HMAC-SHA256.
2. RequestDateTime: The request timestamp, consistent with the value of the X-Gateway-Date header, formatted as YYYYMMDDTHHMMSSZ.
3. HashedCanonicalRequest: The hash of the canonical request after processing.

The string to sign based on the example above is:

```
HMAC-SHA256
20200605T104456Z
1ace9c4e12e4e322a506e3866a6e81e62c8f9ae674aca7966a55b9c6deb6ea00
```

**III. Calculate the Signature**

Use the SK (Access Secret Key) and the created string to sign as inputs for the encryption hash function to calculate the signature and convert the binary value to hexadecimal representation.

Pseudocode:

```
signature = HexEncode(HMAC(Access Secret Key, string to sign))
```

1. HMAC denotes key-related hash computation, HexEncode signifies conversion to hexadecimal.
2. Access Secret Key: The key for signing.
3. string to sign: The created string to sign.

Assuming the Access Secret Key is 8f8154ff07f7153eea59a2ba44b5fcfe443dba1e4c45f87c549e6a05f699145d, the calculated signature is:

```
3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab
```

**IV. Add Signature Info to Request Headers**

After calculating the signature, add it to the Authorization HTTP header. The Authorization header is not part of the signed headers and is primarily used for identity verification.

Authorization Header pseudocode:

```
Authorization: algorithm Access=Access key, SignedHeaders=SignedHeaders, Signature=signature
```

Note that there is a **space** between algorithm and Access but no comma, while a **comma** separates SignedHeaders and Signature.

The resulting signature header is:

```
HMAC-SHA256 Access=19823ef8f417b489515570c83e3d397f, SignedHeaders=content-type;host;x-gateway-date, Signature=3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab
```

After obtaining the signature header, add it to the original HTTP request content, and send the request to the API gateway for identity verification.

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
curl -X GET "http://www.demo.com:6689/demo/login?parm1=value1&parm2=" -H "content-type: application/json" -H "x-gateway-date: 20200605T104456Z" -H "host: www.demo.com" -H "Authorization-Type: AK/SK" -H "Authorization: HMAC-SHA256 Access=19823ef8f417b489515570c83e3d397f, SignedHeaders=content-type;host;x-gateway-date, Signature=3909cd0042fed21287e64b2436adb10ad12894c9beeb69f932efee872fd589ab" 
```

**The request example above is for demonstration purposes only.**