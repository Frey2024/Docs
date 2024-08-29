# API Key

An API Key (Application Programming Interface Key) is a straightforward and effective authentication mechanism used to control and manage access to an API. It is generated and distributed by the API provider to authorized API users, ensuring that only authorized users or applications can access the API's resources and services.

An API Key is a unique string, typically composed of a series of letters and numbers, used to identify and authenticate the user or application calling the API. Each API Key is unique and linked to a specific user, application, or project.

## **Demonstration of Operations**

1. When configuring authentication, select `APIKey` as the authentication type and fill in the authentication information.

![](images/2024-08-13/5c66790932edf2bac9e558eb25630c80e44ca01a19f0b3f4772b0d04a13ba8dd.png)  

| Field Name        | Description                                         |
| ----------------- | --------------------------------------------------- |
| Parameter Location| The location where the authentication check is placed in the request, supporting Header, Query, Body |
| Parameter Name    | Name of the parameter                               |
| Apikey            | User's static token                                 |
| Expiration Time   | User expiration time, if not filled, it never expires, accurate to the day |
| Hide Auth Info    | Whether to hide authentication fields when forwarding to upstream services |

2. When accessing the API, include `Authorization` in the request header with a value of `apinto`. Use **Apikit** for access testing.

![](http://data.eolinker.com/course/b4h2qgQ8c7f309a795ff56b2f275627e9cc8ab7417b6524.png)