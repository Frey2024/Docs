# API

## What is an API?

An **API** (Application Programming Interface) is an interface of a software system that defines how different software components interact. APIs allow different software systems or components to communicate through predefined requests and responses without needing to understand each other's internal implementations. APIs can be network APIs (such as RESTful APIs, SOAP APIs) or local APIs (such as operating system API libraries).

## Features

**Abstraction**:

* API provides an abstract interface, hiding underlying implementation details, allowing developers to focus on using the functionality rather than its implementation.

**Standardization**:

* APIs typically follow certain standards and specifications, such as HTTP, JSON, XML, enabling seamless collaboration between different systems.

**Reusability**:

* APIs can be reused by multiple applications or components, reducing duplicated code and development efforts.

**Scalability**:

* APIs allow systems to expand functionality without altering existing code, enhancing system flexibility and maintainability.

## How does APIPark use APIs?

In `APIPark`, APIs are used to provide and manage services, allowing developers and applications to access and utilize these services through standardized interfaces. Here are the main ways and steps `APIPark` uses APIs:

**1. Service Providers Using APIs**

Service providers (API producers) create and publish APIs on `APIPark` for other applications and developers to use.

* **Create New Services and APIs**:
  * Service providers create new services on `APIPark`, configuring the basic information and parameters of the service.
  * Create and configure APIs for services, including API paths, methods (such as GET, POST), request parameters, and response formats.
* **Publish APIs**:
  * After completing API configuration, service providers publish the API on `APIPark`, making it available externally.
  * When publishing APIs, version management and access control policies can be configured to ensure the stability and security of the API.
* **Manage APIs**:
  * Service providers can manage published APIs through `APIPark`, including updating API versions, configuring rate limiting strategies, and viewing usage statistics.

**2. Service Subscribers Using APIs**

Service subscribers (API consumers) subscribe to and call APIs through `APIPark`, utilizing the features and services provided by these APIs.

* **Browse and Subscribe to APIs**:
  * Subscribers browse available APIs in the service marketplace of `APIPark`, selecting and subscribing to the APIs they need.
  * After subscription requests are approved, subscribers obtain API access permissions and authentication information.
* **Create Applications and Configure Access Authorization**:
  * Subscribers create applications and configure access authorization information, such as API keys or OAuth tokens, for authentication when calling APIs.
* **Call APIs**:
  * Use configured access authorization information to call APIs through HTTP requests, obtain service data, or submit requests.
  * When calling APIs, different request methods (such as GET, POST, PUT, DELETE) and parameters can be used, following API documentation for operations.
* **Monitor and Analyze API Usage**:
  * Subscribers can view API call logs and usage statistics through `APIPark`'s monitoring features, analyze API performance and usage, and optimize call strategies.

APIs serve as a bridge between applications, providing a standardized communication method that enables different systems and components to work together. In `APIPark`, service providers create and publish APIs, providing standardized service interfaces; service subscribers subscribe to and call APIs to utilize the functionalities and services these interfaces provide. Through APIs, `APIPark` achieves efficient service management and utilization, enhancing system flexibility and scalability.