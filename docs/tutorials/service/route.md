---
sidebar_position: 2

---

# 路由

路由是指API网关根据客户端请求的特定路径或条件，将请求转发到相应的后端服务的过程。API网关是一个位于客户端和服务器之间的中间层，用于管理、监控和路由客户端的API请求。它的路由功能是API网关的核心功能之一。

在API网关中，**路由**通常是基于URL路径、HTTP方法（如GET、POST等）、请求头、查询参数等多种条件进行的。当API网关收到客户端的请求时，会根据预先配置的路由规则，决定将请求转发到哪个后端服务。

## 路由匹配规则

APIPark的路由可配置多种指标，包括请求协议、请求方式、请求路径、请求Header、Query参数。

匹配优先级为：请求协议 > 请求方式 > 请求路径 > 请求Header > Query参数

**请求协议、请求方式**在配置时可多选，如下图：

![](images/2024-09-14/494b224a75929fee67950022785a9186a6aaed11f5543556f1d678dc0f3f262f.png)  

### 请求路径匹配规则

| 匹配类型 | 规则 | 说明                                                         |
| -------- | ---- | ------------------------------------------------------------ |
| 全等匹配 | str  | 值存在，且与str完全相等                                      |
| 前缀匹配 | str* | 值存在，且str是值的前缀，当前模式下，网关会将**str**后方的路径拼接到转发路径中。 |

#### 全等匹配示例

* 请求路径：/shop/user/info
* 转发路径：/user/info

![](images/2024-09-14/4703b2ce3e0ba50d687337b5fec27054f2f2c94146a1d8e056f77d06102dd2d1.png)  

此时请求路径如下：

```
POST /shop/user/info
```

网关将会请求上游服务的路径如下：

````
POST /user/info
````

若请求路径非`/shop/user/info`，则无法匹配该路由。

#### 前缀匹配示例

* 请求路径：/shop/user/*
* 转发路径：/user/

![](images/2024-09-14/ce96fc595f0776f69333004d41e605bb779c19e3a27e9f9a942c79e210227e47.png)  

此时请求的路径和实际转发到上游服务的路径关系如下：

```shell
POST /shop/user/info    ->   POST /user/info
POST /shop/user/phone   ->   POST /user/phone
POST /shop/user/order   ->   POST /user/order
```

### 请求头、Query参数值匹配规则

| 匹配类型               | 规则   | 说明                                             |
| ---------------------- | ------ | ------------------------------------------------ |
| 全等匹配               | str    | 值存在，且与str完全相等                          |
| 前缀匹配               | str*   | 值存在，且str是值的前缀                          |
| 后缀匹配               | *str   | 值存在，且str是值的后缀                          |
| 子串匹配               | *str*  | 值存在，且str是值的子串                          |
| 非等匹配               | !=str  | 值存在，且值不等于str时匹配成功                  |
| 空值匹配               | $      | 要求key存在且值为空值，多用于header、query指标   |
| 存在匹配               | **     | 要求key存在但不能为空值，多用于header、query指标 |
| 不存在匹配             | !      | 要求key不存在，多用于header、query指标           |
| 区分大小写的正则匹配   | ~=str  | 值符合正则匹配                                   |
| 不区分大小写的正则匹配 | ~*=str | 值符合正则匹配                                   |
| 任意匹配               | *      | 任何情况都匹配成功                               |

![](images/2024-09-14/28ebc696449f02ce5c69ad745949c3fe187db7f7d3a45d5f3b935da17a23d7c5.png)  


## 操作演示

### 添加路由

1. 选择需要配置的服务，进入服务内页。

![](images/2024-09-02/10afbdf7d3f5c8f3e57aa75b2384451ac2b93ce5fb4e8da82485d6161fc97dd7.png)  

2. 点击 "路由"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2F9BKiEaBNnFL4hPZEfZrLFT_doc.png?alt=media&token=ab5e9d1a-0656-42c2-8258-4dfe0aed8b83)

3. 点击 "添加路由"

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FinoKzw9iPg9XB6aERNrfEH_doc.png?alt=media&token=1334052c-4fde-44eb-81dd-5699322af903)

4. 填写路由的基本信息

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FfszwLvMnE9fvs5QHRGn7jT_doc.png?alt=media&token=82196b52-0b21-47e3-9a22-d9e07e26aa7d)

**字段描述**

| 字段名称         | 字段描述                                                     |
| :--------------- | :----------------------------------------------------------- |
| 拦截该接口的请求 | 是否拦截该接口的请求                                         |
| 请求方式         | 支持常见HTTP请求方式GET、POST、PUT、DELETE等，支持多选       |
| 请求路径         | API的URI，用于应用请求URL中的相对路径，支持Restful参数以及路径前缀匹配 |
| 高级匹配         | 支持通过请求头，请求参数、Cookie 进行路由匹配，可添加多条    |
| 转发上游路径     | 转发至上游的相对路径                                         |
| 请求超时时间     | 定义网关转发请求到上游至响应的超时时间                       |
| 重试次数         | 当转发请求到上游失败时，网关会自动触发重试转发请求，最大次数不超过重试次数 |
| 转发上游请求头   | 可对转发上游请求头进行新建、编辑以及删除参数，主要应用于网关与上游间鉴权 |

填写完后，点击 "提交" 按钮.

![](https://static.guidde.com/v0/qg%2FMkAKUo4JcXZlnKeKYxgVcqodAWf2%2FmYae7rodt69i21cWfJ3tNv%2FuRxWf3ZmScCSzci3QsW5ZS_doc.png?alt=media&token=0cf544df-6891-46b9-a22c-7f830c2e8d0d)

此指南涵盖了在应用程序中配置路由的所有步骤，包括选择路由选项，添加路由，选择请求方式，配置 API 基础信息，以及最终提交配置。

### 编辑路由

1. 点击待编辑路由后方的`编辑`按钮。

![](images/2024-09-02/2f3a9b53d1b32c3f26339d8bbb58640db92f6e670e530ee673fad168537423ca.png)  

2. 填写路由信息。

![](images/2024-09-02/a61a87a719820aefbeb15a667152ff5b8d6e827045d2d3a2027729316eedceb2.png)  

填写完后点击提交即可。

### 删除路由

1. 点击待删除路由后方的`删除`按钮。

![](images/2024-09-02/3114bf7e93ee86c7c05bbd36b712a356fd7eebeb16e28ab53f16d0fbd58d64de.png)  

2. 在弹出框中点击确认。

![](images/2024-09-02/3cd25fbfcf3648db6a358d78ccc77bca1e1027ad30c11ed31d1f0d8bcd7b8e62.png)  





### 删除路由

1. 点击待删除API后方的`删除`按钮。

![](images/2024-08-14/03eddc92ac67816a8f0f6959d272076460112ecef284eb55e7e100921f76374f.png)  

2. 在弹出框中点击`确认`。

![](images/2024-08-14/c8a6a3ef88e166476b267c09389562b403bafefc771f24fb8af89bcf6d365f85.png)  
