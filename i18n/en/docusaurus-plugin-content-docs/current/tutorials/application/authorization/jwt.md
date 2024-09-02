# JWT

The API Open Platform provides a JWT (JSON Web Token) authentication mechanism designed to offer secure and efficient identity verification and access control for API calls.

## **What is JWT Authentication?**

JWT authentication is a method of identity verification based on JSON Web Tokens. A JWT is a compact, URL-safe token format used to securely transmit information between different systems. It contains authentication and authorization information and is digitally signed to ensure its integrity and authenticity.

* **JWT Structure**:
  * **Header**: Declares the type and signature algorithm.
  * **Payload**: Contains user identity and authorization information.
  * **Signature**: Used to verify the token's authenticity and integrity.

## **Core Functions**

* **Token Generation and Issuance**:
  * The server generates a JWT after the user passes authentication, containing the user's identity and permissions.
  * The JWT is signed using a pre-shared key or private key to ensure the token's authenticity and prevent tampering.
  
* **Token Transmission and Storage**:
  * The client carries the JWT for authentication in subsequent requests, typically in the HTTP header (usually the Authorization header).
  * JWTs can be stored in the client's local storage, session storage, or cookies to facilitate cross-request carrying.

* **Token Verification and Parsing**:
  * Upon receiving a request, the server uses the shared key or public key to verify the JWT's signature.
  * Once verified, the token is parsed to obtain the user's identity and permissions for appropriate authorization actions.
  
* **Token Refresh and Invalidation**:
  * Supports short-lived JWTs and a refresh token mechanism to ensure the security and timely invalidation of tokens.
  * Users can obtain a new JWT through the refresh token mechanism to extend the login session without re-authentication.

## **Advantages**

* **Stateless and Distributed Support**:
  * JWT authentication is stateless, and servers do not need to store session information, making it suitable for distributed systems and microservice architectures.
  * Clients carry complete identity information with each request, facilitating cross-system and cross-service identity verification.
  
* **Efficiency and Flexibility**:
  * The JWT format is compact, ensuring efficient transmission and parsing, suitable for use on mobile devices and in bandwidth-constrained environments.
  * Supports custom payload fields for flexibly transmitting user identity and permissions, meeting diverse business needs.

* **Security**:
  * Uses digital signatures to ensure the token's authenticity and integrity, preventing tampering and forgery.
  * Supports various signing algorithms (e.g., HMAC, RSA) to select the appropriate algorithm based on security needs.
  
* **Standardization and Broad Support**:
  * JWT is an open standard (RFC 7519), widely applied and supported in the industry, with an abundance of development libraries and tools.
  * Compatible with a variety of programming languages and frameworks, making it easy to integrate and implement.

## Demo

1. When configuring authentication, select `Jwt` as the type and fill in the authentication information:

![](images/2024-08-13/8c0630df49ab83fb41265e025b19bdbef2998158dd41d2b97963f23333a5de20.png)  

| Field Name   | Description                                                    |
|--------------|----------------------------------------------------------------|
| Parameter Position | The position in the request for authentication validation, supports Header, Query, Body |
| Parameter Name | Name of the parameter                                        |
| Iss | Issuer                                                                |
| Signature Algorithm | Supports HS256, HS384, HS512, ES256, ES384, ES512, RS256, RS384, RS512 |
| Secret | Key, effective only for HS256, HS384, HS512 signing algorithms     |
| RSA Public Key | RSA public key, applicable only for ES256, ES384, ES512, RS256, RS384, RS512 algorithms |
| Username | Username                                                        |
| Username JsonPath | The path of the user field in the payload, format reference json path |
| Validation Fields | Supports the selection of exp, nbf                      |
| Base64 Encoding | Whether to Base64 encode the signature, only valid for HS256, HS384, HS512 |
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

For quick JWT construction, refer to the [JWT generator tool](https://jwt.io/)

#### JWT Authentication Example

**Authentication Information**

**Header**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload**

```json
{
  "sub": "1234567890",
  "iss": "apinto",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1713339896
}
```

In which the username is `John Doe`, the expiration time is `1713339896`, i.e., `2024-04-17 15:44:56`, and the issuing authority is `apinto`

Set `Secret` to `apinto`, as shown below

![](http://data.eolinker.com/course/JC9MEwsf53e5bf7aa619014a387ca938fadde0e30522b69.png)

**Token**

Generate the token based on the above configuration

```shell
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiIGFwaW50byIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzEzMzM5ODk2fQ.IYp4hR_vTCFgOQdF3qbgOU7hrWo4W-WeFkIXdC7pqs8
```

**Configure JWT Authentication**

1. When configuring authentication, select `Jwt` as the type and fill in the authentication information:

![](images/2024-08-13/8c0630df49ab83fb41265e025b19bdbef2998158dd41d2b97963f23333a5de20.png)

![](images/2024-08-13/48a8eda9dd68104a788d5ac6f04f6ef5282052477ff4440ff72b044cfd61c911.png)  

**Configuration Explanation**

| Field Name   | Description                                                    |
|--------------|----------------------------------------------------------------|
| Parameter Position | The position in the request for authentication validation, supports Header, Query, Body |
| Parameter Name | Name of the parameter                                        |
| Iss | Issuer                                                                |
| Signature Algorithm | Supports HS256, HS384, HS512, ES256, ES384, ES512, RS256, RS384, RS512 |
| Secret | Key, effective only for HS256, HS384, HS512 signing algorithms     |
| RSA Public Key | RSA public key, applicable only for ES256, ES384, ES512, RS256, RS384, RS512 algorithms |
| Username | Username                                                        |
| Username JsonPath | The path of the user field in the payload, format reference json path |
| Validation Fields | Supports the selection of exp, nbf                      |
| Base64 Encoding | Whether to Base64 encode the signature, only valid for HS256, HS384, HS512 |
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

After completing the configuration, click `Confirm`.

**Call**

Enter the `Token` generated above in the request header to call the API

![](http://data.eolinker.com/course/2Y8u7mg15e2f620beebf8128cfc21327f8c3101e1da8a03.png)