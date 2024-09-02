# Upstream

In `APIPark`, "upstream" refers to the backend server or service where API requests are ultimately routed. The upstream generally includes the actual business logic, data storage, and applications for handling API requests. In an API gateway architecture, the gateway receives and processes requests from clients, then forwards these requests to the upstream server for specific processing, retrieves responses, and returns them to the client.

## Definition

* **Upstream**: Refers to the backend server or service that processes API requests, which is a core part of implementing business logic and data processing.

## Functions

* **Request Processing**: Receives requests from the API gateway, processes them according to business logic, and returns responses.
* **Data Storage**: Interacts with databases or other storage systems to perform data read and write operations.
* **Business Logic**: Contains the core functionality and logic of the application to fulfill specific business requirements.
* **Load Balancing**: Distributes requests among multiple upstream servers to ensure high availability and performance.

## Advantages

**Separation of Concerns**:

* Upstream servers focus on business logic and data processing, while the API gateway is responsible for request routing and security control, achieving a separation of duties.

**Enhanced Performance and Availability**:

* Through load balancing and health check mechanisms, it ensures high availability and performance of upstream servers, avoiding single points of failure.

**Flexible Scalability**:

* Upstream servers can be flexibly expanded and adjusted according to business needs, supporting horizontal scaling to increase the system's processing capacity.

**Security Control**:

* By configuring security policies, it ensures the security of upstream servers and the legality of requests, protecting data and system security.

Upstream plays a critical role in API open platforms as the core backend server or service for handling API requests. Configuring upstream includes steps such as setting upstream addresses, load balancing, health checks, and security policies to ensure API requests are correctly routed and responded to. By configuring upstream properly, efficient request processing, high availability and security of the system can be achieved, enhancing the platform's overall performance and user experience. Configure upstream now to ensure your API requests are efficiently processed and securely protected!