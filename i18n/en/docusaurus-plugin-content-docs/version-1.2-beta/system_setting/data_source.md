# Data Source

In **APIPark**, the data source configuration feature supports real-time monitoring of API traffic and performance, allowing service providers to gain in-depth insights into API usage. Currently, the platform supports **InfluxDB** as a data source, making API monitoring management more intuitive and efficient through flexible data collection and visualization.

* **Data Source Configuration & Support**: APIPark supports configuring **InfluxDB** as the data source for API monitoring. InfluxDB, known for its efficient time-series data handling capabilities, can record a large volume of API call data in real-time, making it suitable for high-frequency log-pushing requirements. In the future, the platform will support more data source options to meet various business needs.

* **Real-time Log Pushing**: The API gateway node pushes the log of each request to InfluxDB, including crucial information such as call time, response status, request path, and consumer information, laying the foundation for subsequent analysis and report generation.

* **Automated Data Reading and Processing**: APIPark automatically reads monitoring data from the configured InfluxDB data source and processes the raw log data by cleaning, categorizing, counting, and summarizing it to generate easy-to-analyze metrics such as API call frequency, response time distribution, error rates, etc.

* **Statistical Reports and Visualization**: Based on the data read, APIPark generates various statistical reports and visualizes them in the platform in the form of charts. Users can view key monitoring data such as API call trends, performance metrics, and anomaly warnings to quickly identify performance bottlenecks or optimize resource allocation.

By configuring the data source, APIPark achieves comprehensive monitoring and visual management of API call data, providing service providers with data-driven insights to help optimize API performance and enhance service quality.

## Data Source Configuration

:::tip
Before configuration, you need to install and configure the InfluxDB database. If not, please refer to the tutorial [Configure InfluxDB](../deploy.md#configure-influxdb).
:::

1. Click `System Settings` -> `Data Source`, then click `Modify Settings` behind it.

![](images/2024-10-28/6fee0a6a495dd86e37dd85e80a615bd502c491135e86a2a1f22d5b1d521e2e11.png)  

2. Enter the InfluxDB configuration information, and after completing it, click `Save`.

![](images/2024-10-28/5985ee9dbab41083602142a853628dcd7af7a9f6c906674a409f4e712e868e7a.png)  