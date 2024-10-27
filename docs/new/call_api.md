# 调用API

在审批通过后，消费者可以使用已经通过审批的应用信息来调用所订阅服务的API，并获取实际的调用结果。这意味着一旦订阅申请被批准，用户就能够通过应用的访问授权安全地访问和使用服务，执行相关操作，并得到相应的数据或反馈。



:::tip

在调用前，需要满足以下条件

1. 消费者配置了访问授权，若无，请参考教程 [配置访问授权](./authorization/README.md)。
2. 消费者提交了该API所属的服务的订阅申请，若无，请参考教程 [订阅服务](./consumers.md#订阅服务)。
3. 订阅审批通过，若无，请联系服务提供方对申请进行审批，请参考教程 [消费者审核](./services/review_consumers.md#消费者审核)。

:::

假设在 [配置访问授权](./authorization/README.md)操作中，配置的鉴权信息如下：

![](images/2024-10-28/31d63b4ae839da18f52312e9d6b311ffe9dcfd2c8bc4be7eb52768b11305a43d.png)  


API的调用地址为`http://api.apipark.com/cda53bf2/demo_translation_api`：

![](images/2024-10-28/5fbe42033e3fb02015f4ef886efd6b9d09ed560252a1fd2a35a94df3ebec5e16.png)  

调用参数为：

![](images/2024-10-28/fe183d96daf35641e393949163734fc109d5282cf90cac68047803a2f215cf7c.png)  

  

您可以使用以下任意一种方式进行调用服务API。

<details>
<summary>CURL</summary>

选择一台可访问分区网关节点的`服务器/虚拟机/PC`，执行下述命令：

```sh
curl -X POST -H "Authorization: 96f558e3-dcb7-4692-83f3-3043d4a83ee4" \
-H "Content-Type: application/json" -d "{\"messages\":[],\"variables\":{\"source_lang\":\"Chinese\",\"target_lang\":\"English\",\"text\":\"\"}}" \
http://api.apipark.com/cda53bf2/demo_translation_api
```

调用结果如图所示
![](images/2024-10-28/e6a7201e96b69e731a151ec5c3b2c2c3e45604659c4a562cd7860d923a48b4a9.png)  


</details>

<details>

<summary>Postman</summary>

填写鉴权信息，如下图

![](images/2024-10-28/441f6e996094f1a2e1742fd1ec2d313db96ef7d5d1bbded047afd0e768c5545c.png) 

填写请求体信息，如下图

![](images/2024-10-28/944082a67c0a94f4a9dea0d7e63ff04a436955e647cbd487e4a6f5c3f7aab52f.png)  

响应结果如下图：

![](images/2024-10-28/6cbf1f796110957fbacb7732aab4d86135d7be26eaba24861f4de09641f8944a.png)  
</details> 