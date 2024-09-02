# API Key

An API Key (Application Programming Interface Key) is a simple and effective authentication mechanism used to control and manage access to an API. It is generated and distributed by the API provider to legitimate API users, ensuring that only authorized users or applications can access the API's resources and services.

An API Key is a unique string, typically consisting of letters and numbers, used to identify and authenticate the users or applications calling the API. Each API Key is unique and bound to a specific user, application, or project.

## **Operational Demonstration**

1. When configuring authentication, select `APIKey` as the authentication type and fill in the authentication information.

![](images/2024-08-13/5c66790932edf2bac9e558eb25630c80e44ca01a19f0b3f4772b0d04a13ba8dd.png)

| Field Name       | Description                                      |
| ---------------- | ------------------------------------------------ |
| Parameter Position | The position where authentication validation is placed in the request, supporting Header, Query, Body |
| Parameter Name   | The name of the parameter                        |
| Apikey           | User static token                                |
| Expiry Date      | User expiry date, does not expire if left blank, accurate to the day |
| Hide Authentication Information | Whether to hide the authentication field when forwarding to upstream services. |

2. When accessing the interface, the request header carries `Authorization` with the value `apinto`. Here, **Apikit** is used for access testing.

![](http://data.eolinker.com/course/b4h2qgQ8c7f309a795ff56b2f275627e9cc8ab7417b6524.png)