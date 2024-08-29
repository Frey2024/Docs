# File Logging

Collect log information of the request gateway and output it to a file for developers to query.

## Features

File Logging: Outputs request information to a log file with the following features:

* Customize the directory and filename for storing files
* Split log files according to a certain cycle to avoid the problem of a single file being too large to view
* Regularly delete expired files to reduce hard disk space expenses

## Operation Demonstration

### Create New File Logging Configuration

1. Click on `System Settings` -> `Operations and Integration` -> `Logs` -> `File Logging` in the left navigation bar, and then click `Add File Logging`.

![](images/2024-08-14/e3179cdf3f75ff815697f271fd21cebe598b5c1a473be9668acd35c15b27cfca.png)  

2. Fill in the file logging configuration.

![](images/2024-08-14/1e89c4f712e14377b15a86680c90626f590e9a3dca1cf74d71f106303249788c.png)  

**Configuration Explanation**:

| Field Name     | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| File Name      | Stored file name; the actual stored name will have a `.log` suffix, i.e., \{file name\}.log |
| Directory      | File storage directory; supports relative and absolute paths   |
| Log Split Cycle| Create new log files according to a certain cycle; old files will be renamed. Options: Hour, Day |
| Expiry Time    | File retention time, in days. Files exceeding the retention time will be regularly cleaned and deleted |
| Output Format  | Log content output format, supports single-line and JSON format output |
| Formatting Configuration | Output format template. Configuration tutorial [click here](https://help.apinto.com/docs/formatter) to jump |

**File Lifecycle Demonstration**

![img](http://data.eolinker.com/course/tgLQMA27ce951803c9e4c6ab3c82a899863c86f86624e01.png)

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

After completing, click `Submit`.

### Go Live

1. Click the `Go Live` button next to the configuration waiting to be launched.

![](images/2024-08-14/09046b548e25f27fa9be3a11bb4202273229146304828187ecc9136213af96b8.png)  

### Access Interface, Print Log Output

> **Prerequisite:**
>
> 1. You have completed the service subscription process, and the service provider has approved the subscription application. If not, refer to the tutorial [Subscribe Service](../../../quick/suberscriber/subscribe.md).

Access the subscribed interface. Here we use the `Apikit` test function for demonstration.

![img](http://data.eolinker.com/course/l2sHmd3600aeebb248a48629498f4a0ab9e2529ac1e3587.png)

After accessing, enter the node directory to view the access log output information, as shown below.

![img](http://data.eolinker.com/course/d5ryFin9e200c902beea742b311944041249ce19732bb28.png)