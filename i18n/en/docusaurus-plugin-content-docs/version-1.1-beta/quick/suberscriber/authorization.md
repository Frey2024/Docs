# Configure Access Authorization

Subscribers subscribe to services on an application basis. Each application has its own access authorization management. Once a subscription request is approved, users can use the application's access authorization information (such as API key or token) to call subscribed services. This ensures that the application calls the API in accordance with security policies and prevents unauthorized access, ensuring the security and stability of the services.

## Operation Demonstration

### Configure Access Authorization

1. Select the application that requires access authorization configuration and click to enter the details page.

![](../../tutorials/application/authorization/images/2024-08-14/3649262b7719154d5a1bba61f3455c2ff347b897da4925931001b4447e5b696f.png)  

2. Click on `Access Authorization` to enter the authorization list page, and click the `Add Authorization` button.

![](../../tutorials/application/authorization/images/2024-08-14/18535c55dc680bf1cab3b890471e3e3572f01497c40af817680e06f1bd20bec6.png)  

3. Choose an authentication method and fill in the relevant information. Below, we have selected Basic authentication:

![](../../tutorials/application/authorization/images/2024-08-13/c888ad70e92ecc19a1e58ac86ed9a1916b390dd26c567ea95bc19a706b0fda3e.png)  

Additionally, the open platform currently supports a variety of authentication methods such as `Apikey`, `JWT`, `AK/SK`, and more.

For different types of authentication methods, the relevant public configuration fields are as follows:

| Field Name          | Description                                                 |
|---------------------|-------------------------------------------------------------|
| Name                | Authentication identifier, it is recommended to use a meaningful name. |
| Parameter Position  | The position of the parameter for transmitting authentication information, supports Query and Header.      |
| Parameter Key       | Defines from which Key to obtain the parameter value.         |
| Expiry Time         | Authentication expiration time, if not set, it never expires. |
| Hide Authentication Information | Whether to hide the authentication field when forwarding to the upstream service. |

For more details on the usage of authentication, click the tutorials below:

* [APIKey](../../tutorials/application/authorization/apikey.md)
* [Basic Authorization](../../tutorials/application/authorization/basic-auth.md)
* [AK/SK](../../tutorials/application/authorization/aksk.md)
* [JWT](../../tutorials/application/authorization/jwt.md)