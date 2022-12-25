---
 title: oracle安装
---

#### 1.修改主机名

```bash
vim /etc/hosts
```

```
192.168.72.128  bingco.com
vim /etc/sysconfig/network
====
HOSTNAME=bingco.com
```



#### 2.配置YUM源
```bash
mount /dev/cdrom /mnt/server
yum -y install binutils-* \
compat-libstdc-++-33-* \
elfutils-libelf-* \
elfutils-libelf-devel-* \
gcc-* \
gcc-c++-* \
glibc-* \
glibc-common-* \
glibc-devel-* \
glibc-headers-* \
ksh-* \
libaio-* \
libgcc-* \
libstdc++-* \
make-* \
sysstat-* \
unixODBC-* \
unixODBC-devel-* \
compat-libcap1-* \
libXp-* \
libXt-* \
libXtst-*
```



#### 3.配置存储盘
```bash
mkfs.ext4 /dev/sdb
mkdir /oradata
mount /dev/sdb /oradata
chown oracle:oinstall /oradata
```



#### 4.创建用户和组
```bash
/usr/sbin/groupadd oinstall
/usr/sbin/groupadd dba
/usr/sbin/useradd -g oinstall -G dba oracle
echo oracle | passwd --stdin oracle
```



#### 5.设置oracle用户环境变量
```bash
vim .bash_profile
```

```bash
export ORACLE_BASE=/u01/app/oracle
export ORACLE_HOME=$ORACLE_BASE/product/12.2/db
export PATH=$ORACLE_HOME/bin:$PATH
export ORACLE_SID=fsdb
```



#### 6.修改系统内核
```bash
vim /etc/sysctl.conf
```

```tex
fs.aio-max-nr = 1048576
fs.file-max = 6815744
kernel.shmall = 2147483648
kernel.shmmax = 68719476736
kernel.shmmni = 4096
kernel.sem = 250 32000 100 128
net.ipv4.ip_local_port_range = 9000 65500
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048586
```

```bash
sysctl -p
```



#### 7.修改用户参数
```bash
vim /etc/security/limits.conf
```

```tex
oracle    soft    nproc    2048
oracle    hard    nproc    16384
oracle    soft    nofile   1024
oracle    hard    nofile   65536
oracle    soft    stack    10240
oracle    hard    stack    32768
```



#### 8.创建软件目录结构
```bash
mkdir -p /u01/app
chown -R oracle:oinstall /u01/app
chmod -R 775 /u01/app
```



#### 9.增加交换空间

```bash
dd if=/dev/zero of=/swap/01 bs=1024k count=1024
mkswap /swap/01
swapon /swap/01
```

