# Release Version

Releasing a service version is an important step in deploying the latest configured service and API to the production environment, ensuring subscribers can access the latest released version of the API when they make calls. By releasing service versions, the lifecycle of APIs and services can be managed uniformly, ensuring that the latest configurations of services and APIs take effect promptly, thus guaranteeing system stability and reliability.

After executing the release operation, if the current service is an `external service`, it will be displayed in the Service Plaza.

## Operational Demonstration

:::tip

Before proceeding, the following conditions must be met:

1. APIPark has completed the gateway cluster configuration, and the gateway cluster is in good running condition. If not, please refer to the tutorial [Configure Gateway Cluster](../pre-work/cluster.md#operational-demonstration).
2. Upstream configuration is completed. If not, please refer to the tutorial [Configure Upstream](upstream.md#operational-demonstration).
3. The API has been added. If not, please refer to the tutorial [Add API](api.md#operational-demonstration).

:::

1. Select the service to be configured and enter the internal service page.

![](../../tutorials/service/images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)

2. Click `Release`, then click `Create Version`.

![](../../tutorials/service/images/2024-08-14/55ce074035abc44a450b59363fb730ac7dc9218d5a3b8b4206f3b296599c2f9f.png)  

3. Enter version description information in the pop-up box, and after filling it in, click `Confirm`.

![](../../tutorials/service/images/2024-08-14/88e03577a3f92f5db00b934be613fe72002571c773640f1380cf5d965b6153ee.png)  

After the release is complete, if the service is an external service, it will be displayed in the Service Plaza for subscribers to subscribe.