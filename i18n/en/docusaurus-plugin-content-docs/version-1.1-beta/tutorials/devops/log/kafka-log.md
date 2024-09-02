# Kafka Logs

Collect log information from request gateways and output it to `Kafka` to facilitate further operations, such as log analysis.

## Features

The ability to output log contents generated during program execution to a specified Kafka cluster queue.

## Operation Demonstration

### Create a New Kafka Log Configuration

1. Click on `Operations and Integration` -> `Log Configuration` -> `Kafka Logs` in the left navigation bar, then click on `Add Kafka Log`.

![](images/2024-08-14/2f03a576c164e66c8237c71161d9d0bd05f2b7afb0a9e12c24a33b29ac8fb1ca.png)  

2. Fill in the Kafka log configuration.

![](images/2024-08-14/7185f19285c125a7282fbc410d240accad92e715102304181449b11a91b977bd.png)  

**Configuration Explanation**:

<table><thead><tr><th width="208">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Version</td><td>Kafka version</td></tr><tr><td>Server Address</td><td>Addresses of Kafka services, multiple addresses are separated by commas</td></tr><tr><td>Topic</td><td>Topic information for Kafka service</td></tr><tr><td>Partition Type</td><td>Method for selecting partitions, default is hash; if `partition_key` is empty when hash is selected, it defaults to random selection</td></tr><tr><td>Partition</td><td>Specifies the partition number when Partition Type is set to manual</td></tr><tr><td>Partition Key</td><td>Specifies the hash value when Partition Type is set to hash</td></tr><tr><td>Request Timeout</td><td>Timeout period in seconds</td></tr><tr><td>Output Format</td><td>Format for log content output, supporting single-line and JSON format output</td></tr><tr><td>Formatting Configuration</td><td>Output format template, configuration tutorial can be found <a href="https://help.apinto.com/docs/formatter">here</a></td></tr></tbody></table>

**Sample Formatting Configuration**

```json
{
   "fields": [
      "$time_iso8601",
      "$request_id",
      "@request",
      "@proxy",
      "@response",
      "@status_code",
      "@time"
   ],
   "request": [
      "$request_method",
      "$scheme",
      "$request_uri",
      "$host",
      "$header",
      "$remote_addr"
   ],
   "proxy": [
      "$proxy_method",
      "$proxy_scheme",
      "$proxy_uri",
      "$proxy_host",
      "$proxy_header",
      "$proxy_addr"
   ],
   "response": [
      "$response_header"
   ],
   "status_code": [
      "$status",
      "$proxy_status"
   ],
   "time": [
      "$request_time",
      "$response_time"
   ]
}
```

3. Click `Submit` to complete adding the Kafka log configuration.

![](images/2024-08-14/1f605691833a6c5994caf55dbb11340d320075bc6e0bf95a79d31dfc6dcc5fab.png)  

### Go Live

1. Click the `Go Live` button next to the configuration that is ready to be deployed.

![](images/2024-08-14/e05ca75c6614cd2ff5349cc2ad82b1da0da67f5a981251181cdd75b9cf4b779a.png)  
