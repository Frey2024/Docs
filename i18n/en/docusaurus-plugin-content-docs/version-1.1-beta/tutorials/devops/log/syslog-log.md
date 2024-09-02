# Syslog Logs

## Introduction

Collects logs from the request gateway and outputs them to `Syslog`.

## Features

Can output logs generated during the program's operation to a remote Syslog server.

* Supports various request protocols, including TCP, UDP, and UNIX.
* Allows setting Syslog output log levels.
* Supports different log output formats.
* Supports custom log formatting configurations.

## Operation Demonstration

### Create a New Syslog Log Configuration

1. Click `Operations and Integration` -> `Log Configuration` -> `Syslog Logs` in the left navigation bar, then click `Add Syslog Log`.

![](images/2024-08-14/b8bba47ec2ed53edda8cf9e634f846681eb3570e7955ae9a5f73021e7bcfb687.png)  

2. Fill out the Syslog log configuration by section.

![](images/2024-08-14/7ff8cb4665b5240ce96bd01207844add9c73f96dbba958d7a3828d9519063f2c.png)  

**Configuration Explanation**:

| Field Name  | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| Network Protocol | Protocol to request Syslog service, supports TCP, UDP, UNIX     |
| Server Address | Address of the Syslog service                                     |
| Log Level   | Syslog output log level, supports ERROR, WARN, INFO, DEBUG, TRACE |
| Output Format | Log content output format, supports single-line, JSON format output |
| Formatting Configuration | Output format template, configuration tutorial [click here](https://help.apinto.com/docs/formatter) to redirect |

**Formatting Configuration Example**

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

3. After clicking `Submit`, the Syslog log configuration is completed.

![](images/2024-08-14/7dfe85c812f11be95e7f9e65fa497e05076d19565179080222c0262966ba7465.png)  

### Go Live

1. Click the `Go Live` button next to the configuration you want to deploy.

![](images/2024-08-14/ad6e289fe686a7e33b99028297be5fe5841e59abc614235fe6c6aa7ead386be4.png)  