# 访问授权

在 `APIPark`中，订阅方以应用为单位订阅服务。每个应用有自己的访问授权管理，当订阅申请审批通过后，用户可以使用应用的访问授权信息（如 API 密钥或令牌）去调用订阅的服务。这样，可以确保应用调用 API 时符合安全策略，并且能够防止未经授权的访问，保障服务的安全和稳定。

## 操作演示

### 配置访问授权

1. 选择需要配置鉴权的消费者，进入消费者内页。

![](images/2024-10-27/87954f66689ec76d8169739afc651a3080a31e4720da2ecb261cc6e1b38a64cb.png)  

2. 点击`鉴权` -> `新建鉴权`。

![](images/2024-10-27/419a65127c32af6f7c535d97aa01c51e5e80e5f59ceb3ae13a361ef9e60c733f.png)  

3. 在弹出框中填写鉴权的相关信息。

![](images/2024-10-27/a96a32ebc1b793da9616bf0c084653876d9bc206e172f35459fb4134b26a592a.png)  

此外，目前开放平台还支持`Apikey`、`JWT`、`AK/SK`**等多种鉴权方式。**

针对不同类型的鉴权方式，相关的公共配置字段如下：

<table><thead><tr><th width="182">字段名</th><th>说明</th></tr></thead><tbody><tr><td>名称</td><td>鉴权标识，建议使用具有含义的名称</td></tr><tr><td>参数位置</td><td>鉴权信息传输的参数位置，支持Query、Header。</td></tr><tr><td>参数Key</td><td>定义从哪个Key中获取参数值。</td></tr><tr><td>过期时间</td><td>鉴权过期时间，不设置则为永不过期。</td></tr><tr><td>隐藏鉴权信息</td><td>转发给上游服务时，是否将鉴权的字段隐藏。</td></tr></tbody></table>

若想了解更多鉴权的使用细节，可点击下方教程：

* [APIKey](./apikey.md)
* [Basic Authorization](./basic-auth.md)
* [AK/SK](./aksk.md)
* [JWT](./jwt.md)