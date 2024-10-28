---
sidebar_position: 3
title: 🚀 Deploy APIPark
---

# Deploy APIPark

:::tip

## Minimum Hardware Requirements

* **CPU:** 2 cores
* **Memory:** 4G
* **Disk Storage:** 200G
* **Operating System:** Linux/Mac
* **System Architecture:** amd64/arm64
  :::

## Program Dependencies

`APIPark` relies on the `MYSQL, Redis, InfluxDB` databases. The table below lists the required versions for these databases:

<table><thead><tr><th width="184">Name</th><th>Version Requirements</th></tr></thead><tbody><tr><td>MYSQL</td><td>>=5.7.x</td></tr><tr><td>Redis</td><td>>=6.2.x</td></tr><tr><td>InfluxDB</td><td>>=2.6</td></tr></tbody></table>

## Deployment Method

### Deploying Using Script

:::note
Supported System List:

* CentOS 7.9 (representative of 7.x)
* CentOS 8.5 (representative of 8.x)
* Ubuntu 20.04
* Ubuntu 22.04
* Debain 12.4
* Alibaba Cloud Linux 3.2104
* Alibaba Cloud Linux 2.1903

The current installation has only been tested on the deployments listed above. If you require one-click deployment for other systems, please submit an [Issue](https://github.com/APIParkLab/APIPark/issues) to us.
:::
Enter the one-click deployment command:

```
curl -sSO https://download.apipark.com/install/quick-start.sh; bash quick-start.sh
```

Follow the prompts for deployment. Once deployment is complete, deployment information will be displayed.


## Configuring InfluxDB

### Initializing InfluxDB

:::tip

The one-click deployment script installs the InfluxDB database by default. After deployment is complete, the InfluxDB access address will be displayed, as shown below:

![](images/2024-08-27/ba71350c56e7a68cb3172c2fa0f6aaeb781e139938b316b988eecb22407c4a2b.png)  

:::

1. Open the InfluxDB address in a browser.

![](images/2024-08-27/916df5866f082bcfc94a64272c4b690007460000f38dc037f785fb4961563ef7.png)  

2. Fill in the initialization information, including username, password, organization name, and bucket name.
   :::warning
   Here, fill in `Organization Name` as `apipark` and `Bucket Name` as `apinto`.
   :::
   ![](images/2024-08-27/559c62f8d4b6e74c969f6a70cbca3bec61ea530e8a6c910ec4fbfda3e00c0c9a.png)  

### Creating API Tokens

:::tip

API Tokens in InfluxDB are tokens used for authentication and authorization, allowing users and applications to securely access InfluxDB's data and features. Their main functions are as follows:

1. **Access Control:** API Tokens can be used to control who can access data in the InfluxDB database. Each token can associate different permission levels, restricting access to specific databases, organizations, or resources.
2. **Read/Write Permissions:** API Tokens can differentiate between read and write permissions. You can create read-only tokens, write-only tokens, or tokens with read and write permissions to control the operational capabilities of different users or applications.
3. **Secure Communication:** API Tokens can work with HTTPS to ensure that communication with InfluxDB is encrypted and secure, preventing unauthorized access and data leaks.
4. **Multi-user Management:** In multi-user or multi-tenant environments, API Tokens allow for different tokens to be generated for each user or application and assign different permissions as needed.
5. **Audit and Tracking:** Through API Tokens, you can track which users or applications accessed which data at what time, facilitating logging and security auditing.

:::

1. After entering the InfluxDB browser page, select `API Tokens`.

![](images/2024-08-27/1d90baf6b329aca1d3b0148e133e2d671bab1b335b3bc34d7304d127cf35f129.png)  

2. Generate an `All Access API Token`.

![](images/2024-08-27/d1af681dffa58147c93c57ee4224f05ecc20cb3b600e5110c0e9fb3bb2c35257.png)  

3. Enter the description information and click `SAVE`.

![](images/2024-08-27/8044998665919d3202e65765fc47c53d223b00e00b00ed61ca6245a9bd09524b.png)  

4. Copy the generated `API Token`; it will be needed later when [configuring the APIPark data source](system_setting/data_source.md).  

![](images/2024-08-27/c18532aa8730ba9f556ec5465de356ddb8eb5efbf0536516dac2a3bf97d13b08.png)  