# Service Management

The Service Management module allows teams to create and manage multiple services, each of which can be linked to multiple APIs. Users can display services in the Service Square for subscribers to subscribe to as needed. Subscription requests require administrator approval, and once approved, subscribers can access all APIs under that service. This module enables teams to effectively manage and publish APIs, while subscribers can easily obtain the required services, enhancing API usage efficiency and team collaboration capabilities.

:::tip
Services displayed in the Service Square must meet the following criteria:

* The service type is **External Service**;
* The service has an **API**, if not, please refer to the tutorial [Add API](api.md#添加api);
* The service has a configured `Upstream`, if not configured, please refer to the tutorial [Configure Upstream](upstream.md#配置上游);
* The service has been **Published**, if not, please refer to the tutorial [Release Version](release.md#发布版本).
:::

## Operation Demonstration
### Add Service
1. Click `Workspace` -> `Mine` -> `Services` to enter the service list page, then click `Add Service`.

![](images/2024-08-14/9e8fb58fb4ae357bdca692d3796c89105f0ac1b1b434dfb47f9073f4249b01bc.png)  

2. Fill in the service information in the popup box.

![](images/2024-08-14/b8e30949238ffc3b67976575f70c7822ee5dea7000c62ef97b703ced8f022dd6.png)  

![](images/2024-08-14/932ab4b2232f62e4f037c8d8a9cb092822a25ab0e9a27c1cf5db009df7fcae5f.png)  

**Field Descriptions**

<table><thead><tr><th width="169">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Service Name</td><td>Name used to identify and describe the service.</td></tr><tr><td>Service ID</td><td>The service ID is used to uniquely identify the service, ensuring that different services can be accurately distinguished during management and operations. The service ID is used internally and during calls and is not easily changed.</td></tr><tr><td>API Call Prefix</td><td>Refers to the URL prefix used when calling the service's API. It is used for unified management and routing of API requests to ensure requests can be correctly directed to the target service. The prefix should be related to the service name and easy to remember and use.</td></tr><tr><td>Description</td><td>Records and displays detailed information and functionality descriptions of the service.</td></tr><tr><td>Team</td><td>The team responsible for managing and maintaining the service.</td></tr><tr><td>Icon</td><td>This icon will be displayed in the Service Square.</td></tr><tr><td>Tags</td><td>Custom tags for the service to facilitate easy searching by subscribers.</td></tr><tr><td>Service Type</td><td>If it is an external service, subscribers can apply to subscribe in the Service Square, and once approved by the provider, can initiate calls. If it is an internal service, call permissions can only be distributed through provider allocation to subscribers.</td></tr></tbody></table>

After completing the information, click `Submit`.

### Edit Service Information
1. Select the service you want to edit and click to enter the service details page.

![](images/2024-08-14/2ab9c63eb676c4573c1876c281c49c2fcd34ad3d7579a984406c792bcc208c98.png)  

2. Click `Settings` to enter the service settings page.

![](images/2024-08-14/69abd3dd5fda656c0e5ebb54f91a8b73fc923e329a3c704c1c7d00135454cb01.png)  

3. After making changes, click `Save`.

![](images/2024-08-14/f23ff78b9306fcc2bade3f28072ab999755547cc31ea20de9772e832595572b3.png)  

### Edit Service Instructions
:::tip
If the service is an external service and has been published, the service instructions will be displayed in the API market's service details and updated in real-time.
:::
1. Click `Usage Instructions`.

![](images/2024-08-14/0fb3ab2431f94d321004b929a622bffa7dcc14216e18d3f5bab323b0c9c8a8b2.png)  

After editing, click save.

### Delete Service

1. After entering the service settings page, click `Delete Service` at the bottom.

![](images/2024-08-14/d9f2f173c347788ca800d509527109d86eddc47486f251defc6d3d84a2dbbcca.png)  

2. In the popup box, click `Confirm`.

![](images/2024-08-14/a788f407eb866bada1146d20506b72ad41662bd465cb53b3179419fdcc0ae89c.png)  