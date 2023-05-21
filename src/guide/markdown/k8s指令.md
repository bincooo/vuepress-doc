---
 title: k8s指令
---

## K8S指令

#### 指令汇总

```tex
kubectl 控制 Kubernetes 集群管理器。
 查找更多信息，请访问: https://kubernetes.io/docs/reference/kubectl/overview/

Basic Commands (Beginner):
  create         从文件或标准输入创建资源。
  expose         获取一个复制控制器、服务、部署或 Pod，并将其作为新的 Kubernetes 服务公开
  run            在集群上运行一个特定的镜像
  set            在对象上设置特定功能

Basic Commands (Intermediate):
  explain        资源文件
  get            显示一项或多项资源
  edit           编辑服务器上的资源
  delete         按文件名、标准输入、资源和名称或资源和标签选择器删除资源

Deploy Commands:
  rollout        管理资源的推出
  scale          为 Deployment、ReplicaSet、Replication Controller 或 Job 设置新大小
  autoscale      自动扩展 Deployment、ReplicaSet 或 ReplicationController

Cluster Management Commands:
  certificate    修改证书资源。
  cluster-info   显示集群信息
  top            显示资源（CPU/内存/存储）使用情况。
  cordon         将节点标记为不可调度
  uncordon       将节点标记为可调度
  drain          Drain节点准备维护
  taint          更新一个或多个节点上的污点

Troubleshooting and Debugging Commands:
  describe       显示特定资源或资源组的详细信息
  logs           打印 pod 中容器的日志
  attach         附加到正在运行的容器
  exec           在容器中执行命令
  port-forward   将一个或多个本地端口转发到一个 Pod
  proxy          运行到 Kubernetes API 服务器的代理
  cp             将文件和目录复制到容器或从容器复制。
  auth           检查授权

Advanced Commands:
  diff           与可能应用的版本不同的实时版本
  apply          按文件名或标准输入将配置应用到资源
  patch          使用战略合并补丁更新资源的字段
  replace        通过文件名或标准输入替换资源
  wait           实验性：等待一个或多个资源的特定条件。
  convert        在不同 API 版本之间转换配置文件
  kustomize      从目录或远程 url 构建 kustomization 目标。

Settings Commands:
  label          更新资源上的标签
  annotate       更新资源的注释
  completion     输出指定 shell（bash 或 zsh）的 shell 完成代码

Other Commands:
  api-resources  在服务器上打印支持的 API 资源
  api-versions   在服务器上打印支持的API版本，以“组/版本”的形式
  config         修改 kubeconfig 文件
  plugin         提供与插件交互的实用程序。
  version        打印客户端和服务器版本信息

Usage:
  kubectl [flags] [options]

使用“kubectl <command> --help”获取有关给定命令的更多信息。
使用“kubectl options”获取全局命令行选项列表（适用于所有命令）。
```

#### 查询所有pods

```bash
kubectl get pods --all-namespaces
```

#### 启动容器的最小单元

```bash
kubectl run nginx --image=nginx --replicas=2 --port=80
```

#### 查看已部署的服务

```bash
kubectl get deployment
```

#### 发布服务

```bash
kubectl expose deployment nginx --port=80 --type=LoadBalancer
```

#### 查看已发布的服务

```bash
kubectl get services
```

#### 查看服务详情

```bash
kubectl describe service nginx
```

#### 删除已部署的服务

```bash
kubectl delete deployment nginx
```

#### 删除已发布的服务

```bash
kubectl delete service nginx
```

#### 查看yml属性定义

```bash
kubectl explain pods
```

