---
sidebar_position: 1
title: 部署 APIPark
---

# ⚙️ 部署

:::tip

### 硬件最低要求

* **CPU：** 2核
* **内存：** 4G
* **硬盘存储：** 200G
* **操作系统：** Linux/Mac
* **系统架构：** amd64/arm64
  :::

## 程序依赖

`APIPark` 依赖 `MYSQL、Redis、InfluxDB` 数据库，下表是数据库所需版本：

<table><thead><tr><th width="184">名称</th><th>版本要求</th></tr></thead><tbody><tr><td>MYSQL</td><td>>=5.7.x</td></tr><tr><td>Redis</td><td>>=6.2.x</td></tr><tr><td>InfluxDB</td><td>>=2.6</td></tr></tbody></table>

## 部署APIPark

您可以选择以下任意一种方式一键部署 `APIPark`（amd64/arm64架构均适用）：

<details>
<summary>一键部署脚本</summary>


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

按照提示进行部署即可，部署完成后，将会展示部署信息，如下：

![](../../images/2024-08-16/d9549626388634c5a3eddd35f5383c4c0a09d6f7bac9b49d99dcfa4085724551.png)  

</details>

## 配置InfluxDB

### 初始化InfluxDB

:::tip

一键部署脚本默认安装InfluxDB数据库，部署完成后，会打印InfluxDB的访问地址，如下图：

![](../../images/2024-08-27/ba71350c56e7a68cb3172c2fa0f6aaeb781e139938b316b988eecb22407c4a2b.png)  

:::

1. 在浏览器打开InfluxDB地址。

![](../../images/2024-08-27/916df5866f082bcfc94a64272c4b690007460000f38dc037f785fb4961563ef7.png)  

2. 填写初始化信息，包括用户名、密码、组织名称，Bucket名称。
   :::warning
   此处的 `Organization Name` 填 `apipark` ，`Bucket Name` 填 `apinto`。
   :::
   ![](../../images/2024-08-27/559c62f8d4b6e74c969f6a70cbca3bec61ea530e8a6c910ec4fbfda3e00c0c9a.png)  

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

![](../../images/2024-08-27/1d90baf6b329aca1d3b0148e133e2d671bab1b335b3bc34d7304d127cf35f129.png)  

2. 生成 `All Access API Token`。

![](../../images/2024-08-27/d1af681dffa58147c93c57ee4224f05ecc20cb3b600e5110c0e9fb3bb2c35257.png)  

3. 输入描述信息后，点击`SAVE`。

![](../../images/2024-08-27/8044998665919d3202e65765fc47c53d223b00e00b00ed61ca6245a9bd09524b.png)  

4. 将生成的`API Token`复制，后续在[配置APIPark数据源](../system_setting/data_source.md)时需要用到。

![](../../images/2024-08-27/c18532aa8730ba9f556ec5465de356ddb8eb5efbf0536516dac2a3bf97d13b08.png)  

