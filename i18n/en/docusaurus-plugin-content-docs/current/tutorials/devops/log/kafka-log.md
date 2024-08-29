# Kafka Logs

Collect log information from the request gateway and output it to `Kafka`, making it easier for users to perform secondary operations, such as log analysis.

## Features

The ability to output log content generated during the program execution to a specified Kafka cluster queue.

## Operation Demo

### Create Kafka Log Configuration

1. Click on the left navigation bar `Operations and Integration` -> `Log Configuration` -> `Kafka Logs`, then click on `Add Kafka Log`.
   
![](images/2024-08-14/2f03a576c164e66c8237c71161d9d0bd05f2b7afb0a9e12c24a33b29ac8fb1ca.png)

2. Fill out the Kafka log configuration.

![](images/2024-08-14/7185f19285c125a7282fbc410d240accad92e715102304181449b11a91b977bd.png)

**Configuration Instructions**:

<table><thead><tr><th width="208">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Version</td><td>Kafka version</td></tr><tr><td>Server Address</td><td>Kafka server address, multiple addresses should be separated by commas</td></tr><tr><td>Topic</td><td>Kafka service Topic information</td></tr><tr><td>Partition Type</td><td>The method of partition selection, defaulting to hash. When hash is selected and partition_key is empty, random selection will be used</td></tr><tr><td>Partition</td><td>When Partition Type is manual, this specifies the partition number</td></tr><tr><td>Partition Key</td><td>When Partition Type is hash, this specifies the hash value</td></tr><tr><td>Request Timeout</td><td>Timeout duration in seconds</td></tr><tr><td>Output Format</td><td>The format of the output log content, supporting single line or Json format</td></tr><tr><td>Formatting Configuration</td><td>Output format template, configuration tutorial can be found <a href="https://help.apinto.com/docs/formatter">here</a></td></tr></tbody></table>

**Example Formatting Configuration**

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

1. Click the `Go Live` button next to the configuration that is ready to be published.

![](images/2024-08-14/e05ca75c6614cd2ff5349cc2ad82b1da0da67f5a981251181cdd75b9cf4b779a.png)