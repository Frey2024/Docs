---
sidebar_position: 8
title: "🔗 Calling the API"
---

# Calling the API

Once approved, consumers can use the approved application information to call the subscribed service's API and obtain the actual results. This means that once a subscription request is approved, the user can securely access and use the service through the application's access authorization, perform relevant operations, and receive the corresponding data or feedback.

:::tip

Before calling, the following conditions need to be met:

1. The consumer has configured access authorization. If not, please refer to the guide [Configuring Access Authorization](./authorization/README.md).
2. The consumer has submitted a subscription request for the service the API belongs to. If not, please refer to the guide [Subscribing to Services](./consumers.md#订阅服务).
3. The subscription has been approved. If not, please contact the service provider for approval of the application. Refer to the guide [Consumer Review](./services/review_consumers.md#消费者审核).

:::

Assuming the authentication information configured in [Configuring Access Authorization](./authorization/README.md) is as follows:

![](images/2024-10-28/31d63b4ae839da18f52312e9d6b311ffe9dcfd2c8bc4be7eb52768b11305a43d.png)  

The API call URL is `http://api.apipark.com/cda53bf2/demo_translation_api`:

![](images/2024-10-28/5fbe42033e3fb02015f4ef886efd6b9d09ed560252a1fd2a35a94df3ebec5e16.png)  

The call parameters are:

![](images/2024-10-28/fe183d96daf35641e393949163734fc109d5282cf90cac68047803a2f215cf7c.png)  

You can use any of the following methods to call the service API.

<details>
<summary>CURL</summary>

Select a `server/virtual machine/PC` that can access the zone gateway node, and execute the following command:

```sh
curl -X POST -H "Authorization: 96f558e3-dcb7-4692-83f3-3043d4a83ee4" \
-H "Content-Type: application/json" -d "{\"messages\":[],\"variables\":{\"source_lang\":\"Chinese\",\"target_lang\":\"English\",\"text\":\"\"}}" \
http://api.apipark.com/cda53bf2/demo_translation_api
```

The call result is shown in the image below:
![](images/2024-10-28/e6a7201e96b69e731a151ec5c3b2c2c3e45604659c4a562cd7860d923a48b4a9.png)  

</details>

<details>
<summary>Postman</summary>

Fill in the authentication information, as shown below:

![](images/2024-10-28/441f6e996094f1a2e1742fd1ec2d313db96ef7d5d1bbded047afd0e768c5545c.png) 

Fill in the request body information, as shown below:

![](images/2024-10-28/944082a67c0a94f4a9dea0d7e63ff04a436955e647cbd487e4a6f5c3f7aab52f.png)  

The response result is shown below:

![](images/2024-10-28/6cbf1f796110957fbacb7732aab4d86135d7be26eaba24861f4de09641f8944a.png)  
</details>  