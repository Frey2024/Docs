# Adding an API

An API (Application Programming Interface) is a core component of `APIPark`, serving as a standardized interface to connect various services and applications, facilitating data sharing and functionality invocation. APIs offer an efficient, secure, and scalable communication mechanism that supports microservices architecture, enhancing user experiences, and promoting innovation and development.

In **APIPark**, APIs are not only the bridges between systems but also the foundation for building efficient, flexible, and innovative ecosystems. With good API design and management, the platform can achieve high interoperability and scalability, providing excellent service experiences for users and developers.

## Operation Demonstration

### Adding an API

1. Select the service that requires configuration and enter the internal service page.

![](../../tutorials/service/images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)

2. Click `Add API`.

![](../../tutorials/service/images/2024-08-14/f2448c1c54a34932439231c739c511bd46c1dfec5e0ba7c90d892b598567c6db.png)  

3. Enter the API information in the pop-up box, and click `Submit` after completion.

![](../../tutorials/service/images/2024-08-14/3ec5df3d14e4d4ba7545dbb42670e78cc9acb6a6170630458cb2f46903959774.png)  

**Field Explanation**

<table><thead><tr><th width="195">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>API Name</td><td>The name used to identify the API, which can be named according to its purpose or function.</td></tr><tr><td>Description</td><td>A detailed explanation of the API.</td></tr><tr><td>Request Method</td><td>The request method used by the client.</td></tr><tr><td>Request Path</td><td>The request path used by the client, which will be concatenated with the service prefix.</td></tr><tr><td>Advanced Matching</td><td>Allows for more customized routing matching rules for client requests.</td></tr><tr><td>Forwarding Upstream Path</td><td>The path forwarded to the upstream, which may differ from the request path.</td></tr><tr><td>Request Timeout</td><td>The timeout duration for forwarding requests to the upstream service, in milliseconds (ms).</td></tr><tr><td>Retry Count</td><td>The number of times a request is retried when a timeout occurs.</td></tr></tbody></table>

4. Click the `Edit` button next to the API you want to edit.

![](../../tutorials/service/images/2024-08-14/41f8a41c79d9d4a1c363d12798c7ce1986f240e615082feb7c5bef96e967a216.png) 

5. Fill in the API documentation information, including details about the request parameters, return values, and other parameters required for the client request.

![](../../tutorials/service/images/2024-08-14/5d379ab1769b312e7b0015249f65bdebbe7bd32846ccd11e78f64e3bdcfd3eb8.png)  

The document content here will be displayed in the service marketplace for service subscribers to understand how to call the subscribed APIs.