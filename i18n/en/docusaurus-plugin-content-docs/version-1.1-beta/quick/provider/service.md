# Add Service

As a service provider, the first step is to add a new service to the platform. When adding a service, you need to fill in necessary information such as the service name and description. The service name should be concise and clear, while the description should include the main features and uses of the service.

## Operation Demonstration

1. Click on `Workspace` -> `Mine` -> `Service` to enter the service list page, then click `Add Service`.

![](../../tutorials/service/images/2024-08-14/9e8fb58fb4ae357bdca692d3796c89105f0ac1b1b434dfb47f9073f4249b01bc.png)  

2. Fill in the service information in the pop-up box.

![](../../tutorials/service/images/2024-08-14/b8e30949238ffc3b67976575f70c7822ee5dea7000c62ef97b703ced8f022dd6.png)  

![](../../tutorials/service/images/2024-08-14/932ab4b2232f62e4f037c8d8a9cb092822a25ab0e9a27c1cf5db009df7fcae5f.png)  

**Field Explanation**

<table><thead><tr><th width="169">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Service Name</td><td>Used to identify and describe the service.</td></tr><tr><td>Service ID</td><td>The Service ID is used to uniquely identify the service, ensuring accurate distinction between different services during management and operation. This ID is used internally and during calls and is not easily changeable.</td></tr><tr><td>API Call Prefix</td><td>This is the URL prefix used when calling the service's API. It is used for unified management and routing of API requests, ensuring requests can correctly be directed to the target service. The prefix should be associated with the service name and easy to remember and use.</td></tr><tr><td>Description</td><td>Records and displays detailed information and functionality specifications about the service.</td></tr><tr><td>Responsible Team</td><td>The team responsible for managing and maintaining the service.</td></tr><tr><td>Icon</td><td>This icon will be displayed in the Service Plaza.</td></tr><tr><td>Tags</td><td>Custom tags for the service, facilitating quick searches by subscribers.</td></tr><tr><td>Service Type</td><td>If it is an <b>External Service</b>, subscribers can obtain and apply for subscriptions in the Service Plaza. Once the provider approves, calls can be initiated.<br/>If it is an <b>Internal Service</b>, call permissions can only be allocated through the provider assigning them to subscribers.</td></tr><tr><td>Service Category</td><td>Choose the category under which the service will be displayed in the Service Plaza.</td></tr></tbody></table>

Here, we select `External Service` for our service type and choose the appropriate `Service Category`. Once completed, click `Submit`.

If there is no service category, please refer to the tutorial [Add Service Category](catalogue.md#Operation-Demonstration).