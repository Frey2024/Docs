# API

The API is a core component of `APIPark`, connecting various services and applications through standardized interfaces to enable data sharing and function calls. The API provides an efficient, secure, and scalable communication mechanism that supports a microservices architecture, enhances user experience, and fosters innovation and development.

In **APIPark**, the API is not just a bridge between systems but a fundamental part of building an efficient, flexible, and innovative ecosystem. With well-designed and managed APIs, the platform can achieve high interoperability and scalability, offering excellent service experiences to users and developers.

## Operational Demonstration
### Adding an API

1. Select the service you need to configure and enter the internal page of the service.

![Image](images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)

2. Click `Add API`.

![Image](images/2024-08-14/f2448c1c54a34932439231c739c511bd46c1dfec5e0ba7c90d892b598567c6db.png)

3. Enter the API information in the popup box, and click `Submit` after completing the form.

![Image](images/2024-08-14/3ec5df3d14e4d4ba7545dbb42670e78cc9acb6a6170630458cb2f46903959774.png)

**Field Descriptions**

| Field Name          | Description                                                                         |
|---------------------|-------------------------------------------------------------------------------------|
| API Name            | The name used to identify the API; can be named based on its purpose or function.   |
| Description         | A detailed description of the API.                                                  |
| Request Method      | The request method used by the client.                                              |
| Request Path        | The path of the client's request, concatenated with the service prefix.             |
| Advanced Matching   | More custom routing rules for client requests.                                      |
| Upstream Path       | The path forwarded to the upstream, which may differ from the request path.         |
| Request Timeout     | The timeout for forwarding the request to the upstream service, in milliseconds.    |
| Retry Count         | The number of times the request is resent in case of a timeout.                     |

### Editing an API

1. Click the `Edit` button next to the API you want to edit.

![Image](images/2024-08-14/41f8a41c79d9d4a1c363d12798c7ce1986f240e615082feb7c5bef96e967a216.png)

2. Fill in the API document information, including parameters and return values required by the client request.

![Image](images/2024-08-14/5d379ab1769b312e7b0015249f65bdebbe7bd32846ccd11e78f64e3bdcfd3eb8.png)

This documentation will be displayed in the service plaza for subscribers to understand how to call the subscribed API.

### Copying an API

1. Click the `Copy` button next to the API you want to copy.

![Image](images/2024-08-14/3edb3a4f4afaa384d9a9b99b2e2acf5b6246fb25edaf3bc34e1919d5dfa2b443.png)

2. Fill in the basic API information in the popup box.

![Image](images/2024-08-14/32522186e07f8a6bda26790d0531086940c2c39b9558dfae9c643c05d8c2a98a.png)

**Field Descriptions**

| Field Name          | Description                                                                               |
|---------------------|-------------------------------------------------------------------------------------------|
| API Name            | The name used to identify the API; can be named based on its purpose or function.         |
| Description         | A detailed description of the API.                                                        |
| Request Method      | The request method used by the client.                                                    |
| Request Path        | The path for client requests, concatenated with the organization and service prefixes.    |
| Advanced Matching   | More custom routing rules for client requests.                                            |

After completing the form, click `Confirm`. 

The newly added API will be globally deduplicated based on the request method and request path. Apart from the basic information, other settings such as forwarding path, retry count, API documentation, and so on will be copied to the new API.

### Deleting an API
1. Click the `Delete` button next to the API you want to delete.

![Image](images/2024-08-14/03eddc92ac67816a8f0f6959d272076460112ecef284eb55e7e100921f76374f.png)

2. Click `Confirm` in the popup box.

![Image](images/2024-08-14/c8a6a3ef88e166476b267c09389562b403bafefc771f24fb8af89bcf6d365f85.png)