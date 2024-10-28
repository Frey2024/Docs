---
sidebar_position: 3
title: 🚀 部署 APIPark
---

# 部署 APIPark
## 硬件要求

:::tip
建议配置：

- **CPU**：8核
- **内存**：16G
- **硬盘存储**：200G
- **操作系统**：Linux / Mac
- **系统架构**：AMD64 / ARM64
:::

:::note
最低配置：

- **CPU**：2核
- **内存**：4G
- **硬盘存储**：200G
- **操作系统**：Linux / Mac
- **系统架构**：AMD64 / ARM64
:::

## 程序依赖

`APIPark` 依赖 `MYSQL、Redis、InfluxDB` 数据库，下表是数据库所需版本：

<table><thead><tr><th width="184">名称</th><th>版本要求</th></tr></thead><tbody><tr><td>MYSQL</td><td>>=5.7.x</td></tr><tr><td>Redis</td><td>>=6.2.x</td></tr><tr><td>InfluxDB</td><td>>=2.6</td></tr></tbody></table>

## 部署方式

### 使用脚本部署

:::note
支持的系统列表：

* CentOS 7.9（7.x为代表）
* CentOS 8.5（8.x为代表）
* Ubuntu 20.04
* Ubuntu 22.04
* Debain 12.4
* Alibaba Cloud Linux 3.2104
* Alibaba Cloud Linux 2.1903

当前仅测试了上述部署的安装，若需要其他系统的一键部署，可给我们提交[Issue](https://github.com/APIParkLab/APIPark/issues)。
:::

输入一键部署指令：

```
curl -sSO https://download.apipark.com/install/quick-start.sh; bash quick-start.sh
```

按照提示进行部署即可，部署完成后，将会展示部署信息。


## 配置InfluxDB

### 初始化InfluxDB

:::tip

一键部署脚本默认安装InfluxDB数据库，部署完成后，会打印InfluxDB的访问地址，如下图：

![](images/2024-10-29-02-19-29.png)

:::

1. 在浏览器打开InfluxDB地址。

![](images/2024-10-29-02-20-04.png)

1. 填写初始化信息，包括用户名、密码、组织名称，Bucket名称。
   :::warning
   此处的 `Organization Name` 填 `apipark` ，`Bucket Name` 填 `apinto`。
   :::
   ![](images/2024-10-29-02-20-19.png)

### 新建API Tokens

:::tip

InfluxDB 的 API Tokens 是用于认证和授权的令牌，允许用户和应用程序安全地访问 InfluxDB 的数据和功能。它们的主要作用如下：

1. **访问控制**：API Tokens 可以用来控制谁可以访问 InfluxDB 数据库中的数据。每个令牌可以关联不同的权限级别，限制对特定数据库、组织或资源的访问。
2. **读写权限**：API Tokens 可以区分读和写权限。你可以创建只读令牌、只写令牌或具有读写权限的令牌，从而控制不同用户或应用程序的操作能力。
3. **安全通信**：API Tokens 可以与 HTTPS 协同工作，确保与 InfluxDB 的通信是加密和安全的，防止未经授权的访问和数据泄露。
4. **多用户管理**：在多用户或多租户环境中，API Tokens 允许为每个用户或应用程序生成不同的令牌，并根据需求分配不同的权限。
5. **审计和追踪**：通过 API Tokens，可以追踪哪些用户或应用程序在何时访问了哪些数据，便于进行日志记录和安全审计。

:::

1. 进入InfluxDB浏览器页面后，选中`API Tokens`。

![](images/2024-10-29-02-20-33.png)

2. 生成 `All Access API Token`。

![](images/2024-10-29-02-20-40.png) 

3. 输入描述信息后，点击`SAVE`。

![](images/2024-10-29-02-20-47.png)

4. 将生成的`API Token`复制，后续在[配置APIPark数据源](system_setting/data_source.md)时需要用到。

![](images/2024-10-29-02-20-59.png)

