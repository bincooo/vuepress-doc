---
title: docker安装
---

### 下载并安装

可参照官网步骤 [查看](https://docs.docker.com/engine/install/centos)

1. 如之前已安装过先删除

   ```bash
   sudo yum remove docker \
     docker-client \
     docker-client-latest \
     docker-common \
     docker-latest \
     docker-latest-logrotate \
     docker-logrotate \
     docker-engine
   ```

2. 添加docker yum源

   ```bash
   sudo yum install -y yum-utils
   sudo yum-config-manager \
     --add-repo \
     https://download.docker.com/linux/centos/docker-ce.repo
   ```

3. 安装docker

   ```bash
   sudo yum install -y docker-ce docker-ce-cli containerd.io
   ```

### 配置docker加速器

编辑 `/etc/docker/daemon.json`，文件不存在则新建

```json
{
    "registry-mirrors": [
        "https://m2sku7ir.mirror.aliyuncs.com"
    ]
}
```

如果docker已启动，需要重新加载配置

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 设置开机启动

```bash
systemctl enable docker.service
```

### 警告处理

```tex
WARNING: IPv4 forwarding is disabled
WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
```

```bash
vim /etc/sysctl.conf
===
net.ipv4.ip_forward=1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
===
systemctl restart network
docker info
```

