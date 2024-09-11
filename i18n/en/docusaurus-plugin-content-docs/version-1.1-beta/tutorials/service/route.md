---
sidebar_position: 2
---

# Routing

Routing refers to the process by which an API Gateway forwards client requests to the appropriate backend service based on specific paths or conditions. An API Gateway is a middleware layer that sits between clients and servers, used for managing, monitoring, and routing client API requests. Its routing functionality is one of the core features of an API Gateway.

In an API Gateway, routing is typically based on conditions such as URL paths, HTTP methods (e.g., GET, POST), request headers, query parameters, and more. When the API Gateway receives a client request, it decides which backend service to forward the request to based on pre-configured routing rules.

## Operation Demonstration
### Adding a Route

1. Select the service you need to configure and enter its details page.

![](../../quick/provider/images/2024-09-08/30415699670c5235f8b4b9d682d6b1b4e6ecd26624cb658ef283b08487bbd197.png)  

2. Click on "Route".

![](../../quick/provider/images/2024-09-08/fa0c0f57d0c2d3724c9b69bb9eb589a0c40461534290b920e1113e292c11cf79.png)  

3. Click on "Add Route".

![](../../quick/provider/images/2024-09-08/fbc1db7a0d197bd7ba2f1715d6c16ed9547b805cfb729e5b86a1ecbb3f99566a.png)  

4. Fill in the basic information for the route.

![](../../quick/provider/images/2024-09-08/61f118170296ba7e59ff90fbb88241c13859d926559d2ad4e3d2b33c67cfea9e.png)  

**Field Descriptions**

| Field Name               | Field Description                                            |
| :----------------------- | :----------------------------------------------------------- |
| Intercept this request   | Whether to intercept the requests of this interface          |
| Request Method           | Supports common HTTP request methods like GET, POST, PUT, DELETE, and allows multiple selections |
| Request Path             | URI of the API, applied to the relative path in the request URL, supports Restful parameters and prefix matching |
| Advanced Matching        | Supports routing matches through request headers, parameters, and Cookies; allows multiple entries |
| Forward Upstream Path    | The relative path to be forwarded upstream                   |
| Request Timeout          | Defines the timeout for the gateway to forward requests and receive responses from upstream |
| Retry Count              | When forwarding requests to upstream fails, the gateway will automatically retry, with a maximum retry count |
| Forward Upstream Headers | Allows creating, editing, and deleting parameters for forward upstream headers, primarily used for authentication between gateway and upstream |

Once completed, click the "Submit" button.

### Editing a Route

1. Click the `Edit` button next to the route you want to edit.

![](images/2024-09-11/c7d609121340b4ac7f258bb68e87ea1544eaa7c27ca4768b8cb681fa1974774b.png)  


2. Fill in the route information.

![](images/2024-09-11/3ec653be370b09c781ac91f91f5da6a14351baf959d2895bc4dcc15f5b3eb2ff.png)  

After filling, click `Submit`.

### Deleting a Route
1. Click the `Delete` button next to the route you want to delete.

![](images/2024-09-11/2c86d7ae7a5a25a93d1355ffa1dfc0f11258c3c423426d89fea4bdbb6e72bc4a.png)  

2. In the pop-up window, click `Confirm`.

![](images/2024-09-11/f26fd3f4a09bd4918e57f8e613d754bd2e2bfd1a90d38dce12dcd37a83312b98.png)  