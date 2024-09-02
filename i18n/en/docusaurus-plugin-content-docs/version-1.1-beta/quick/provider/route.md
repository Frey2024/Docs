---
sidebar_position: 4
---

# Adding Routes

Routing refers to the process where the API Gateway forwards client requests to the appropriate backend services based on specific paths or conditions. The API Gateway is an intermediary layer located between the client and the server, used to manage, monitor, and route client API requests. Its routing capability is one of the core functionalities of the API Gateway.

In an API Gateway, **routing** typically relies on conditions such as URL paths, HTTP methods (like GET, POST), request headers, query parameters, and more. When the API Gateway receives a client request, it determines which backend service to forward the request to, based on pre-configured routing rules.

## Demonstration

### Adding a Route

1. Select the service you need to configure and enter its details page.

![](images/2024-09-02/10afbdf7d3f5c8f3e57aa75b2384451ac2b93ce5fb4e8da82485d6161fc97dd7.png)  

2. Click on "Route".

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2F9BKiEaBNnFL4hPZEfZrLFT_doc.png?alt=media&token=ab5e9d1a-0656-42c2-8258-4dfe0aed8b83)

3. Click on "Add Route".

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FinoKzw9iPg9XB6aERNrfEH_doc.png?alt=media&token=1334052c-4fde-44eb-81dd-5699322af903)

4. Fill in the basic information for the route.

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FfszwLvMnE9fvs5QHRGn7jT_doc.png?alt=media&token=82196b52-0b21-47e3-9a22-d9e07e26aa7d)

**Field Descriptions**

| Field Name              | Field Description                                               |
| :---------------------- | :-------------------------------------------------------------- |
| Intercept this request  | Whether to intercept the requests of this interface            |
| Request Method          | Supports common HTTP request methods like GET, POST, PUT, DELETE, and allows multiple selections |
| Request Path            | URI of the API, applied to the relative path in the request URL, supports Restful parameters and prefix matching |
| Advanced Matching       | Supports routing matches through request headers, parameters, and Cookies; allows multiple entries |
| Forward Upstream Path   | The relative path to be forwarded upstream                      |
| Request Timeout         | Defines the timeout for the gateway to forward requests and receive responses from upstream |
| Retry Count             | When forwarding requests to upstream fails, the gateway will automatically retry, with a maximum retry count |
| Forward Upstream Headers| Allows creating, editing, and deleting parameters for forward upstream headers, primarily used for authentication between gateway and upstream |

Once completed, click the "Submit" button.

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FuRxWf3ZmScCSzci3QsW5ZS_doc.png?alt=media&token=0cf544df-6891-46b9-a22c-7f830c2e8d0d)

This guide covers all steps for configuring routes in an application, including selecting route options, adding routes, choosing request methods, setting up basic API information, and finally submitting the configuration.