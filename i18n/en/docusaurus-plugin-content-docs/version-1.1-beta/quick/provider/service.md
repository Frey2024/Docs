---
sidebar_position: 2
---

# Add Service

As a service provider, you need to first add a new service on the platform. When adding a service, fill in necessary information such as the service name and description. The service name should be clear and concise, and the description should include the main functions and purposes of the service.

## Operation Demonstration

1. Click `Workspace` -> `My` -> `Service` to enter the service list page and then click `Add Service`.

![](../../tutorials/service/images/2024-08-14/9e8fb58fb4ae357bdca692d3796c89105f0ac1b1b434dfb47f9073f4249b01bc.png)  

2. Enter the service information in the popup form.

![](../../tutorials/service/images/2024-08-14/b8e30949238ffc3b67976575f70c7822ee5dea7000c62ef97b703ced8f022dd6.png)  

![](../../tutorials/service/images/2024-08-14/932ab4b2232f62e4f037c8d8a9cb092822a25ab0e9a27c1cf5db009df7fcae5f.png)  

**Field Description**

<table><thead><tr><th width="169">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Service Name</td><td>The name used to identify and describe the service.</td></tr><tr><td>Service ID</td><td>The Service ID is used to uniquely identify the service, ensuring accurate differentiation between different services during management and operations. It is used internally and during invocation and is difficult to change.</td></tr><tr><td>API Call Prefix</td><td>The URL prefix used when calling the API of the service. It is used to manage and route API requests uniformly, ensuring requests are correctly directed to the target service. The prefix should be associated with the service name and easy to remember and use.</td></tr><tr><td>Description</td><td>Records and displays detailed information and function description of the service.</td></tr><tr><td>Responsible Team</td><td>The team responsible for managing and maintaining the service.</td></tr><tr><td>Icon</td><td>This icon will be displayed in the Service Plaza.</td></tr><tr><td>Tags</td><td>Custom tags for the service to facilitate quick searching by subscribers.</td></tr><tr><td>Service Type</td><td>If it's an <b>External Service</b>, subscribers can obtain and apply for subscriptions through the Service Plaza. Once approved by the provider, calls can be initiated.<br/>If it's an <b>Internal Service</b>, call permissions can only be allocated by the provider through distribution to subscribers.</td></tr><tr><td>Service Category</td><td>Select the service category that will be displayed in the Service Plaza.</td></tr></tbody></table>

Here, we choose `External Service` as the service type and select the `Service Category`. Once completed, click `Submit`.

If there is no service category, please refer to the tutorial [Add Service Category](./catalogue.md#Operation-Demonstration).