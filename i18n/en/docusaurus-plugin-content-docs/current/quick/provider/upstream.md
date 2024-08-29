# Configure Upstream

"Upstream" refers to the backend server or service where API requests are ultimately routed. The upstream typically includes the actual business logic, data storage, and applications that process API requests. In an API gateway architecture, the gateway receives and processes requests from clients and then forwards these requests to upstream servers for specific processing, retrieves the response, and returns it to the client.

Configuring upstream is a critical step in the API open platform to ensure that API requests are correctly routed to the backend services. Upstream configuration involves defining and managing target addresses, load balancing strategies, and failover mechanisms to ensure high availability and performance of services.

## Operation Demo

1. Select the service that needs configuration and enter the internal service page.

![](../../tutorials/service/images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)  

2. Click `Upstream` to enter the upstream configuration page.

![](../../tutorials/service/images/2024-08-14/d570bc5e464539010e542ddc88602fbcd94d6dbc14d01809908a220d32341b91.png)  

3. Configure the upstream information. Once the configuration is complete, click `Save`.

![](../../tutorials/service/images/2024-08-14/7dd546e21086267638ee1c14d83a42e3cc9ba0e88de8b82b6a3b85e7a1baa386.png)  

![](../../tutorials/service/images/2024-08-14/772f53c2f1cadef9e666cb7135f2e79b2b90db23c76bfdcc23e819425619d395.png)  

**Field Explanation**

<table><thead><tr><th width="169">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Upstream Type</td><td>The type of upstream service, currently only supports <code>static upstream, which has a fixed IP/domain + port number service entrance.</code></td></tr><tr><td>Service Address</td><td>The access address of the upstream service. You can fill in multiple upstream addresses and configure the weight for each upstream service.</td></tr><tr><td>Request Protocol</td><td>The protocol for requesting the upstream service, currently supports HTTP/HTTPS only.</td></tr><tr><td>Load Balancing</td><td>Load balancing algorithm, currently supports weighted round robin, IP Hash.</td></tr><tr><td>Forward Host</td><td>Specifies the Host value used when requesting the upstream service. There are three options:<br/><br/><b>Pass-through client request Host:</b><br/>Under this strategy, the gateway or proxy server does not modify the Host header information in the request. It directly passes the original Host header from the client (the one making the request) to the upstream service (the actual server providing the service).<br/>This allows the upstream service to identify the original source domain of the request, thereby providing customized content or executing specific logic based on the original Host header.<br/><br/><b>Use upstream service Host:</b><br/><br/>In this strategy, the gateway or proxy server replaces the original Host header in the request with a configured Host header for one or more upstream services.<br/>This is usually used to route requests to a specific backend service regardless of the Host header in the client request. This can simplify the configuration of upstream services as they don’t need to care about the Host header information of incoming requests.<br/><br/><b>Rewrite Host:</b><br/><br/>This strategy involves modifying the Host header in the request to change it to a specific value. This can be used in various situations, such as when requests need to be routed to a different domain or when ensuring requests meet specific format or security requirements.<br/>Rewriting the Host header can provide greater flexibility but may also cause unexpected behavior, particularly if the client relies on the original Host header for certain operations.</td></tr><tr><td>Timeout</td><td>The timeout for requesting the upstream, specified in ms.</td></tr><tr><td>Timeout Retry Count</td><td>The number of times to retry requesting the upstream when a timeout occurs. If multiple service addresses are configured for the upstream, on retry the gateway will request a service address that hasn't been requested yet.</td></tr><tr><td>Call Rate Limit</td><td>The number of requests allowed per second for the current upstream.</td></tr><tr><td>Forward Upstream Request Headers</td><td>When requesting upstream, headers that need to be added or removed. If not configured, the gateway will forward the request headers to the upstream service as they are.</td></tr></tbody></table>

After filling out, click `Save`.