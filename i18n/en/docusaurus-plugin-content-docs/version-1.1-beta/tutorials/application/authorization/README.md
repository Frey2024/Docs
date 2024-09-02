# Access Authorization

In `APIPark`, subscribers subscribe to services based on applications. Each application has its own access authorization management. Once the subscription request is approved, users can use the application's access authorization information (such as API keys or tokens) to call the subscribed services. This ensures that applications adhere to security policies when calling APIs and prevents unauthorized access, ensuring the security and stability of the services.

## Operation Demonstration

### Configuring Access Authorization

1. Select the application for which you need to configure access authorization, and click to enter the details page.

![](images/2024-08-14/3649262b7719154d5a1bba61f3455c2ff347b897da4925931001b4447e5b696f.png)  

2. Click on `Access Authorization` to enter the authorization list page, and then click the `Add Authorization` button.

![](images/2024-08-14/18535c55dc680bf1cab3b890471e3e3572f01497c40af817680e06f1bd20bec6.png)  

3. Choose an authentication method and fill in the relevant information. As shown below, we chose Basic authentication:

![](images/2024-08-13/c888ad70e92ecc19a1e58ac86ed9a1916b390dd26c567ea95bc19a706b0fda3e.png)  

Additionally, the open platform currently supports various authentication methods such as `API Key`, `JWT`, `AK/SK`, and more.

For different types of authentication methods, the associated common configuration fields are as follows:

<table><thead><tr><th width="182">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>Authentication identifier, it is recommended to use a meaningful name</td></tr><tr><td>Parameter Location</td><td>Position where the authentication information is transmitted, supports Query, Header</td></tr><tr><td>Parameter Key</td><td>Defines from which Key to obtain the parameter value</td></tr><tr><td>Expiration Time</td><td>Authentication expiration time, if not set, it will never expire</td></tr><tr><td>Hide Authentication Information</td><td>Whether to hide the authentication fields when forwarding to upstream services</td></tr></tbody></table>

For more details on the use of authentication, you can click on the tutorials below:

* [API Key](./apikey.md)
* [Basic Authorization](./basic-auth.md)
* [AK/SK](./aksk.md)
* [JWT](./jwt.md)