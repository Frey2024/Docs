---
sidebar_position: 4
---

# 添加API

API 是`APIPark`的核心组成部分，通过标准化的接口，连接各类服务和应用，实现数据共享和功能调用。API 提供了高效、安全、可扩展的通信机制，支持微服务架构，提升用户体验，促进创新和开发。

在**APIPark**中，API 不仅是系统之间的桥梁，更是构建高效、灵活、创新生态系统的基础。通过良好的 API 设计和管理，平台可以实现高度的互操作性和可扩展性，为用户和开发者提供卓越的服务体验。

## 操作演示

### 添加API

1. 选中需要配置的服务，进入服务内部页面。

![](../../tutorials/service/images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)

2. 点击`添加API`。

![](../../tutorials/service/images/2024-08-14/f2448c1c54a34932439231c739c511bd46c1dfec5e0ba7c90d892b598567c6db.png)  

3. 在弹出框中输入API信息，填写完成后点击`提交`。

![](../../tutorials/service/images/2024-08-14/3ec5df3d14e4d4ba7545dbb42670e78cc9acb6a6170630458cb2f46903959774.png)  

**字段说明**

<table><thead><tr><th width="195">字段名</th><th>说明</th></tr></thead><tbody><tr><td>API名称</td><td>用于标识API的名称，可按作用、功能命名。</td></tr><tr><td>描述</td><td>记录API的详细说明。</td></tr><tr><td>请求方式</td><td>客户端请求的请求方式。</td></tr><tr><td>请求路径</td><td>客户端请求的请求路径，该路径将会和服务前缀进行拼接。</td></tr><tr><td>高级匹配</td><td>可针对客户端请求定制更多的路由匹配规则。</td></tr><tr><td>转发上游路径</td><td>转发到上游的路径，可与请求路径不一致。</td></tr><tr><td>请求超时时间</td><td>转发请求到上游服务的超时时间，单位：ms。</td></tr><tr><td>重试次数</td><td>当请求超时时，重新转发请求的次数。</td></tr></tbody></table>

4. 点击待编辑API后方的`编辑`按钮。

![](../../tutorials/service/images/2024-08-14/41f8a41c79d9d4a1c363d12798c7ce1986f240e615082feb7c5bef96e967a216.png) 

5. 填写API文档信息，内容包括请求参数、返回值等客户端请求所需要传递的参数信息。

![](../../tutorials/service/images/2024-08-14/5d379ab1769b312e7b0015249f65bdebbe7bd32846ccd11e78f64e3bdcfd3eb8.png)  

此处的文档内容将会展示在服务广场中，供服务订阅方去了解如何调用订阅的API。

### 