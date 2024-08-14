# Syslog日志

## 简介

收集请求网关的日志信息，并将其输出到`Syslog`中。

## 特性

能够将程序运行中产生的日志内容输出远端的Syslog服务器。

* 支持多种请求协议，包括TCP、UDP、UNIX
* 支持设置Syslog输出日志等级
* 支持日志输出格式类型
* 支持自定义日志格式化配置

## 操作演示

### 新建Syslog日志配置

1. 点击左侧导航栏`运维与集成` -> `日志配置` -> `Syslog日志`，点击`添加Syslog日志`。

![](images/2024-08-14/b8bba47ec2ed53edda8cf9e634f846681eb3570e7955ae9a5f73021e7bcfb687.png)  

2. 按分区填写Syslog日志配置。

![](images/2024-08-14/7ff8cb4665b5240ce96bd01207844add9c73f96dbba958d7a3828d9519063f2c.png)  

**配置说明**：

| 字段名称   | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| 网络协议   | 请求Syslog服务的协议，支持TCP、UDP、UNIX                     |
| 服务器地址 | Syslog服务的地址                                             |
| 日志等级   | Syslog输出日志等级，支持ERROR、WARN、INFO、DEBUG、TRACE      |
| 输出格式   | 输出日志内容格式，支持单行、Json格式输出                     |
| 格式化配置 | 输出格式模版，配置教程[点此](https://help.apinto.com/docs/formatter)进行跳转 |

**格式化配置示例**

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

3、点击`提交`后，Syslog日志配置添加完成

![](images/2024-08-14/7dfe85c812f11be95e7f9e65fa497e05076d19565179080222c0262966ba7465.png)  

### 上线

1. 点击待上线配置后方的`上线`按钮。

![](images/2024-08-14/ad6e289fe686a7e33b99028297be5fe5841e59abc614235fe6c6aa7ead386be4.png)  
