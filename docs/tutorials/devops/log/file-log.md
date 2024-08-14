# 文件日志

收集请求网关的日志信息，并将其输出到文件中，供开发者查询。

## 特性

文件日志：将请求信息输出到日志文件中，具备以下特性：

* 自定义文件的存放目录及文件名称
* 按照一定周期分割日志文件，避免单个文件过大不好查看的问题
* 定时删除过期文件，降低硬盘空间开销

## 操作演示

### 新建文件日志配置

1. 点击左侧导航栏`系统设置` -> `运维与集成` -> `日志` -> `文件日志`，点击`添加文件日志`。

![](images/2024-08-14/e3179cdf3f75ff815697f271fd21cebe598b5c1a473be9668acd35c15b27cfca.png)  


2. 填写文件日志配置

![](images/2024-08-14/1e89c4f712e14377b15a86680c90626f590e9a3dca1cf74d71f106303249788c.png)  

**配置说明**：

| 字段名称     | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| 文件名称     | 存放的文件名称，实际存放的名称会加上 `.log` 后缀，即为：\{文件名称\}.log |
| 存放目录     | 文件存放目录，支持相对路径和绝对路径                         |
| 日志分割周期 | 按照一定周期创建新日志文件，旧日志文件将会重命名，可选项：小时、天 |
| 过期时间     | 文件保存时间，单位：天，超过保存时间的，将定时清理删除       |
| 输出格式     | 输出日志内容格式，支持单行、Json格式输出                     |
| 格式化配置   | 输出格式模版，配置教程[点此](https://help.apinto.com/docs/formatter)进行跳转 |

**文件生命周期演示**

![img](http://data.eolinker.com/course/tgLQMA27ce951803c9e4c6ab3c82a899863c86f86624e01.png)

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

填写完后，点击`提交`即可。

### 上线

1. 点击待上线配置后方的`上线`按钮。

![](images/2024-08-14/09046b548e25f27fa9be3a11bb4202273229146304828187ecc9136213af96b8.png)  

### 访问接口，打印日志输出

> **前置要求：**
>
> 1. 已经走完服务订阅相关流程，并且服务提供者对订阅申请审批通过，若无，可参考教程 [快速入门](../../kuai-su-ru-men/)。

访问在订阅过的接口，此处使用`Apikit`的测试功能进行演示。

![img](http://data.eolinker.com/course/l2sHmd3600aeebb248a48629498f4a0ab9e2529ac1e3587.png)

访问完成后，进入节点目录，查看access日志输出信息，如下图

![img](http://data.eolinker.com/course/d5ryFin9e200c902beea742b311944041249ce19732bb28.png)