---
sidebar_position: 4
---

# Add Routing

Routing refers to the process where an API gateway forwards client requests to appropriate backend services based on a specific path or conditions. The API gateway is an intermediary layer positioned between the client and server, responsible for managing, monitoring, and routing client API requests. Routing is one of the core functions of the API gateway.

In an API gateway, **routing** is often based on several conditions such as URL path, HTTP method (e.g., GET, POST), request headers, query parameters, etc. When the API gateway receives a client request, it determines which backend service to forward the request to based on pre-configured routing rules.

## Routing Matching Rules

APIPark's routing can be configured with multiple criteria, including request protocol, method, path, headers, and query parameters.

Matching priority is: Request Protocol > Request Method > Request Path > Request Header > Query Parameters

**Request Protocol, Request Method** can be multi-selected during configuration, as shown below:

![](images/2024-09-14/494b224a75929fee67950022785a9186a6aaed11f5543556f1d678dc0f3f262f.png)  

### Request Path Matching Rules

| Matching Type | Rule | Description                                                  |
| ------------- | ---- | ------------------------------------------------------------ |
| Exact Match   | str  | The value exists and is exactly equal to str                 |
| Prefix Match  | str* | The value exists and str is a prefix of the value. In this mode, the gateway appends the path following **str** to the forwarding path. |

#### Exact Match Example

* Request Path: /shop/user/info
* Forward Path: /user/info

![](images/2024-09-14/4703b2ce3e0ba50d687337b5fec27054f2f2c94146a1d8e056f77d06102dd2d1.png)  

The request path then appears as follows:

```
POST /shop/user/info
```

The path to the upstream service requested by the gateway is:

````
POST /user/info
````

If the request path is not `/shop/user/info`, this route cannot be matched.

#### Prefix Match Example

* Request Path: /shop/user/*
* Forward Path: /user/

![](images/2024-09-14/ce96fc595f0776f69333004d41e605bb779c19e3a27e9f9a942c79e210227e47.png)  

The relationship between the requested path and the actual path forwarded to the upstream service is as follows:

```shell
POST /shop/user/info    ->   POST /user/info
POST /shop/user/phone   ->   POST /user/phone
POST /shop/user/order   ->   POST /user/order
```

### Request Header, Query Parameter Value Matching Rules

| Matching Type              | Rule   | Description                                               |
| -------------------------- | ------ | --------------------------------------------------------- |
| Exact Match                | str    | The value exists and is exactly equal to str              |
| Prefix Match               | str*   | The value exists and str is a prefix of the value         |
| Suffix Match               | *str   | The value exists and str is a suffix of the value         |
| Substring Match            | *str*  | The value exists and str is a substring of the value      |
| Not Equal Match            | !=str  | The value exists and does not equal str                   |
| Empty Value Match          | $      | The key must exist with an empty value, mainly for headers and query parameters |
| Existence Match            | **     | The key must exist and not be empty, mainly for headers and query parameters |
| Non-existence Match        | !      | The key must not exist, mainly for headers and query parameters |
| Case-sensitive Regex Match | ~=str  | The value matches the regex                               |
| Case-insensitive Regex Match | ~*=str | The value matches the regex                               |
| Wildcard Match             | *      | Always matches successfully                               |

![](images/2024-09-14/28ebc696449f02ce5c69ad745949c3fe187db7f7d3a45d5f3b935da17a23d7c5.png)  

## Operational Demonstration

### Add Routing

1. Select the service you want to configure and enter the service details page.

![](images/2024-09-02/10afbdf7d3f5c8f3e57aa75b2384451ac2b93ce5fb4e8da82485d6161fc97dd7.png)  

2. Click "Routing"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2F9BKiEaBNnFL4hPZEfZrLFT_doc.png?alt=media&token=ab5e9d1a-0656-42c2-8258-4dfe0aed8b83)

3. Click "Add Routing"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FinoKzw9iPg9XB6aERNrfEH_doc.png?alt=media&token=1334052c-4fde-44eb-81dd-5699322af903)

4. Fill in the basic routing information

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FfszwLvMnE9fvs5QHRGn7jT_doc.png?alt=media&token=82196b52-0b21-47e3-9a22-d9e07e26aa7d)

**Field Description**

| Field Name         | Field Description                                             |
| ------------------ | ------------------------------------------------------------- |
| Intercept the Request | Whether to intercept the request for this interface         |
| Request Method     | Supports common HTTP methods like GET, POST, PUT, DELETE, etc., and allows multiple selections |
| Request Path       | URI of the API used for the relative path in the request URL, supports Restful parameters and prefix matching |
| Advanced Matching  | Supports routing matches via request headers, parameters, or Cookies, allowing multiple entries |
| Forwarding Upstream Path | Relative path forwarded to the upstream                     |
| Request Timeout    | Defines the timeout for the gateway forwarding requests to upstream |
| Retry Count        | When a request forwarded to upstream fails, the gateway will automatically retry; the maximum number of attempts is defined |
| Forwarding Upstream Headers | Allows creation, editing, and deletion of headers in the forwarded request, mainly used for authentication between the gateway and upstream |

After completing the fields, click the "Submit" button.

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FuRxWf3ZmScCSzci3QsW5ZS_doc.png?alt=media&token=0cf544df-6891-46b9-a22c-7f830c2e8d0d)

This guide covers all the steps to configure routing in an application, including selecting routing options, adding routes, choosing request methods, configuring API basic information, and finally submitting the configuration.