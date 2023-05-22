import{_ as e,Z as n,$ as a,a4 as s}from"./framework-edd0442a.js";const i={},d=s(`<h2 id="k8s指令" tabindex="-1"><a class="header-anchor" href="#k8s指令" aria-hidden="true">#</a> K8S指令</h2><h4 id="指令汇总" tabindex="-1"><a class="header-anchor" href="#指令汇总" aria-hidden="true">#</a> 指令汇总</h4><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>kubectl 控制 Kubernetes 集群管理器。
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
  kubectl <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

使用“kubectl &lt;command&gt; --help”获取有关给定命令的更多信息。
使用“kubectl options”获取全局命令行选项列表（适用于所有命令）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询所有pods" tabindex="-1"><a class="header-anchor" href="#查询所有pods" aria-hidden="true">#</a> 查询所有pods</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get pods --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动容器的最小单元" tabindex="-1"><a class="header-anchor" href="#启动容器的最小单元" aria-hidden="true">#</a> 启动容器的最小单元</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl run nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看已部署的服务" tabindex="-1"><a class="header-anchor" href="#查看已部署的服务" aria-hidden="true">#</a> 查看已部署的服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get deployment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="发布服务" tabindex="-1"><a class="header-anchor" href="#发布服务" aria-hidden="true">#</a> 发布服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl expose deployment nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>LoadBalancer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看已发布的服务" tabindex="-1"><a class="header-anchor" href="#查看已发布的服务" aria-hidden="true">#</a> 查看已发布的服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看服务详情" tabindex="-1"><a class="header-anchor" href="#查看服务详情" aria-hidden="true">#</a> 查看服务详情</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl describe <span class="token function">service</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除已部署的服务" tabindex="-1"><a class="header-anchor" href="#删除已部署的服务" aria-hidden="true">#</a> 删除已部署的服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete deployment nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除已发布的服务" tabindex="-1"><a class="header-anchor" href="#删除已发布的服务" aria-hidden="true">#</a> 删除已发布的服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete <span class="token function">service</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看yml属性定义" tabindex="-1"><a class="header-anchor" href="#查看yml属性定义" aria-hidden="true">#</a> 查看yml属性定义</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl explain pods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),l=[d];function r(c,v){return n(),a("div",null,l)}const u=e(i,[["render",r],["__file","k8s指令.html.vue"]]);export{u as default};
