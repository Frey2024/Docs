---
sidebar_position: 2

---

# Routing

Routing refers to the process by which an API gateway forwards a client request to the corresponding backend service based on a specific path or conditions from the request. An API gateway is an intermediary layer situated between the client and server, responsible for managing, monitoring, and routing client API requests. Its routing functionality is one of the core features of an API gateway.

In an API gateway, **routing** is typically based on various conditions such as URL path, HTTP method (e.g., GET, POST), request headers, and query parameters. When the API gateway receives a client request, it decides which backend service to forward the request to based on pre-configured routing rules.

## Routing Matching Rules

APIPark's routing can be configured with multiple criteria, including request protocol, request method, request path, request headers, and query parameters.

The matching priority is: Request Protocol > Request Method > Request Path > Request Header > Query Parameter

**Request Protocol, Request Method** can be multi-selected during configuration, as shown below:

![](images/2024-09-14/494b224a75929fee67950022785a9186a6aaed11f5543556f1d678dc0f3f262f.png)  

### Request Path Matching Rules

| Match Type     | Rule | Description                                                  |
| -------------- | ---- | ------------------------------------------------------------ |
| Exact Match    | str  | The value exists and is completely equal to str              |
| Prefix Match   | str* | The value exists and str is the prefix of the value; in this mode, the gateway appends the path after **str** to the forwarding path. |

#### Exact Match Example

* Request Path: /shop/user/info
* Forwarding Path: /user/info

![](images/2024-09-14/4703b2ce3e0ba50d687337b5fec27054f2f2c94146a1d8e056f77d06102dd2d1.png)  

In this case, the request path is as follows:

```
POST /shop/user/info
```

The gateway will request the upstream service with the following path:

````
POST /user/info
````

If the request path is not `/shop/user/info`, the route cannot be matched.

#### Prefix Match Example

* Request Path: /shop/user/*
* Forwarding Path: /user/

![](images/2024-09-14/ce96fc595f0776f69333004d41e605bb779c19e3a27e9f9a942c79e210227e47.png)  

In this case, the relationship between the requested path and the actual path forwarded to the upstream service is as follows:

```shell
POST /shop/user/info    ->   POST /user/info
POST /shop/user/phone   ->   POST /user/phone
POST /shop/user/order   ->   POST /user/order
```

### Request Header, Query Parameter Value Matching Rules

| Match Type                  | Rule   | Description                                                  |
| --------------------------- | ------ | ------------------------------------------------------------ |
| Exact Match                 | str    | The value exists and is completely equal to str              |
| Prefix Match                | str*   | The value exists and str is the prefix                       |
| Suffix Match                | *str   | The value exists and str is the suffix                       |
| Substring Match             | *str*  | The value exists and str is a substring                      |
| Not Equal Match             | !=str  | The value exists and differs from str                        |
| Empty Value Match           | $      | The key must exist and the value must be empty, often used for headers or query parameters |
| Existence Match             | **     | The key must exist and not be empty, often used for headers or query parameters |
| Non-existence Match         | !      | The key must not exist, often used for headers or query parameters |
| Case-sensitive Regex Match  | ~=str  | The value matches the regular expression                      |
| Case-insensitive Regex Match| ~*=str | The value matches the regular expression                      |
| Any Match                   | *      | Always matches successfully                                  |

![](images/2024-09-14/28ebc696449f02ce5c69ad745949c3fe187db7f7d3a45d5f3b935da17a23d7c5.png)  


## Operations Demonstration

### Adding a Route

1. Select the service to configure and enter the service details page.

![](images/2024-09-02/10afbdf7d3f5c8f3e57aa75b2384451ac2b93ce5fb4e8da82485d6161fc97dd7.png)  

2. Click "Route"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2F9BKiEaBNnFL4hPZEfZrLFT_doc.png?alt=media&token=ab5e9d1a-0656-42c2-8258-4dfe0aed8b83)

3. Click "Add Route"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FinoKzw9iPg9XB6aERNrfEH_doc.png?alt=media&token=1334052c-4fde-44eb-81dd-5699322af903)

4. Fill in the basic route information

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FfszwLvMnE9fvs5QHRGn7jT_doc.png?alt=media&token=82196b52-0b21-47e3-9a22-d9e07e26aa7d)

**Field Descriptions**

| Field Name         | Description                                                 |
| :----------------- | :----------------------------------------------------------- |
| Intercept Request  | Whether to intercept the request for this interface          |
| Request Method     | Supports common HTTP request methods like GET, POST, PUT, DELETE, etc., and allows multiple selections |
| Request Path       | The API's URI used for the relative path in the request URL, supports Restful parameters and path prefix matching |
| Advanced Matching  | Supports routing matches via request headers, parameters, and cookies, allowing multiple entries |
| Forwarding Path    | The relative path for forwarding upstream                    |
| Request Timeout    | Defines the timeout duration for forwarding requests to upstream until response |
| Retry Count        | Triggers automatic retry for forwarding requests upon failure, not exceeding the maximum retry count |
| Upstream Header    | Allows creation, editing, and deletion of request headers for upstream forwarding, mainly for authentication between the gateway and upstream |

After filling, click the "Submit" button.

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FuRxWf3ZmScCSzci3QsW5ZS_doc.png?alt=media&token=0cf544df-6891-46b9-a22c-7f830c2e8d0d)

This guide covers all steps in configuring routing in the application, including selecting routing options, adding routes, choosing request methods, configuring API basic information, and ultimately submitting the configuration.

### Editing a Route

1. Click the `Edit` button next to the route to be edited.

![](images/2024-09-02/2f3a9b53d1b32c3f26339d8bbb58640db92f6e670e530ee673fad168537423ca.png)  

2. Fill in the route information.

![](images/2024-09-02/a61a87a719820aefbeb15a667152ff5b8d6e827045d2d3a2027729316eedceb2.png)  

After completion, click submit.

### Deleting a Route

1. Click the `Delete` button next to the route to be deleted.

![](images/2024-09-02/3114bf7e93ee86c7c05bbd36b712a356fd7eebeb16e28ab53f16d0fbd58d64de.png)  

2. Click confirm in the pop-up box.

![](images/2024-09-02/3cd25fbfcf3648db6a358d78ccc77bca1e1027ad30c11ed31d1f0d8bcd7b8e62.png)  
