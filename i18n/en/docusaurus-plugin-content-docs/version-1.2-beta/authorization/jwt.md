# JWT

The API open platform provides a JWT (JSON Web Token) authentication mechanism, which aims to offer secure and efficient identity verification and permission control for API calls.

## **What is JWT Authentication?**

JWT authentication is an identity verification mechanism based on JSON Web Token. JWT is a compact, URL-safe token format used for securely transmitting information between different systems. It contains authentication and authorization information, ensuring its integrity and authenticity through digital signatures.

* **JWT Structure**:
  * **Header**: Declares the token type and signing algorithm.
  * **Payload**: Contains user identity and authorization information.
  * **Signature**: Used to verify the token's authenticity and integrity.

## **Core Functions**

* **Token Generation and Issuance**:
  * After user authentication, the server generates a JWT that includes the user's identity and permissions.
  * The JWT is signed using a pre-shared key or private key, ensuring the token's authenticity and preventing tampering.
* **Token Transmission and Storage**:
  * The client carries the JWT for authentication in subsequent requests via the HTTP header (usually the Authorization header).
  * JWTs can be stored in the client's local storage, session storage, or cookies for easy transmission across requests.
* **Token Verification and Parsing**:
  * Upon receiving a request, the server verifies the JWT signature using a shared key or public key.
  * After successful verification, the server parses the token to obtain user identity and permission information for the necessary authorization actions.
* **Token Refresh and Expiry**:
  * Supports short-lived JWTs and a refresh token mechanism, ensuring token security and timely expiry.
  * Users can obtain new JWTs through the refresh token mechanism to extend login sessions without re-authentication.

## **Advantages**

* **Stateless and Distributed Support**:
  * JWT authentication is stateless, with no need for the server to store session information, suitable for distributed systems and microservice architectures.
  * The client carries complete identity information with each request, facilitating cross-system and cross-service identity verification.
* **Efficiency and Flexibility**:
  * The compact format of JWT is efficient for transmission and parsing, ideal for mobile devices and bandwidth-constrained environments.
  * Supports custom payload fields, allowing flexible transmission of user identity and permission information to meet diverse business needs.
* **Security**:
  * Digital signatures ensure the token's authenticity and integrity, preventing tampering and forgery.
  * Supports various signing algorithms (e.g., HMAC, RSA), allowing selection of appropriate algorithms based on security requirements.
* **Standardization and Broad Support**:
  * JWT is an open standard (RFC 7519) widely adopted and supported in the industry, with a wealth of development libraries and tools.
  * Compatible with various programming languages and frameworks, making it easy to integrate and implement.

## Operation Demonstration

1. When configuring authentication, select `Jwt` as the authentication type and fill in the authentication information:

![](images/2024-10-28/f4a18b131b2504660705cf4d0817d665dcf74fd23a78715c99d011f8a7f66101.png)  

| Field Name          | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| Parameter Location  | Where the authentication check is placed in the request, supports Header, Query, Body |
| Parameter Name      | Name of the parameter                                              |
| Iss                 | The issuer                                                         |
| Signing Algorithm   | Supports HS256, HS384, HS512, ES256, ES384, ES512, RS256, RS384, RS512 |
| Secret              | Key, only effective when the signing algorithm is HS256, HS384, HS512 |
| RSA Public Key      | RSA public key, only effective when the algorithm is ES256, ES384, ES512, RS256, RS384, RS512 |
| Username            | Username                                                           |
| Username JsonPath   | The path of the user field in the payload, formatted as json path  |
| Verification Fields | Supports selecting exp, nbf                                        |
| Base64 Encryption   | Whether the signature is base64 encoded, only effective with HS256, HS384, HS512 |
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

For quick JWT construction, refer to the [JWT generation tool](https://jwt.io/).

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
  "iss":" apinto",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1713339896
}
```

Here, the username is `John Doe`, expiration time is `1713339896` which corresponds to `2024-04-17 15:44:56`, and the issuer is `apinto`.

`Secret` is set to `apinto`, as shown below:

![](http://data.eolinker.com/course/JC9MEwsf53e5bf7aa619014a387ca938fadde0e30522b69.png)

**Token**

Generate the token according to the above configuration:

```shell
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiIGFwaW50byIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzEzMzM5ODk2fQ.IYp4hR_vTCFgOQdF3qbgOU7hrWo4W-WeFkIXdC7pqs8
```

**Configure JWT Authentication**

1. When configuring authentication, select `Jwt` as the authentication type and fill in the authentication information:

![](images/2024-08-13/8c0630df49ab83fb41265e025b19bdbef2998158dd41d2b97963f23333a5de20.png)

![](images/2024-08-13/48a8eda9dd68104a788d5ac6f04f6ef5282052477ff4440ff72b044cfd61c911.png)  

**Configuration Description**

| Field Name          | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| Parameter Location  | Where the authentication check is placed in the request, supports Header, Query, Body |
| Parameter Name      | Name of the parameter                                              |
| Iss                 | The issuer                                                         |
| Signing Algorithm   | Supports HS256, HS384, HS512, ES256, ES384, ES512, RS256, RS384, RS512 |
| Secret              | Key, only effective when the signing algorithm is HS256, HS384, HS512 |
| RSA Public Key      | RSA public key, only effective when the algorithm is ES256, ES384, ES512, RS256, RS384, RS512 |
| Username            | Username                                                           |
| Username JsonPath   | The path of the user field in the payload, formatted as json path  |
| Verification Fields | Supports selecting exp, nbf                                        |
| Base64 Encryption   | Whether the signature is base64 encoded, only effective with HS256, HS384, HS512 |
| Hide Authentication Information | Whether to hide user information when forwarding to upstream services |

After completing the configuration, click `Confirm`.

**Invocation**

Input the generated `Token` in the request header to call the API.

![](http://data.eolinker.com/course/2Y8u7mg15e2f620beebf8128cfc21327f8c3101e1da8a03.png)