# NSQ Log

## Introduction

Collect log information from the request gateway and output it to `NSQ`, making it convenient for users to perform secondary operations such as log analysis.

## Features

Allows the log content generated during the program execution to be output to a specified `NSQ` Topic.

* Supports multiple `NSQD` request addresses
* Supports different log output formats
* Allows custom log formatting configuration

## Operation Demo

### Create NSQ Log Configuration

1. Click on `Operations & Integration` -> `Log Configuration` -> `NSQ Log` in the left navigation bar, and click `Add NSQ Log`.

![](images/2024-09-12/a86abe925c5c3f0fb4b56fa2da49a53ed347e78c4a8b38714879605c358d903b.png)  

2. Fill in the NSQ log configuration.

![](images/2024-09-12/fcaf59b95c8a4ad7e7661737888a76e0078cea48dd07ff589fdacb35697c9ef5.png)  


**Configuration Explanation**:

| Field Name      | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| NSQD Address List | List of TCP service addresses provided by NSQD, supporting multiple addresses |
| Topic           | Topic information of NSQD                                    |
| Authentication Secret | Authentication key information for accessing NSQD         |
| Output Format   | Format of the output log content, supporting single line and JSON formats |
| Format Configuration | Output format template. For the configuration guide, [click here](https://help.apinto.com/docs/formatter) to navigate |

**Sample Format Configuration**

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


### Go Live

1. Click the `Go Live` button next to the configuration to be launched.

![](images/2024-09-12/4c79a5d03ab0fb13af6929a6488fb6d0bcc19a76c093dab6b099f6e703316ad5.png)  

