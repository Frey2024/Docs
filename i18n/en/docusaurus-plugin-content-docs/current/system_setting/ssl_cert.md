# SSL Certificates

**APIPark** offers management capabilities for **API Gateway SSL Certificates**, ensuring secure, encrypted communication through the **HTTPS protocol** when consumers access API services. By centrally managing SSL certificates, the platform provides convenient maintenance and updates, enhancing the security and reliability of API services.

* **Centralized SSL Certificate Management**: **APIPark** supports unified management of API Gateway SSL certificates, including adding, updating, renewing, and deleting operations, simplifying operational processes, and ensuring that the API gateway always has valid SSL certificates.

* **Secure HTTPS Access**: When consumers call API services, they establish a secure connection with the API gateway through the HTTPS protocol. All data transmission is encrypted to prevent data leaks or tampering, enhancing the security of sensitive data.

* **Automated Certificate Updates and Expiry Alerts**: **APIPark** offers certificate expiry alerts and automatic updates, avoiding service interruptions or security risks due to expired certificates, ensuring the API gateway always has up-to-date SSL certificates.

* **Enhanced Consumer Trust**: HTTPS security indicators allow consumers to confirm the legitimacy and security of API services, increasing trust in the platform, which can help improve user experience and professionalism.

* **Cross-Environment SSL Compatibility**: **APIPark** supports SSL certificate management for different environments (such as development, testing, and production), ensuring that API gateways in all environments can provide secure HTTPS access, facilitating flexible environment management and rapid deployment.

Through these SSL certificate management features, **APIPark** effectively improves the security, operational efficiency, and user experience of API services, providing consumers with a secure and reliable API access guarantee.

### Adding a Certificate
:::tip
Before adding a certificate, you need to have an available API Gateway cluster. If not, please refer to the tutorial [Configure API Gateway Cluster](./api_gateway_cluster.md).
:::
1. Click `System Management` -> `SSL Certificates` to enter the certificates list page.

![](images/2024-10-28/7709263668f27c33b7ec8ca1ff3618b5b42132f6a8be545f964530c3bbe75e84.png)

2. Click `Add Certificate`.

![](images/2024-10-28/821ae5a23b3d43d73237aa5577c1528fc9cb6689da892a9a7329144bd5abc06e.png)

3. In the pop-up box, upload the key (`.key`) and certificate (`.pem` or `.csr`) files.

![](images/2024-10-28/07431011d69e05a4a79a53e6518d4bbbbe1fe00180cc0ba7ff1dde43142006dc.png)

After uploading, click `Confirm`.

### Modifying a Certificate
1. Click the `Edit` button next to the certificate you want to modify.

![](images/2024-10-28/83916a3940c1435773469d32b04d69813e1602f526d024c66c356060093d1215.png)

2. In the pop-up box, upload the key (`.key`) and certificate (`.pem` or `.csr`) files.

![](images/2024-10-28/b42f082864262014e04198671341cc644a5c80e4d00b0cf425e7f889b2767044.png)

After uploading, click `Confirm`.

### Deleting a Certificate

Click the `Delete` button next to the certificate you want to delete.

![](images/2024-10-28/606fcf4b9d3e3b4bb28f1066b22e7f57fcc25426b109d69f639545b1b3727be6.png)