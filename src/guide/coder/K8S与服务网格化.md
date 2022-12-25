---
 title: K8S与服务网格化
---

### 基本信息

>###### 虚拟机： VMware Workstation Pro 15
>
>###### 系统： CentOS Linux release 7.9.2009 (Core) 64bit
>
>* k8s1(master) 192.168.170.131
>* k8s2(worker) 192.168.170.132
>* k8s3(worker) 192.168.170.133
>
>###### docker： Docker Engine - Community 20.10.5
>
>###### k8s： 
>
> - kubelet		1.15.0
> - kubeadm	1.15.0
> - kubectl		1.15.0



### 准备工作

关闭交换空间

```bash
swapoff -a
```

避免开机启动交换空间

```bash
#注释swap行
vim /etc/fstab
```
修改主机名

```bash
hostnamectl set-hostname k8s1
vim /etc/hosts
```

```tex
192.168.170.130 k8s1
```

设置时区

```
timedatectl status
timedatectl set-timezone "Asia/Shanghai"
```

关闭防火墙

```bash
systemctl status firewalld
firewall-cmd --state
# 开启
# service firewalld start
# 重启
# serivce firewalld restart
# 停止
service firewalld stop
```



### 安装k8s组件

可参考官网提供的安装步骤 [点我](https://kubernetes.io/docs/tasks/tools)

####  1. 配置yum源

```bash
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```

#### 2. 设置`selinex`

```bash
setenforce 0
```

#### 3. 安装组件

```bash
yum install -y kubelet-1.15.0 kubeadm-1.15.0 kubectl-1.15.0
# 启动kublet,并开机自启动
systemctl start kubelet
systemctl enable kubelet
```

`kubeadm`是k8s集群安装工具，能够快速搭建k8s集群。

+ 离线包上传`suveng-k8s-image.tar.gz` [下载](https://pan.baidu.com/s/1MYRNTlf13zTSjLnFnr6O1Q) 提取码: m6a1；版本为1.15.0
  
  可参考博客 [点我](https://blog.csdn.net/qq_37933685/article/details/104307500)
  
  ##### 解压
  ```bash
  tar -zxvf suveng-k8s-image.tar.gz
  ```
  
  
  ##### 导入镜像
  ```bash
  docker load -i suveng/k8s.gcr.io-kube-proxy.tar
  docker load -i suveng/k8s.gcr.io-kube-apiserver.tar
  docker load -i suveng/k8s.gcr.io-kube-controller-manager.tar
  docker load -i suveng/k8s.gcr.io-kube-scheduler.tar
  docker load -i suveng/k8s.gcr.io-coredns.tar
  docker load -i suveng/k8s.gcr.io-etcd.tar
  docker load -i suveng/k8s.gcr.io-pause.tar
  docker load -i suveng/flannel.tar
  ```
  
  
  ##### 重新打标签
  ```bash
  docker tag suveng/k8s.gcr.io-kube-apiserver:v1.15.0 k8s.gcr.io/kube-apiserver:v1.15.0
  docker tag suveng/k8s.gcr.io-kube-scheduler:v1.15.0 k8s.gcr.io/kube-scheduler:v1.15.0
  docker tag suveng/k8s.gcr.io-kube-controller-manager:v1.15.0 k8s.gcr.io/kube-controller-manager:v1.15.0
  docker tag suveng/k8s.gcr.io-kube-proxy:v1.15.0 k8s.gcr.io/kube-proxy:v1.15.0
  docker tag suveng/k8s.gcr.io-etcd:3.3.10 k8s.gcr.io/etcd:3.3.10
  docker tag suveng/k8s.gcr.io-pause:3.1 k8s.gcr.io/pause:3.1
  docker tag suveng/k8s.gcr.io-coredns:1.3.1 k8s.gcr.io/coredns:1.3.1
  ```
  
  
  ##### 删除自己的标签
  ```bash
  docker rmi suveng/k8s.gcr.io-kube-apiserver:v1.15.0 
  docker rmi suveng/k8s.gcr.io-kube-scheduler:v1.15.0 
  docker rmi suveng/k8s.gcr.io-kube-controller-manager:v1.15.0 
  docker rmi suveng/k8s.gcr.io-kube-proxy:v1.15.0 
  docker rmi suveng/k8s.gcr.io-etcd:3.3.10 
  docker rmi suveng/k8s.gcr.io-pause:3.1 
  docker rmi suveng/k8s.gcr.io-coredns:1.3.1
  ```


+ centos7用户还需要设置路由

     ```bash
     yum install -y bridge-utils.x86_64
     
     # 加载br_netfilter模块，使用lsmod查看开启的模块
     modprobe  br_netfilter
     cat <<EOF >  /etc/sysctl.d/k8s.conf
     net.bridge.bridge-nf-call-ip6tables = 1
     net.bridge.bridge-nf-call-iptables = 1
     EOF
     
     # 重新加载所有配置文件
     sysctl --system
  ```

     后面添加k8s 从节点时会报出一个warn错误：`The recommended driver is "systemd".`
  
     可通过配置去除这个警告
  
     ```bash
     vi /etc/docker/daemon.json
     ```
  
     ```json
     "exec-opts": ["native.cgroupdriver=systemd"]
     ```
  
     ```bash
     sudo systemctl daemon-reload
     sudo systemctl restart docker
     ```


​     

+ 安装主节点(master)

     ```bash
     # master节点初始化,配置网络,应用flannel网络,注意这里的flannel网络的pod内网地址默认是10.244.0.0/16,在master初始化时指定内网地址
     kubeadm init --apiserver-advertise-address <master_ip> \ 
       --pod-network-cidr 10.244.0.0/16 --kubernetes-version 1.15.0 \
       | tee kubeadm-init.log
     kubectl get node
     ```

     根据日志信息执行脚本： `kubeadm-init.log`里有脚本提示

     k8s1(192.168.170.131)主机

     ```bash
     sudo mkdir -p $HOME/.kube
     sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
     sudo chown $(id -u):$(id -g) $HOME/.kube/config
     ```

     

+ 安装从节点(worker)： `kubeadm-init.log`里有脚本提示    (`先安装CNI通讯组件`)

     k8s2(192.168.170.132)主机、k8s3(192.168.170.133)主机

     ```bash
     kubeadm join 192.168.170.131:6443 --token abcdef.0123456789abcdef \
       --discovery-token-ca-cert-hash \
       sha256:f7ef568da1265047be6170fdbae7ccbea79f1f8b4762d44f4d6eab425319d4e5
     
     # 主节点查看 (一秒刷新)
     watch -n 1 kubectl get pod -A
     ```
     
     使从节点可访问整个集群 `api-resources` (可选：一般只会在主节点操作pod)
     
     ```bash
     mkdir $HOME/.kube
     # 从master拷贝文件到worker
     scp root@192.168.170.131:/etc/kubernetes/admin.conf $HOME/.kube/config
     # 授权
     sudo chown $(id -u):$(id -g) $HOME/.kube/config
     ```
     
     

#### 4. CNI 通讯

CNI(Container Network Interface)是容器平台(docker、k8s、mesos ...) 的一套容器网络标准；

它的解决方案有flannel、calico、weave这些都是CNI的实现；

这里提供flannel和calico的安装步骤：(二选一即可)



##### flannel安装

```bash
# 下载配置
curl -o kube-flannel.yml \
  https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
# 配置网络
kubectl apply -f kube-flannel.yml

# 检测master节点
kubectl get node
watch kubectl get pods --all-namespaces

# 查看kubelet的日志
journalctl -fu kubelet
```



解决k8s的coredns一直处于的crashloopbackoff问题

```bash
# 查看日志
kubectl logs -n kube-system coredns-5c98db65d4-bxmhq
# error: no such file or directory
```

参考博客 [点我](https://www.cnblogs.com/Enlencode/p/14213351.html)

解决方式(仅供参考)

`可能是由iptables规则的错乱或者缓存导致的`

```bash
systemctl stop kubelet
systemctl stop docker
iptables --flush
iptables -tnat --flush
systemctl start kubelet
systemctl start docker
```



##### calico安装 [点我](https://docs.projectcalico.org/archive/v3.18/getting-started/kubernetes/quickstart)

```bash
kubectl create -f https://docs.projectcalico.org/archive/v3.18/manifests/tigera-operator.yaml
```



-------------------

kubectl get node 获取节点时

```bash
NAME   STATUS     ROLES    AGE    VERSION
k8s1   Ready      master   7d1h   v1.15.0
k8s2   NotReady   <none>   7d     v1.15.0
k8s3   NotReady   <none>   7d     v1.15.0
```

可以尝试刷新iptables试试

```bash
systemctl stop kubelet
iptables --flush
iptables -tnat --flush
systemctl start kubelet
```

