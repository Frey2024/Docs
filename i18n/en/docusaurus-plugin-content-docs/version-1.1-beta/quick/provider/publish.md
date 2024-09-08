---
sidebar_position: 6
---

# Release Version

Releasing a service version is a critical step in deploying the latest configured services and APIs to the production environment, ensuring that subscribers can access the latest released version of the APIs when making calls. By releasing a service version, you can unify the management of the lifecycle of APIs and services, ensuring that the latest configurations of services and APIs take effect timely, thus ensuring the system's stability and reliability.

After performing the release operation, if the current service is an `external service`, it will be displayed in the service plaza.

## Operation Demonstration

:::tip

Before proceeding, the following conditions must be met:

1. APIPark has completed the gateway cluster configuration operations, and the gateway cluster is in good working condition. If not, please refer to the tutorial [Configure Gateway Cluster](../pre-work/cluster.md#operation-demonstration).
2. Upstream configuration is completed. If not, please refer to the tutorial [Configure Upstream](./upstream.md#operation-demonstration).
3. The API has been added. If not, please refer to the tutorial [Add API](./api.md#operation-demonstration).

:::

1. Select the service you want to configure and enter the internal page of the service.

![](images/2024-09-08/30415699670c5235f8b4b9d682d6b1b4e6ecd26624cb658ef283b08487bbd197.png)

2. Click `Publish` and then Click`New Version`.

![](images/2024-09-08/4ebb5e8cc815ee9a14606a8034c1261d9ebe37d465c031e0ace861bf2bb12a2c.png)  

3. Enter the version description information in the pop-up box, and after completing it, click `Confirm`.

![](images/2024-09-08/e32b99bdf7b7aaf455a085e8e26704c0a189717fb99a073a91f2af178654c350.png)   

After the release is complete, if the service is an external service, it will be displayed in the service plaza for subscribers to subscribe.