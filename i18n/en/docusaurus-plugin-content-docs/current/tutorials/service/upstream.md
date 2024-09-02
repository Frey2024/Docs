---
sidebar_position: 4
---

# Upstream

In `APIPark`, "upstream" refers to the backend servers or services to which API requests are ultimately routed. The upstream typically includes the actual business logic processing of API requests, data storage, and applications. In an API gateway architecture, the gateway receives and processes requests from the client, then forwards these requests to the upstream server for specific processing, retrieves the response, and returns it to the client.

Configuring upstream is a crucial step in the API open platform to ensure that API requests are routed correctly to the backend service. Upstream configuration involves defining and managing target addresses, load balancing strategies, and failover mechanisms to ensure high availability and performance of the service.

## Operation Demonstration
### Configure Upstream

1. Select the service to be configured and enter the internal page of the service.

![](images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)  

2. Click on `Upstream` to enter the upstream configuration page.

![](images/2024-08-14/d570bc5e464539010e542ddc88602fbcd94d6dbc14d01809908a220d32341b91.png)  

3. Configure the upstream information. After the configuration is complete, click `Save`.

![](images/2024-08-14/7dd546e21086267638ee1c14d83a42e3cc9ba0e88de8b82b6a3b85e7a1baa386.png)  

![](images/2024-08-14/772f53c2f1cadef9e666cb7135f2e79b2b90db23c76bfdcc23e819425619d395.png)  

**Field Description**

<table><thead><tr><th width="169">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Upstream Type</td><td>The type of upstream service. Currently, only <code>static upstream, i.e., services with a fixed IP/domain name + port number entry, is supported.</code></td></tr><tr><td>Service Address</td><td>The access address of the upstream service. Multiple upstream addresses can be entered, along with the weight for each upstream service.</td></tr><tr><td>Request Protocol</td><td>The protocol used to request upstream services. Currently, only HTTP/HTTPS is supported.</td></tr><tr><td>Load Balancing</td><td>Load balancing algorithm. Currently supports weighted round-robin and IP Hash.</td></tr><tr><td>Forward Host</td><td>The Host value used when requesting upstream services. There are three options: <br/><br/><b>Transmit client request Host:</b><br/> In this strategy, the gateway or proxy server does not modify the Host header information in the request. It directly transmits the original Host header from the client (the party initiating the request) to the upstream service (the actual server providing the service). <br/>This allows the upstream service to identify the original source domain name of the request, allowing provision of customized content or execution of specific logic based on the original Host header of the request.<br/><br/><b>Use the upstream service Host:</b><br/><br/> In this strategy, the gateway or proxy server replaces the original Host header in the request with a configured Host header of one or more upstream services. <br/>This is usually used to route requests to specific backend services, regardless of what the Host header in the client request is. This can simplify the configuration of upstream services, as they do not need to care about the Host header information of incoming requests.<br/><br/><b>Rewrite Host:</b><br/><br/> This strategy involves modifying the Host header in the request, changing it to a specific value. This can be used in various situations, such as when a request needs to be routed to a different domain, or when ensuring the request meets specific format or security requirements. <br/> Rewriting the Host header can provide greater flexibility but may also lead to unexpected behaviors, especially if the client relies on the original Host header for certain operations.</td></tr><tr><td>Timeout</td><td>The timeout period for requesting upstream, measured in milliseconds.</td></tr><tr><td>Timeout Retry Count</td><td>The number of times to retry upstream requests upon timeout. When multiple service addresses are configured for upstream, the gateway will try to request service addresses that have not been requested yet.</td></tr><tr><td>Call Rate Limit</td><td>The number of requests currently allowed per second for the upstream.</td></tr><tr><td>Forward Upstream Request Headers</td><td>When requesting upstream, the header information to be added or removed. If not configured, the gateway will forward the request headers to the upstream service without alteration.</td></tr></tbody></table>

After filling in, click `Save`.