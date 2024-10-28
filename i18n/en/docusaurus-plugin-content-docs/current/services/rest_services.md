---
sidebar_position: 2
title: REST Services
---

# REST Services (API Gateway)

REST services are network services that adhere to the REST (Representational State Transfer) architectural style. They utilize standard HTTP methods to handle data and interactions, making the services easy to understand and use. On the APIPark platform, REST services can be easily created and managed to support the needs of various web and mobile applications.

In an API gateway, **REST services** refer to a collection of **REST APIs** (Application Programming Interfaces) that collectively provide a specific functionality or business logic. **REST services** are the basic units on the platform used for organizing and managing APIs. Through **REST services**, developers can define, publish, manage, and monitor a series of APIs for other users or systems to call.

Consumers can choose and subscribe to **REST services** that meet their needs. By subscribing, consumers gain access to specific API interfaces, allowing them to make customized calls according to actual business requirements. The system uses efficient authentication mechanisms to ensure that API calls carry valid authentication information, safeguarding data security and user privacy.

# Create and Publish REST Services
## 1. Create REST Services

Enter the **Workspace** module, select **Services** from the sidebar, then **Create Service**, and fill in:

- **Service Name**
- **Service ID**: The unique identifier for the service, which cannot be changed once saved.
- **Service Type**, choose **REST Service**:
  - **AI Service**: AI gateway, transforming different AI models and prompts into a unified REST API through APIPark.
  - **REST Service**: Traditional API gateway, capable of integrating microservices or HTTP REST APIs.
- **API Request Prefix**: Set a unified request prefix for all APIs of this service, which cannot be changed once saved.
- **Team**: If you have joined multiple teams, set which team is responsible for managing this service.
- **Subscription Review**:
  - **No Review Required**: All consumers can subscribe to and call the service.
  - **Manual Review**: Only reviewed and approved consumers can call the service.
- **Service Classification**: Choose the classification to which the service will be published in the API portal.

![](images/2024-10-26-15-36-33.png)

## 2. Fill in API Upstream


## 3. Create API


## 4. Publish Service

✨ If changes are made to a service's **API, API documentation, usage instructions, or upstream**, you must release a new version to apply the new configuration.

Select **Publish** from the sidebar, then click **New Version** and fill in:

- **Version Number**
- **Version Description**

Click **Confirm** to complete the release.

> 💡 If this is the first time the service is being published, it will appear in the **API Portal** and can be subscribed to by **consumers**.
> 💡 If the service has **manual review** enabled, consumers who have subscribed to the service will need to wait for approval from a **service administrator** before they can call the API.

![](images/2024-10-27-01-44-55.png)

# <span style={{ color: "#999" }}>[Optional]</span> Create Consumers and Subscribe to Services

APIPark offers the **API Portal** feature, allowing users to publish services to the API portal to be viewed, subscribed to, and called by other users.

To ensure secure, standardized API usage and reduce API management costs, users need to first create **consumers**, subscribe to services through consumers, and then use the consumer's **credentials** to call APIs.

[🔗 Learn More: Consumers](../consumers.md)

# <span style={{ color: "#999" }}>[Optional]</span> Call API

[🔗 Learn More: Call API](../call_api.md)