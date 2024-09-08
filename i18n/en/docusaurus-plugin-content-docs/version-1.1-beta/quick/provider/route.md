---
sidebar_position: 4
---

# Adding Routes

Routing refers to the process where the API Gateway forwards client requests to the appropriate backend services based on specific paths or conditions. The API Gateway is an intermediary layer located between the client and the server, used to manage, monitor, and route client API requests. Its routing capability is one of the core functionalities of the API Gateway.

In an API Gateway, **routing** typically relies on conditions such as URL paths, HTTP methods (like GET, POST), request headers, query parameters, and more. When the API Gateway receives a client request, it determines which backend service to forward the request to, based on pre-configured routing rules.

## Demonstration

### Adding a Route

1. Select the service you need to configure and enter its details page.

![](images/2024-09-08/30415699670c5235f8b4b9d682d6b1b4e6ecd26624cb658ef283b08487bbd197.png)  

2. Click on "Route".

![](images/2024-09-08/fa0c0f57d0c2d3724c9b69bb9eb589a0c40461534290b920e1113e292c11cf79.png)  

3. Click on "Add Route".

![](images/2024-09-08/fbc1db7a0d197bd7ba2f1715d6c16ed9547b805cfb729e5b86a1ecbb3f99566a.png)  

4. Fill in the basic information for the route.

![](images/2024-09-08/61f118170296ba7e59ff90fbb88241c13859d926559d2ad4e3d2b33c67cfea9e.png)  

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
