# API Key

An API Key (Application Programming Interface Key) is a simple and effective authentication mechanism used to control and manage access to an API. It is generated and distributed by the API provider to legitimate API users, ensuring that only authorized users or applications can access the API's resources and services.

An API Key is a unique string, typically composed of a series of letters and numbers, used to identify and verify the user or application calling the API. Each API Key is unique and linked to a specific user, application, or project.

## **Operation Demonstration**

1. When configuring authentication, select `APIKey` as the authentication type and fill in the authentication information.

![](images/2024-10-28/c4bf0499a0bb0543f7af608514eb69191cac49803651bbabce55bc8f7550228e.png)  

| Field Name      | Description                                        |
| ---------------- | --------------------------------------------------- |
| Parameter Position | The position where authentication validation is placed in the request; supports Header, Query, Body |
| Parameter Name   | Name of the parameter                                |
| Apikey           | User static token                                    |
| Expiration Time  | User expiration time; if not filled, it never expires, with expiration time accurate to the day |
| Hide Authentication Info | Whether to hide authentication fields when forwarding to upstream services |

2. When accessing the interface, include `Authorization` in the request header, with the value `apinto`. Here, **Apikit** is used for access testing.

![](http://data.eolinker.com/course/b4h2qgQ8c7f309a795ff56b2f275627e9cc8ab7417b6524.png)