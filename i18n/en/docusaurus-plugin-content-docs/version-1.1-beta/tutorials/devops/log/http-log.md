# HTTP Logs

Collect log information from request gateways and output it to an **HTTP server** for users to perform further operations such as log analysis, etc.

## Features

The HTTP log plugin sends node access logs to an HTTP service interface via HTTP requests. It has the following features:

* Supports multiple request methods, including **POST**, **PUT**, **PATCH**
* Supports custom request headers
* Supports log output format types
* Supports custom log formatting configuration

## Operation Demonstration

### Create a New HTTP Log Configuration

1. Click on the left sidebar `System Settings` -> `Operations & Integration` -> `Logs` -> `HTTP Logs`, then click `Add HTTP Log`.

![](images/2024-08-14/9ac215d01d8cb8b99b7e077de8acd5922b0ccda23fa5184892f4666d199ee51b.png)  

2. HTTP Log Configuration

![](images/2024-08-14/22b5b45bc7207e53b14182cd255f10fae0901b8b84d12db7f9850a7033b7b202.png)  

**Configuration Explanation**:

| Field Name  | Description                                                   |
| ------------| --------------------------------------------------------------|
| Request Method | The request method used when accessing the HTTP service interface, currently supports POST, PUT, PATCH  |
| URL         | The complete request path of the HTTP service interface       |
| Request Header | Header information for the request, can include parameters needed when accessing the HTTP service interface, such as authentication information. Enter in JSON format, with data as `key-value` pairs, such as: `{"from":"apinto"}` |
| Output Format | Format of the output log content, supports single line, JSON format output |
| Format Configuration | Output format template, configuration tutorial [click here](https://help.apinto.com/docs/formatter) to jump to |

**Format Configuration Example**

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

3. Click `Submit`, the HTTP log is added successfully.

![](images/2024-08-14/6b4bc8b69dce0d4611e09cbd84939df864aaf5c0a77983b3b06a84019dd955dd.png)  

### Go Live

1. Click the `Go Live` button next to the configuration to be deployed.

![](images/2024-08-14/7553b15c5fa421b0e9fd429f447eccd442c30739ed8d47cc51b13c7386b7c18d.png)  