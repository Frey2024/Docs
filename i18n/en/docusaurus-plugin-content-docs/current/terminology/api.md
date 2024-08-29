# API

## What is an API?

**API** (Application Programming Interface) is an interface of a software system that defines the interactions between different software components. APIs allow different software systems or components to communicate through predefined requests and responses without needing to understand each other's internal implementations. APIs can be network APIs (such as RESTful API, SOAP API) or local APIs (such as an operating system's API library).

## Features

**Abstraction**:

* API provides an abstract interface that hides underlying implementation details, allowing developers to focus on using functionality rather than its implementation.

**Standardization**:

* APIs generally follow certain standards and specifications, such as HTTP, JSON, XML, etc., enabling seamless collaboration between different systems.

**Reusability**:

* APIs can be reused by multiple applications or components, reducing redundant code and development work.

**Extensibility**:

* APIs allow systems to extend functionality without modifying existing code, enhancing system flexibility and maintainability.

## How does APIPark use APIs?

In `APIPark`, APIs are used to provide and manage services, allowing developers and applications to access and use these services through standardized interfaces. Below are the main ways and steps `APIPark` utilizes APIs:

**1. Service providers using API**

Service providers (API producers) create and publish APIs on `APIPark` for use by other applications and developers.

* **Create new services and APIs**:
  * Service providers create new services on `APIPark`, configuring basic information and parameters.
  * Create and configure APIs for the services, including API paths, methods (such as GET, POST), request parameters, and response formats.

* **Publish API**:
  * Once the API configuration is complete, the service provider publishes the API to `APIPark`, making it externally available.
  * During publication, version management and access control policies can be configured to ensure the API’s stability and security.

* **Manage API**:
  * Service providers can manage published APIs through `APIPark`, including updating API versions, configuring throttling strategies, and viewing usage statistics.

**2. Service subscribers using API**

Service subscribers (API consumers) subscribe to and call APIs through `APIPark`, utilizing the functionalities and services provided by these APIs.

* **Browse and subscribe to API**:
  * Subscribers browse available APIs in the `APIPark` service marketplace and choose the necessary APIs for subscription.
  * After subscription approval, subscribers receive API access rights and authentication information.

* **Create applications and configure access authorization**:
  * Subscribers create applications and configure access authorization information, such as API keys or OAuth tokens, for authentication when calling an API.

* **Call API**:
  * Use configured authorization information to make HTTP requests to call the API, either to retrieve service data or submit requests.
  * When calling an API, various request methods (such as GET, POST, PUT, DELETE) and parameters can be used based on API documentation instructions.

* **Monitor and analyze API usage**:
  * Subscribers can use `APIPark’s` monitoring capabilities to view API call logs and usage statistics, analyze API performance and usage, and optimize calling strategies.

APIs serve as bridges between applications, providing a standardized communication method enabling different systems and components to work together. In `APIPark`, service providers offer standardized service interfaces by creating and publishing APIs, while service subscribers utilize these interfaces by subscribing to and calling APIs. Through APIs, `APIPark` achieves efficient service management and usage, enhancing system flexibility and extensibility.