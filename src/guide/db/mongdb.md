---
title: mongo数据安装与授权
head:

- - meta
  - name: referrer
    content: no-referrer

---

### 下载并安装

可参照官网步骤 [查看](https://www.mongodb.com/docs/manual/installation/)

1. 添加yum源
   
   ```shell
   [mongodb-org-8.0]
   name=MongoDB Repository
   baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/8.0/x86_64/
   gpgcheck=1
   enabled=1
   gpgkey=https://pgp.mongodb.com/server-8.0.asc
   ```

2. 安装server
   
   ```shell
   sudo yum install -y mongodb-org
   ```

安装完成后默认会使用一下目录：

- `/var/lib/mongo` data

- `/var/log/mongodb` log

如果以上目录缺少读写权限，需授权

```shell
sudo chown -R mongod:mongod <directory>
```

### 启动server & 状态检查

```shell
# 启动命令
sudo systemctl start mongod
```

```shell
# 检查运行情况
sudo systemctl status mongod
```

```shell
# 开启自动启动
sudo systemctl enable mongod
```

```shell
# 停止服务
sudo systemctl stop mongod
```

```shell
# 重启服务
sudo systemctl stop mongod
```

### 配置

安装过后在 `/etc/mongod.conf`会生成该文件

mongodb 默认是单模式且没有密码防护，新装服务需要配置以避免被人随意访问

```yaml
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# Where and how to store data.
storage:
  dbPath: /var/lib/mongo

# how the process runs
processManagement:
  timeZoneInfo: /usr/share/zoneinfo

# network interfaces
net:
  port: 27017
  bindIpAll: true  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.


security:
  keyFile: /var/lib/mongo/db.key
  authorization: "enabled"

#operationProfiling:

#replication:
replication:
  replSetName: "rs0"

#sharding:

## Enterprise-Only Options

#auditLog:
```

`bindIpAll: true` 允许任意ip访问

`security.authorization: "enabled"` 开启权限访问

连接 mongosh

```shell
> mongosh
-----
use admin;

# 创建用户 & 授权
db.createUser({
   user: "用户名",
   pwd: "密码",
   roles: [{ role: "readWrite", db: "数据库名" }]
});


# 获取用户信息
db.getUser('admin');


# 修改密码
db.changeUserPassword('admin', 'xxxx');

# 修改用户密码和信息
db.runCommand(
    {
        updateUser:"username",
        pwd:"xxx",
        customData:{title:"xxx"}
    }
);

# 删除用户
db.dropUser('user001');
```

> user字段，为新用户的名字；   
> pwd字段，用户的密码；   
> cusomData字段，为任意内容，例如可以为用户全名介绍；   
> roles字段，指定用户的角色，可以用一个空数组给新用户设定空角色。在roles字段,可以指定内置角色和用户定义的角色。   
> 超级用户的role有两种，userAdmin或者userAdminAnyDatabase(比前一种多加了对所有数据库的访问,仅仅是访问而已)。   
> db是指定数据库的名字，admin是管理数据库。   
> 不能用admin数据库中的用户登录其他数据库。注：只能查看当前数据库中的用户，哪怕当前数据库admin数据库，也只能查看admin数据库中创建的用户。

权限角色列表

> 1. 数据库用户角色：read、readWrite；
> 2. 数据库管理角色：dbAdmin、dbOwner、userAdmin;
> 3. 集群管理角色：clusterAdmin、clusterManager、4. clusterMonitor、hostManage；
> 4. 备份恢复角色：backup、restore；
> 5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
> 6. 超级用户角色：root
> 7. 内部角色：__system

具体描述如下

> 1. Read：允许用户读取指定数据库
> 2. readWrite：允许用户读写指定数据库
> 3. dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
> 4. userAdmin：允许用户向system.users集合写入，可以在指定数据库里创建、删除和管理用户
> 5. clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
> 6. readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
> 7. readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
> 8. userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
> 9. dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
> 10. root：只在admin数据库中可用。超级账号，超级权限

### 复制集

保证数据在生产部署时的冗余和可靠性，通过在不同的机器上保存副本来保证数据的不会因为单点损坏而丢失。能够随时应对数据丢失、机器损坏带来的风险。

1. 生成访问时使用的key
   
   ```shell
   openssl rand -base64 128 > /var/lib/mongo/db.key &
   chmod 400 /var/lib/mongo/db.key &
   chown 999:999 /data/mongodb.key
   ```

2. 脚本初始化副本(复制集)
   
   ```shell
   const isInited = rs.status().ok == 1
   if (!isInited) {
       rs.initiate({
         _id: "rs0",
         members: [
             { _id: 0, host: "127.0.0.1:27017" }
         ]
      });
   }
   ```

# 添加其它复制集

   rs.add("ubuntu:27018");

   ```

也可以通过配置设置 `replication.replSetName: "rs0"`

当主节点失活后，其它副节点选举一个作为新的主节点