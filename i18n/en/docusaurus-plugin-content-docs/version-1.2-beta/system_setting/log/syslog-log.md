# Syslog Logging

## Introduction

Collect request gateway log information and output it to `Syslog`.

## Features

Able to output the log content generated during program operation to a remote Syslog server.

* Supports multiple request protocols, including TCP, UDP, UNIX
* Supports setting Syslog output log level
* Supports log output format types
* Supports custom log formatting configuration

## Operation Demonstration

### Create Syslog Log Configuration

1. Click `Operations and Integration` -> `Syslog Log`, and then click `Add Syslog Log`.

![](images/2024-10-27/755dad8523be5e49b0be9acac376c98e303be6f1a6f100b136162c9683e58914.png)  

2. Fill in the Syslog log configuration, and click `Confirm` after completion.

![](images/2024-10-27/a890d8d7ebca8747b4936c8c31fd2273163bdde3c797aea0c8d2adb4f0a307e9.png)  

**Configuration Description**:

| Field Name   | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| Network Protocol | The protocol for requesting the Syslog service; supports TCP, UDP, UNIX |
| Server Address | The address of the Syslog service                           |
| Log Level    | Syslog output log level, supports ERROR, WARN, INFO, DEBUG, TRACE |
| Output Format | Format for outputting log content, supports single line, JSON format |
| Formatting Configuration | Output format template, for configuration tutorial [click here](https://help.apinto.com/docs/formatter) to jump |

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
      "$response_headers"
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

![](images/2024-10-27/fd2998c0454c5cf51054b52d228bc4bc1ffc25e9aa65d1f82f9edc972e31fe78.png)  