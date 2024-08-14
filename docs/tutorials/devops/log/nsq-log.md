# NSQ日志

## 简介

收集请求网关的日志信息，并将其输出到`NSQ`中，方便使用者进行二次操作，如日志分析等。

## 特性

能够将程序运行中产生的日志内容输出到指定`NSQ`的Topic中。

* 支持填写多个`NSQD`请求地址
* 支持日志输出格式类型
* 支持自定义日志格式化配置

## 前置条件

1. 存在可使用的分区，若无，请参考教程 [新建分区](../../kuai-su-ru-men/qian-zhi-gong-zuo/xin-jian-fen-qu.md)。

## 操作演示

### 新建NSQ日志配置

1. 点击左侧导航栏`运维与集成` -> `日志配置` -> `NSQ日志`，点击`添加NSQ日志`。

![](images/2024-08-14/1c488fb8e1e3c628f571a11f913f5d2eb101bedfcc3ca7fcd3d3b9d5944a24b2.png)  

2. 填写NSQ日志配置。

![](images/2024-08-14/63aed79341137d9003274995f2458facd4ccaf66b5f988aff791d7d8a8d54f5b.png)  

**配置说明**：

| 字段名称     | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| NSQD地址列表 | NSQD提供TCP服务的地址列表，支持填写多个地址                  |
| Topic        | NSQD的Topic信息                                              |
| 鉴权Secret   | 配置访问NSQD的鉴权密钥信息                                   |
| 输出格式     | 输出日志内容格式，支持单行、Json格式输出                     |
| 格式化配置   | 输出格式模版，配置教程[点此](https://help.apinto.com/docs/formatter)进行跳转 |

**示例格式化配置**

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

3、点击`提交`后，NSQ日志配置添加完成

![](images/2024-08-14/9ab0f9f94698248c7d7011020c33bb6604ac39fa2fdaba4c480d3cc862e54cab.png)  

### 上线
1. 点击待上线配置后方的`上线`按钮。

![](images/2024-08-14/bfdfcaed659de3734316e9dbe8f4604a3e5e5d536a6ea9d709d7290e886c8966.png)  
