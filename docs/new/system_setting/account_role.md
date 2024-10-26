# 用户角色

APIPark 的用户角色模块用于管理系统内不同角色的权限设置，确保用户在其职责范围内拥有适当的访问和操作权限。该模块将角色分为 **系统角色** 和 **团队角色** 两大类，分别适用于平台级别和团队级别的权限控制。

- **系统角色** ：包括超级管理员、团队管理员、普通成员等，主要用于系统预设的通用角色。
- **团队角色** ：如团队管理员、服务开发者、应用管理员等，用于团队内部成员的灵活权限分配。

每个角色可设置详细的权限，包括 **组织管理**（成员、团队、角色的查看和管理）、**系统设置**（服务目录、集群、SSL 证书、数据源、日志配置、AI 供应商等模块的访问权限）。通过该模块，系统管理员能够精细化控制各类用户的访问权限，提升系统的安全性和管理效率。

## 角色权限一览
### 系统级别权限

<table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th>最高管理员（无法删改）</th>
    <th>团队管理员</th>
    <th>运维管理员</th>
    <th>[默认] 普通成员</th>
  </tr>
  <tr>
    <th rowspan="6">组织</th>
    <td rowspan="2">成员</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">团队</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">角色</td>
    <td>查看系统角色</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>查看团队角色</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th rowspan="2">API门户</th>
    <td rowspan="2">服务分类</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th rowspan="8">运维</th>
    <td rowspan="2">集群</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">SSL证书</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">日志</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">OpenAPI</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">仪表盘</td>
    <td>运行视图</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>系统拓扑图</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <th rowspan="4">工作空间</th>
    <td>应用</td>
    <td>查看所有应用（若不勾选，则只查看已加入的）</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>服务</td>
    <td>查看所有服务（若不勾选，则只查看已加入的）</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>团队</td>
    <td>查看所有团队（若不勾选，则只查看已加入的）</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td>API门户</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
  </tr>
</table>


### 团队级别权限

<table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th>团队管理员</th>
    <th>服务管理员</th>
    <th>服务开发者</th>
    <th>应用管理员</th>
    <th>[默认] 应用开发者</th>
  </tr>
  <tr>
    <th rowspan="10">服务</th>
    <td rowspan="2">API</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">上游</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">发布</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">订阅方管理（包括订阅方审批和订阅方列表）</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>服务管理</td>
    <td>管理（新增、修改、删除服务）</td>
    <td>✔</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr></tr>
  <tr>
    <th rowspan="6">应用</th>
    <td rowspan="2">订阅服务</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td>✔</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td>✔</td>
    <td>✔</td>
  </tr>
  <tr>
    <td rowspan="2">访问授权</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td>✔</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">应用管理</td>
    <td>管理（新增、修改、删除应用）</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td>✔</td>
    <td></td>
  </tr>
  <tr></tr>
  <tr>
    <th rowspan="4">团队</th>
    <td rowspan="2">成员</td>
    <td>查看</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>管理</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">团队管理</td>
    <td>查看</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>管理（修改、删除团队）</td>
    <td>✔</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
## 查看角色权限

1. 点击`系统设置` -> `角色`，进入系统角色列表。

![](images/2024-10-27/cffe066d54bc9ca6420f8b36a8c0eaa62951eb0d4b0d04a91ceb0d6b07bed0aa.png) 

2. 点击后方的`查看`，进入角色权限详情页。

![](images/2024-10-27/048a1cf04abcd68555c057c718dac3ceac8f17943b9a8033a00711c43275b682.png)  

![](images/2024-10-27/513b4af6c50c4b2796f585653f4b20fabddf11eccf085a0894d0c0cdcdf771ce.png)  

## 分配系统角色
1. 点击`系统设置` -> `账号`，进入账号列表页面

![](images/2024-10-27/8aa8fb44ec72ab8ed972546bca46690fe7a36a7e33ad6251933f2c4e73361108.png)  

2. 在角色下拉框中选择需要分配的系统角色。

![](images/2024-10-27/a665d38af609e972d72a6a8907f252ec4fda6c26801b222d296ed8da7fee8ff1.png)  

## 分配团队角色
1. 点击`工作空间` -> `团队`，进入团队列表页面。

![](images/2024-10-27/93ab71012110e8f539fa0c00a50e739bf4f35ccb7ab87c594ca04a11716dc4d0.png)  

2. 选择需要分配角色的团队，进入团队内页，点击`账号`。

![](images/2024-10-27/6a3116bc57555be409ee9ac007caa20a3ec790cf23b5f186191f3ac07ac23653.png)  

3. 在角色下拉框选择需要分配的团队角色。

![](images/2024-10-27/c05ee46dfb2d72d6c30b74fd6f17fdd911476627fcc1bfe84ce75b0daba8501e.png)  
