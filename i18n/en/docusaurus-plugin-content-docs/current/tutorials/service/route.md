---
sidebar_position: 2
---

# Routing

Routing refers to the process by which an API Gateway forwards client requests to the appropriate backend service based on specific paths or conditions. An API Gateway is a middleware layer that sits between clients and servers, used for managing, monitoring, and routing client API requests. Its routing functionality is one of the core features of an API Gateway.

In an API Gateway, routing is typically based on conditions such as URL paths, HTTP methods (e.g., GET, POST), request headers, query parameters, and more. When the API Gateway receives a client request, it decides which backend service to forward the request to based on pre-configured routing rules.

## Operation Demonstration
### Adding a Route

1. Select the service you need to configure and enter the service page.

![](images/2024-09-02/10afbdf7d3f5c8f3e57aa75b2384451ac2b93ce5fb4e8da82485d6161fc97dd7.png)  

2. Click on "Routing"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2F9BKiEaBNnFL4hPZEfZrLFT_doc.png?alt=media&token=ab5e9d1a-0656-42c2-8258-4dfe0aed8b83)

3. Click on "Add Route"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FinoKzw9iPg9XB6aERNrfEH_doc.png?alt=media&token=1334052c-4fde-44eb-81dd-5699322af903)

4. Fill in the basic routing information

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FfszwLvMnE9fvs5QHRGn7jT_doc.png?alt=media&token=82196b52-0b21-47e3-9a22-d9e07e26aa7d)

**Field Descriptions**

| Field Name        | Description                                                        |
| :---------------- | :----------------------------------------------------------------- |
| Intercept Request | Whether to intercept the request to this interface                 |
| Request Method    | Supports common HTTP request methods like GET, POST, PUT, DELETE, etc., and supports multiple selections |
| Request Path      | The URI of the API used for the relative path in the request URL; supports Restful parameters and path prefix matching |
| Advanced Matching | Supports matching via request headers, request parameters, and Cookies; multiple entries can be added |
| Forwarding Upstream Path | The relative path forwarded to the upstream service            |
| Request Timeout   | Defines the timeout period for the gateway to forward a request to the upstream to receive a response |
| Retry Count       | The gateway will automatically retry forwarding the request when a failure occurs; the maximum retry count does not exceed the configured limit |
| Forwarding Upstream Headers | Allows new, edit, and delete operations on forwarding upstream headers, primarily used in authentication between the gateway and upstream |

Once completed, click the "Submit" button.

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FuRxWf3ZmScCSzci3QsW5ZS_doc.png?alt=media&token=0cf544df-6891-46b9-a22c-7f830c2e8d0d)

This guide covers all steps for configuring routes in the application, including selecting routing options, adding routes, choosing request methods, configuring API basic information, and finally submitting the configuration.

### Editing a Route

1. Click the `Edit` button next to the route you want to edit.

![](images/2024-09-02/de143af72b4d8d61af26739eececb7364423a14407d68f5e3843032ce1bb1f1a.png)  

2. Fill in the route information.

![](images/2024-09-02/7120cd35f132f67a6b234ee2d1326c41c53f749f5352f7e75c61107be8b401c3.png)  

After filling, click submit.

### Deleting a Route
1. Click the `Delete` button next to the route you want to delete.

![](images/2024-09-02/0d47484a137f38559a8f423fb3649c88f474138baf1d2abc633e0ac4f211e0dd.png)  

2. In the pop-up window, click confirm.

![](images/2024-09-02/ec148b1e3175aa005950b0a440e64c5eadff07c64974ccf87741008da91e8604.png)  

### Deleting an API
1. Click the `Delete` button next to the API you want to delete.

![](images/2024-08-14/03eddc92ac67816a8f0f6959d272076460112ecef284eb55e7e100921f76374f.png)  

2. In the pop-up window, click `Confirm`.

![](images/2024-08-14/c8a6a3ef88e166476b267c09389562b403bafefc771f24fb8af89bcf6d365f85.png)  