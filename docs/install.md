---
sidebar_position: 1
---
# 部署
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

![](images/2024-08-16/d9549626388634c5a3eddd35f5383c4c0a09d6f7bac9b49d99dcfa4085724551.png)  

</details>

