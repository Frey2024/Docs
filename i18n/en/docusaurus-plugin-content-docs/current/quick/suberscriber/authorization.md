---
sidebar_position: 2
---
# Configure Access Authorization

Subscribers subscribe to services on an application-by-application basis. Each application has its own access authorization management. Once the subscription request is approved, users can use the application's access authorization information (such as API keys or tokens) to call the subscribed service. This ensures that the application adheres to security policies when calling APIs and prevents unauthorized access, safeguarding the security and stability of the service.

## Operational Demonstration

### Configure Access Authorization

1. Select the application for which you need to configure access authorization and click to enter the inner page.

![](../../tutorials/application/authorization/images/2024-08-14/3649262b7719154d5a1bba61f3455c2ff347b897da4925931001b4447e5b696f.png)  

2. Click `Access Authorization`, enter the authorization list page, and click the `Add Authorization` button.

![](../../tutorials/application/authorization/images/2024-08-14/18535c55dc680bf1cab3b890471e3e3572f01497c40af817680e06f1bd20bec6.png)  

3. Choose an authentication method and fill in the relevant information. Below, Basic authorization is chosen:

![](../../tutorials/application/authorization/images/2024-08-13/c888ad70e92ecc19a1e58ac86ed9a1916b390dd26c567ea95bc19a706b0fda3e.png)  

Furthermore, the platform currently supports various authentication methods such as `Apikey`, `JWT`, and `AK/SK`, among others.

For different types of authentication methods, the relevant common configuration fields are as follows:

<table><thead><tr><th width="182">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>Authentication identifier, it is recommended to use a meaningful name.</td></tr><tr><td>Parameter Position</td><td>The parameter position where the authentication information is transmitted, supporting Query and Header.</td></tr><tr><td>Parameter Key</td><td>Define from which key to retrieve the parameter value.</td></tr><tr><td>Expiration Time</td><td>Authentication expiration time; if not set, it will never expire.</td></tr><tr><td>Hide Authentication Information</td><td>Whether to hide the authentication fields when forwarding to upstream services.</td></tr></tbody></table>

For more details on using authentication, you can refer to the tutorials below:

* [APIKey](../../tutorials/application/authorization/apikey.md)
* [Basic Authorization](../../tutorials/application/authorization/basic-auth.md)
* [AK/SK](../../tutorials/application/authorization/aksk.md)
* [JWT](../../tutorials/application/authorization/jwt.md)