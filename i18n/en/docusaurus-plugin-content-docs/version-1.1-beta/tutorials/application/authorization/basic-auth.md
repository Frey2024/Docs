# Basic Authorization

Basic Authorization is a simple HTTP authentication mechanism used to authenticate users who access resources. It ensures that only authorized users can access protected resources by passing user credentials (usually a username and password) in the HTTP request header.

Basic Authorization is an authentication method based on the HTTP protocol, which encodes the username and password into Base64 format and includes them in the HTTP request header. The server authenticates users based on the credentials transmitted.

## **How It Works**

* **Encode Credentials**: The client concatenates the username and password in the format "username:password" and encodes it using Base64.
* **Transmit Credentials**: the encoded credentials are added to the Authorization field in the HTTP request header, prefixed with "Basic."
* **Server Verification**: When the server receives the request, it parses the Authorization field, decodes the Base64 string, and verifies the correctness of the username and password.

## Demonstration

1. When configuring authentication, select `Basic` for the authentication type and fill in the authentication information:

![](images/2024-08-13/c888ad70e92ecc19a1e58ac86ed9a1916b390dd26c567ea95bc19a706b0fda3e.png)

| Field Name         | Description                                           |
| ------------------ | ----------------------------------------------------- |
| Parameter Location | The location where authentication is verified in the request, supporting Header, Query, Body |
| Parameter Name     | Name of the parameter                                 |
| Username           | Username                                              |
| Password           | User password                                         |
| Expiration Time    | User expiration time, if not filled out, never expires; the expiration time is accurate to the day |
| Hide Authentication Info | Whether to hide authentication information when forwarding to upstream services |

When authentication information is included, the access result is shown in the image below.

![](http://data.eolinker.com/course/wClSGBW4d8ce3fb12bc7055cd38583b6d0d98d0d8c8c075.png)