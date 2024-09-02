---
sidebar_position: 2
---
# ⚙️ Deployment
:::tip
### Minimum Hardware Requirements
* **CPU:** 2 cores
* **Memory:** 4G
* **Disk Storage:** 200G
* **Operating System:** Linux/Mac
* **System Architecture:** amd64/arm64
:::

## Program Dependencies

`APIPark` depends on `MYSQL, Redis, InfluxDB` databases. Below are the required versions for these databases:

<table><thead><tr><th width="184">Name</th><th>Version Requirement</th></tr></thead><tbody><tr><td>MYSQL</td><td>>=5.7.x</td></tr><tr><td>Redis</td><td>>=6.2.x</td></tr><tr><td>InfluxDB</td><td>>=2.6</td></tr></tbody></table>

## Deploy APIPark

You can choose any of the following methods to deploy `APIPark` with one click (applicable to both amd64/arm64 architectures):

<details>
<summary>One-click Deployment Script</summary>

:::note
Supported systems:
* CentOS 7.9 (representative for 7.x)
* CentOS 8.5 (representative for 8.x)
* Ubuntu 20.04
* Ubuntu 22.04
* Debian 12.4
* Alibaba Cloud Linux 3.2104
* Alibaba Cloud Linux 2.1903

Currently, only the above systems have been tested for installation. If you need one-click deployment for other systems, please submit an [Issue](https://github.com/APIParkLab/APIPark/issues).
:::
Enter the one-click deployment command:
```
curl -sSO https://download.apipark.com/install/quick-start.sh; bash quick-start.sh
```
Follow the prompts to deploy. Once deployment is complete, the deployment information will be displayed as follows:

![](images/2024-08-16/d9549626388634c5a3eddd35f5383c4c0a09d6f7bac9b49d99dcfa4085724551.png)  

</details>

## Configure InfluxDB
### Initialize InfluxDB
:::tip

The one-click deployment script installs the InfluxDB database by default. Upon completion, it will display the access address for InfluxDB as shown below:

![](images/2024-08-27/ba71350c56e7a68cb3172c2fa0f6aaeb781e139938b316b988eecb22407c4a2b.png)  

:::

1. Open the InfluxDB address in a browser.

![](images/2024-08-27/916df5866f082bcfc94a64272c4b690007460000f38dc037f785fb4961563ef7.png)  

2. Fill in the initialization information, including username, password, organization name, and bucket name.
:::warning
Here, the `Organization Name` should be `apipark`, and the `Bucket Name` should be `apinto`.
:::
![](images/2024-08-27/559c62f8d4b6e74c969f6a70cbca3bec61ea530e8a6c910ec4fbfda3e00c0c9a.png)  

### Create API Tokens
:::tip

InfluxDB API Tokens are tokens used for authentication and authorization, allowing users and applications to securely access InfluxDB data and functions. Their main purposes are as follows:

1. **Access Control**: API Tokens can be used to control who can access data in the InfluxDB database. Each token can be associated with different permission levels, restricting access to specific databases, organizations, or resources.
2. **Read/Write Permissions**: API Tokens can distinguish between read and write permissions. You can create read-only tokens, write-only tokens, or tokens with both read and write permissions, thereby controlling the operational capabilities of different users or applications.
3. **Secure Communication**: API Tokens can work with HTTPS to ensure communication with InfluxDB is encrypted and secure, preventing unauthorized access and data breaches.
4. **Multi-user Management**: In multi-user or multi-tenant environments, API Tokens allow for the generation of different tokens for each user or application, with permissions assigned as needed.
5. **Audit and Tracking**: Through API Tokens, you can track which users or applications access what data at what time, facilitating logging and security audits.

:::

1. After accessing the InfluxDB browser page, select `API Tokens`.

![](images/2024-08-27/1d90baf6b329aca1d3b0148e133e2d671bab1b335b3bc34d7304d127cf35f129.png)  

2. Generate an `All Access API Token`.

![](images/2024-08-27/d1af681dffa58147c93c57ee4224f05ecc20cb3b600e5110c0e9fb3bb2c35257.png)  

3. Enter description information and click `SAVE`.

![](images/2024-08-27/8044998665919d3202e65765fc47c53d223b00e00b00ed61ca6245a9bd09524b.png)  

4. Copy the generated `API Token` as it will be needed later for monitoring in [Configure APIPark](./quick/pre-work/monitor.md).

![](images/2024-08-27/c18532aa8730ba9f556ec5465de356ddb8eb5efbf0536516dac2a3bf97d13b08.png)  

