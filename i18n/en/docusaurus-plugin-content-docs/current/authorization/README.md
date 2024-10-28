# Access Authorization

In `APIPark`, subscribers subscribe to services on a per-application basis. Each application has its own access authorization management. Once a subscription request is approved, users can use the application's access authorization information (such as API keys or tokens) to call subscribed services. This ensures that the application calling the API complies with security policies, prevents unauthorized access, and ensures the security and stability of the service.

## Operation Demonstration

### Configure Access Authorization

1. Select the consumer that requires authentication configuration and enter the consumer details page.

![](images/2024-10-27/87954f66689ec76d8169739afc651a3080a31e4720da2ecb261cc6e1b38a64cb.png)

2. Click on `Authorization` -> `Create Authorization`.

![](images/2024-10-27/419a65127c32af6f7c535d97aa01c51e5e80e5f59ceb3ae13a361ef9e60c733f.png)

3. Fill in the relevant information for authorization in the pop-up box.

![](images/2024-10-27/a96a32ebc1b793da9616bf0c084653876d9bc206e172f35459fb4134b26a592a.png)

Additionally, the open platform currently supports multiple authentication methods such as `Apikey`, `JWT`, `AK/SK`.

The public configuration fields related to different types of authentication methods are as follows:

<table><thead><tr><th width="182">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>Authorization identifier, it is recommended to use a meaningful name</td></tr><tr><td>Parameter Location</td><td>The parameter location for transmitting authentication information, supports Query, Header.</td></tr><tr><td>Parameter Key</td><td>Define from which Key to obtain the parameter value.</td></tr><tr><td>Expiration Time</td><td>Authorization expiration time, not set means never expires.</td></tr><tr><td>Hide Authorization Information</td><td>Whether to hide the authorization fields when forwarding to upstream services.</td></tr></tbody></table>

For more details on the use of authentication, you can click on the tutorials below:

* [APIKey](./apikey.md)
* [Basic Authorization](./basic-auth.md)
* [AK/SK](./aksk.md)
* [JWT](./jwt.md)