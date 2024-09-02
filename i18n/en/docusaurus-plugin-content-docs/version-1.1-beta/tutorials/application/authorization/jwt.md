# JWT

The API Open Platform provides a JWT (JSON Web Token) authentication mechanism, aimed at offering secure and efficient identity verification and permission control for API calls.

## **What is JWT Authentication?**

JWT authentication is an identity verification mechanism based on JSON Web Tokens. A JWT is a compact, URL-safe token format used to securely transmit information between different systems. It contains authentication and authorization information, ensuring its integrity and authenticity through digital signatures.

* **JWT Structure**:
  * **Header**: Declares the type and signature algorithm.
  * **Payload**: Contains user identity and authorization information.
  * **Signature**: Used to verify the token's authenticity and integrity.

## **Core Functions**

* **Token Generation and Issuance**:
  * The server generates a JWT after a user is authenticated, including the user's identity information and permissions.
  * The JWT is signed using a pre-shared key or private key to ensure its authenticity and prevent tampering.
* **Token Transmission and Storage**:
  * The client carries the JWT for authentication in subsequent requests via the HTTP header (usually the Authorization header).
  * The JWT can be stored in the client's local storage, session storage, or cookies for carrying across requests.
* **Token Verification and Parsing**:
  * Upon receiving a request, the server verifies the JWT's signature using the shared key or a public key.
  * After verification, the token is parsed to obtain the user's identity and permission information, allowing for appropriate authorization actions.
* **Token Refresh and Expiry**:
  * Supports JWTs with short-term validity and a refresh token mechanism to ensure token security and timely expiry.
  * Users can obtain a new JWT through the refresh token mechanism, extending the login session without needing to re-login.

## **Advantages**

* **Stateless and Distributed Support**:
  * The JWT authentication mechanism is stateless, meaning the server does not need to store session information, making it suitable for distributed systems and microservices architecture.
  * The client includes complete identity information in each request, facilitating cross-system and cross-service identity verification.
* **Efficient and Flexible**:
  * JWTs are compact, allowing for high transmission and parsing efficiency, making them suitable for use in mobile devices and bandwidth-constrained environments.
  * Supports custom payload fields, allowing for flexible transmission of user identity and permission information to meet diverse business needs.
* **Security**:
  * Uses digital signatures to ensure the token's authenticity and integrity, preventing tampering and forgery.
  * Supports multiple signature algorithms (e.g., HMAC, RSA) to choose the appropriate one based on security requirements.
* **Standardization and Wide Support**:
  * JWT is an open standard (RFC 7519), widely applied and supported in the industry, with numerous development libraries and tools.
  * Compatible with various programming languages and frameworks, making it easy to integrate and implement.

## Operation Demonstration

1. When configuring authentication, select `Jwt` as the authentication type and fill in the authentication information:

![](images/2024-08-13/8c0630df49ab83fb41265e025b19bdbef2998158dd41d2b97963f23333a5de20.png)  

| Field Name       | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Parameter Position | The position where the authentication check is placed in the request, supporting Header, Query, Body |
| Parameter Name   | Parameter name                                             |
| Iss             | Issuer                                                      |
| Signature Algorithm | Support HS256, HS384, HS512, ES256, ES384, ES512, RS256, RS384, RS512 |
| Secret          | Key, valid only for HS256, HS384, HS512 signature algorithms |
| RSA Public Key  | RSA public key, valid only for ES256, ES384, ES512, RS256, RS384, RS512 algorithms |
| Username        | Username                                                    |
| Username JsonPath | The path of the user field in the payload, following JSON path format |
| Verification Fields | Support selecting exp, nbf                              |
| Base64 Encoding | Whether to encode signature in base64, valid only for HS256, HS384, HS512 |
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

For quick JWT construction, refer to the [JWT generation tool](https://jwt.io/)

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

Here, the username is `John Doe`, with an expiration time of `1713339896`, i.e., `2024-04-17 15:44:56`, issued by `apinto`.

`Secret` is set to `apinto`, as shown below:

![](http://data.eolinker.com/course/JC9MEwsf53e5bf7aa619014a387ca938fadde0e30522b69.png)

**Token**

Generate a token based on the above configuration:

```shell
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiIGFwaW50byIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzEzMzM5ODk2fQ.IYp4hR_vTCFgOQdF3qbgOU7hrWo4W-WeFkIXdC7pqs8
```

**Configuring JWT Authentication**

1. When configuring authentication, select `Jwt` as the authentication type and fill in the authentication information:

![](images/2024-08-13/8c0630df49ab83fb41265e025b19bdbef2998158dd41d2b97963f23333a5de20.png)

![](images/2024-08-13/48a8eda9dd68104a788d5ac6f04f6ef5282052477ff4440ff72b044cfd61c911.png)  

**Configuration Explanation**

| Field Name       | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Parameter Position | The position where the authentication check is placed in the request, supporting Header, Query, Body |
| Parameter Name   | Parameter name                                             |
| Iss             | Issuer                                                      |
| Signature Algorithm | Support HS256, HS384, HS512, ES256, ES384, ES512, RS256, RS384, RS512 |
| Secret          | Key, valid only for HS256, HS384, HS512 signature algorithms |
| RSA Public Key  | RSA public key, valid only for ES256, ES384, ES512, RS256, RS384, RS512 algorithms |
| Username        | Username                                                    |
| Username JsonPath | The path of the user field in the payload, following JSON path format |
| Verification Fields | Support selecting exp, nbf                              |
| Base64 Encoding | Whether to encode signature in base64, valid only for HS256, HS384, HS512 |
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

After completing the configuration, click `Confirm`.

**Call**

Input the generated `Token` into the request header to call the API.

![](http://data.eolinker.com/course/2Y8u7mg15e2f620beebf8128cfc21327f8c3101e1da8a03.png)