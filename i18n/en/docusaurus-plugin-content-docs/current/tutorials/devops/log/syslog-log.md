# Syslog Logs

## Introduction

Collect log information from request gateways and output it to `Syslog`.

## Features

Capable of outputting log content generated during program execution to a remote Syslog server.

* Supports various request protocols, including TCP, UDP, UNIX
* Allows setting log levels for Syslog output
* Supports different output log format types
* Provides customization options for log formatting configuration

## Operation Demo

### Creating a New Syslog Log Configuration

1. Click on `Operations & Integration` -> `Log Configuration` -> `Syslog Log` in the left navigation bar, and then click `Add Syslog Log`.

![](images/2024-08-14/b8bba47ec2ed53edda8cf9e634f846681eb3570e7955ae9a5f73021e7bcfb687.png)  

2. Fill in the Syslog log configuration by section.

![](images/2024-08-14/7ff8cb4665b5240ce96bd01207844add9c73f96dbba958d7a3828d9519063f2c.png)  

**Configuration Explanation**:

| Field Name   | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Network Protocol   | The protocol for requesting the Syslog service, supporting TCP, UDP, UNIX                     |
| Server Address | The address of the Syslog service                                             |
| Log Level   | Syslog output log level, supporting ERROR, WARN, INFO, DEBUG, TRACE      |
| Output Format   | The format of the output log content, supporting single line or JSON format                     |
| Formatting Configuration | Output format template, configuration guide [click here](https://help.apinto.com/docs/formatter) to jump |

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

3. Click `Submit` and the Syslog log configuration will be complete.

![](images/2024-08-14/7dfe85c812f11be95e7f9e65fa497e05076d19565179080222c0262966ba7465.png)  

### Go Live

1. Click the `Go Live` button behind the configuration to be launched.

![](images/2024-08-14/ad6e289fe686a7e33b99028297be5fe5841e59abc614235fe6c6aa7ead386be4.png)  