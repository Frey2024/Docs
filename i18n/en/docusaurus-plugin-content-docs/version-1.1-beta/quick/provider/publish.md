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

![](../../tutorials/service/images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)

2. Click `Release` and then `Create New Version`.

![](../../tutorials/service/images/2024-08-14/55ce074035abc44a450b59363fb730ac7dc9218d5a3b8b4206f3b296599c2f9f.png)  

3. Enter the version description information in the pop-up box, and after completing it, click `Confirm`.

![](../../tutorials/service/images/2024-08-14/88e03577a3f92f5db00b934be613fe72002571c773640f1380cf5d965b6153ee.png)  

After the release is complete, if the service is an external service, it will be displayed in the service plaza for subscribers to subscribe.