# Calling the API

Once approval is granted, subscribers can use the approved application information to call the subscribed service's API and obtain actual results. This means that once the subscription request is approved, users can safely access and use the services via application access authorization, perform relevant operations, and receive corresponding data or feedback.

## Demonstration of Operations

:::tip

Before calling, the following conditions must be met:

1. The application is configured with access authorization. If not, please refer to the tutorial [Configure Access Authorization](authorization.md).
2. The application has submitted a subscription request for the service that includes the API. If not, please refer to the tutorial [Apply for Subscription](subscribe.md).
3. The subscription is approved. If not, please contact the service provider for approval, and refer to the tutorial [Approve Subscription](../provider/approve.md).

:::

Assuming the authentication information configured during the [Configure Access Authorization](authorization.md) operation is as follows:

![](images/2024-08-16/ddd344519fef8793181235973d723c50b1f408f2e79e1d49460cfc21272af75d.png)  

The service address of the cluster is `http://10.8.0.18:8099`, as shown below:

![](images/2024-08-16/bcd362778abb695c8232e64e3dd8501e8184d0901179d591105915909655dec2.png)  

The API call information is as follows:

![](images/2024-08-16/7e7ebdaf241ee68d1d3a05463224448c1d86ac507cf35b34484627ad26296edd.png)  

You can use any of the following methods to call the service API.

<details>
<summary>CURL</summary>

On a `server/virtual machine/PC` that can access the partition gateway node, execute the following command:

```sh
curl -X POST -H "Authorization: 59eb96b4-cfaf-4d8b-8f12-2d383c04264e" \
-H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"$pbkdf2-sha512$i=1000,l=32$CzQQIAgUJxBR3WxhuZjU2w$3scp3ONqDeC8Sg80ESdTzhW3SL5vPfj/HmU8If6YYdc\"}" \
http://10.8.0.18:8099/sso/user/login
```

The result of the call is shown below:
![](images/2024-08-16/a7275f3116d7acde3c917fa87bfc97f89512b7531ab7db1bd73acceefa197a87.png)  

</details>