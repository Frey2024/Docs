---
sidebar_position: 1
---
# Service Management

The Service Management module allows teams to create and manage multiple services, with each service able to bind multiple APIs. Users can showcase services in the Service Plaza for subscribers to subscribe to as needed. After a subscription application is submitted, it requires administrator approval, and once approved, subscribers can access all APIs under that service. Through this module, teams can manage and publish APIs flexibly, and subscribers can conveniently access the required services, enhancing API usage efficiency and team collaboration capabilities.

:::tip
Services displayed in the Service Plaza must meet the following conditions:

* The service type is **external service**;
* The service contains **APIs**; if none exist, please refer to the tutorial [Add API](./api.md#add-api);
* The service has an **upstream** configured; if not configured, please refer to the tutorial [Configure Upstream](./upstream.md#configure-upstream);
* The service is **published**; if not published, please refer to the tutorial [Release Version](./release.md#release-version).
:::

## Operation Demonstration
### Add Service
1. Click `Workspace` -> `My` -> `Service`, enter the service list page, and click `Add Service`.

![](images/2024-08-14/9e8fb58fb4ae357bdca692d3796c89105f0ac1b1b434dfb47f9073f4249b01bc.png)  

2. Fill in the service information in the popup box.

![](images/2024-08-14/b8e30949238ffc3b67976575f70c7822ee5dea7000c62ef97b703ced8f022dd6.png)  

![](images/2024-08-14/932ab4b2232f62e4f037c8d8a9cb092822a25ab0e9a27c1cf5db009df7fcae5f.png)  

**Field Description**

<table><thead><tr><th width="169">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Service Name</td><td>Name used to identify and describe the service.</td></tr><tr><td>Service ID</td><td>The service ID is used to uniquely identify the service, ensuring different services can be accurately distinguished during management and operations. The service ID is used internally and during call processes and is not easily changeable.</td></tr><tr><td>API Call Prefix</td><td>The URL prefix used when calling the service's API. It is used to uniformly manage and route API requests to ensure the requests reach the target service correctly. The prefix should relate to the service name and be easy to remember and use.</td></tr><tr><td>Description</td><td>Records and displays detailed information and function descriptions of the service.</td></tr><tr><td>Associated Team</td><td>The team responsible for managing and maintaining the service.</td></tr><tr><td>Icon</td><td>This icon will be displayed in the Service Plaza.</td></tr><tr><td>Tags</td><td>Custom tags for the service to help subscribers quickly find it.</td></tr><tr><td>Service Type</td><td>If it is an external service, subscribers can access the service in the Service Plaza, apply for subscriptions, and initiate calls once approved by the provider. <br/>If it is an internal service, it can only be accessed by allocation of call permissions by the provider to the subscriber.</td></tr></tbody></table>

Once filled out, click `Submit`.

### Edit Service Information
1. Select the service you want to edit and click to enter the service details page.

![](images/2024-08-14/2ab9c63eb676c4573c1876c281c49c2fcd34ad3d7579a984406c792bcc208c98.png)  

2. Click `Settings` to enter the service settings page.

![](images/2024-08-14/69abd3dd5fda656c0e5ebb54f91a8b73fc923e329a3c704c1c7d00135454cb01.png)  

3. After modifying, click `Save`.

![](images/2024-08-14/f23ff78b9306fcc2bade3f28072ab999755547cc31ea20de9772e832595572b3.png)  

### Edit Service Description
:::tip
If the service is an external service and is published, this service description will be displayed in the API market's service details and updated in real-time.
:::
1. Click `Instructions`.

![](images/2024-08-14/0fb3ab2431f94d321004b929a622bffa7dcc14216e18d3f5bab323b0c9c8a8b2.png)  

After editing, click save.

### Delete Service

1. After entering the service settings page, click `Delete Service` at the bottom.

![](images/2024-08-14/d9f2f173c347788ca800d509527109d86eddc47486f251defc6d3d84a2dbbcca.png)  

2. In the popup box, click `Confirm`.

![](images/2024-08-14/a788f407eb866bada1146d20506b72ad41662bd465cb53b3179419fdcc0ae89c.png)  