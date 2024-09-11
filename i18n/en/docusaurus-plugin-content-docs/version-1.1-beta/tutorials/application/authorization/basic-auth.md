# Basic Authorization

Basic Authorization is a simple HTTP authentication mechanism used to verify the identity of users accessing resources. It ensures that only authorized users can access protected resources by passing user credentials (usually username and password) through the HTTP request header.

Basic Authorization is an authentication method based on the HTTP protocol, which encodes the username and password into a Base64 format and includes it in the HTTP request header. The server authenticates based on the credentials passed.

## **Working Principle**

* **Encoding Credentials**: The client concatenates the username and password in the format "username:password" and encodes them using Base64.
* **Transmitting Credentials**: The encoded credentials are added to the Authorization field in the HTTP request header, prefixed with "Basic".
* **Server Verification**: Upon receiving the request, the server parses the Authorization field, decodes the Base64 string, and verifies the correctness of the username and password.

## Operation Demonstration

1. When configuring authentication, select `Basic` as the authentication type and fill in the authentication information:

![](images/2024-09-11/f914456039f6be5637f6922c934dd417c99c60eb8b37d9ad656bb4770153eafd.png)  

| Field Name       | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Parameter Location | The location where the authentication check is placed in the request, supports Header, Query, Body |
| Parameter Name   | The name of the parameter                                    |
| Username         | The username                                                |
| Password         | The user password                                            |
| Expiration Time  | User expiration time, if not filled it never expires, precise to the day |
| Hide Authentication Info | Whether to hide authentication info when forwarding to upstream services |

When including the authentication information, the access result is as shown below:

![Example Result](http://data.eolinker.com/course/wClSGBW4d8ce3fb12bc7055cd38583b6d0d98d0d8c8c075.png)