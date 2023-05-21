import{_ as l,E as r,Z as c,$ as t,a0 as e,a1 as s,a2 as i,a4 as n}from"./framework-10e089e2.js";const d={},o=n(`<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息" aria-hidden="true">#</a> 基本信息</h3><blockquote><h6 id="虚拟机-vmware-workstation-pro-15" tabindex="-1"><a class="header-anchor" href="#虚拟机-vmware-workstation-pro-15" aria-hidden="true">#</a> 虚拟机： VMware Workstation Pro 15</h6><h6 id="系统-centos-linux-release-7-9-2009-core-64bit" tabindex="-1"><a class="header-anchor" href="#系统-centos-linux-release-7-9-2009-core-64bit" aria-hidden="true">#</a> 系统： CentOS Linux release 7.9.2009 (Core) 64bit</h6><ul><li>k8s1(master) 192.168.170.131</li><li>k8s2(worker) 192.168.170.132</li><li>k8s3(worker) 192.168.170.133</li></ul><h6 id="docker-docker-engine-community-20-10-5" tabindex="-1"><a class="header-anchor" href="#docker-docker-engine-community-20-10-5" aria-hidden="true">#</a> docker： Docker Engine - Community 20.10.5</h6><h6 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> k8s：</h6><ul><li>kubelet 1.15.0</li><li>kubeadm 1.15.0</li><li>kubectl 1.15.0</li></ul></blockquote><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><p>关闭交换空间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>避免开机启动交换空间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#注释swap行</span>
<span class="token function">vim</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改主机名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s1
<span class="token function">vim</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>192.168.170.130 k8s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置时区</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timedatectl status
timedatectl set-timezone &quot;Asia/Shanghai&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status firewalld
firewall-cmd <span class="token parameter variable">--state</span>
<span class="token comment"># 开启</span>
<span class="token comment"># service firewalld start</span>
<span class="token comment"># 重启</span>
<span class="token comment"># serivce firewalld restart</span>
<span class="token comment"># 停止</span>
<span class="token function">service</span> firewalld stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装k8s组件" tabindex="-1"><a class="header-anchor" href="#安装k8s组件" aria-hidden="true">#</a> 安装k8s组件</h3>`,15),p={href:"https://kubernetes.io/docs/tasks/tools",target:"_blank",rel:"noopener noreferrer"},u=n(`<h4 id="_1-配置yum源" tabindex="-1"><a class="header-anchor" href="#_1-配置yum源" aria-hidden="true">#</a> 1. 配置yum源</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-设置selinex" tabindex="-1"><a class="header-anchor" href="#_2-设置selinex" aria-hidden="true">#</a> 2. 设置<code>selinex</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-安装组件" tabindex="-1"><a class="header-anchor" href="#_3-安装组件" aria-hidden="true">#</a> 3. 安装组件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.15.0 kubeadm-1.15.0 kubectl-1.15.0
<span class="token comment"># 启动kublet,并开机自启动</span>
systemctl start kubelet
systemctl <span class="token builtin class-name">enable</span> kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>kubeadm</code>是k8s集群安装工具，能够快速搭建k8s集群。</p>`,7),v=e("code",null,"suveng-k8s-image.tar.gz",-1),b={href:"https://pan.baidu.com/s/1MYRNTlf13zTSjLnFnr6O1Q",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_37933685/article/details/104307500",target:"_blank",rel:"noopener noreferrer"},k=n(`<h5 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> suveng-k8s-image.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="导入镜像" tabindex="-1"><a class="header-anchor" href="#导入镜像" aria-hidden="true">#</a> 导入镜像</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-kube-proxy.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-kube-apiserver.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-kube-controller-manager.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-kube-scheduler.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-coredns.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-etcd.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/k8s.gcr.io-pause.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> suveng/flannel.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="重新打标签" tabindex="-1"><a class="header-anchor" href="#重新打标签" aria-hidden="true">#</a> 重新打标签</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag suveng/k8s.gcr.io-kube-apiserver:v1.15.0 k8s.gcr.io/kube-apiserver:v1.15.0
<span class="token function">docker</span> tag suveng/k8s.gcr.io-kube-scheduler:v1.15.0 k8s.gcr.io/kube-scheduler:v1.15.0
<span class="token function">docker</span> tag suveng/k8s.gcr.io-kube-controller-manager:v1.15.0 k8s.gcr.io/kube-controller-manager:v1.15.0
<span class="token function">docker</span> tag suveng/k8s.gcr.io-kube-proxy:v1.15.0 k8s.gcr.io/kube-proxy:v1.15.0
<span class="token function">docker</span> tag suveng/k8s.gcr.io-etcd:3.3.10 k8s.gcr.io/etcd:3.3.10
<span class="token function">docker</span> tag suveng/k8s.gcr.io-pause:3.1 k8s.gcr.io/pause:3.1
<span class="token function">docker</span> tag suveng/k8s.gcr.io-coredns:1.3.1 k8s.gcr.io/coredns:1.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除自己的标签" tabindex="-1"><a class="header-anchor" href="#删除自己的标签" aria-hidden="true">#</a> 删除自己的标签</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi suveng/k8s.gcr.io-kube-apiserver:v1.15.0 
<span class="token function">docker</span> rmi suveng/k8s.gcr.io-kube-scheduler:v1.15.0 
<span class="token function">docker</span> rmi suveng/k8s.gcr.io-kube-controller-manager:v1.15.0 
<span class="token function">docker</span> rmi suveng/k8s.gcr.io-kube-proxy:v1.15.0 
<span class="token function">docker</span> rmi suveng/k8s.gcr.io-etcd:3.3.10 
<span class="token function">docker</span> rmi suveng/k8s.gcr.io-pause:3.1 
<span class="token function">docker</span> rmi suveng/k8s.gcr.io-coredns:1.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h=n(`<li><p>centos7用户还需要设置路由</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bridge-utils.x86_64

<span class="token comment"># 加载br_netfilter模块，使用lsmod查看开启的模块</span>
modprobe  br_netfilter
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>  /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>

<span class="token comment"># 重新加载所有配置文件</span>
<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面添加k8s 从节点时会报出一个warn错误：<code>The recommended driver is &quot;systemd&quot;.</code></p><p>可通过配置去除这个警告</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;exec-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=n(`<p>​</p><ul><li><p>安装主节点(master)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># master节点初始化,配置网络,应用flannel网络,注意这里的flannel网络的pod内网地址默认是10.244.0.0/16,在master初始化时指定内网地址</span>
kubeadm init --apiserver-advertise-address <span class="token operator">&lt;</span>master_ip<span class="token operator">&gt;</span> <span class="token punctuation">\\</span> 
  --pod-network-cidr <span class="token number">10.244</span>.0.0/16 --kubernetes-version <span class="token number">1.15</span>.0 <span class="token punctuation">\\</span>
  <span class="token operator">|</span> <span class="token function">tee</span> kubeadm-init.log
kubectl get <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据日志信息执行脚本： <code>kubeadm-init.log</code>里有脚本提示</p><p>k8s1(192.168.170.131)主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装从节点(worker)： <code>kubeadm-init.log</code>里有脚本提示 (<code>先安装CNI通讯组件</code>)</p><p>k8s2(192.168.170.132)主机、k8s3(192.168.170.133)主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.170.131:6443 <span class="token parameter variable">--token</span> abcdef.0123456789abcdef <span class="token punctuation">\\</span>
  --discovery-token-ca-cert-hash <span class="token punctuation">\\</span>
  sha256:f7ef568da1265047be6170fdbae7ccbea79f1f8b4762d44f4d6eab425319d4e5

<span class="token comment"># 主节点查看 (一秒刷新)</span>
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> kubectl get pod <span class="token parameter variable">-A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使从节点可访问整个集群 <code>api-resources</code> (可选：一般只会在主节点操作pod)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token comment"># 从master拷贝文件到worker</span>
<span class="token function">scp</span> root@192.168.170.131:/etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token comment"># 授权</span>
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_4-cni-通讯" tabindex="-1"><a class="header-anchor" href="#_4-cni-通讯" aria-hidden="true">#</a> 4. CNI 通讯</h4><p>CNI(Container Network Interface)是容器平台(docker、k8s、mesos ...) 的一套容器网络标准；</p><p>它的解决方案有flannel、calico、weave这些都是CNI的实现；</p><p>这里提供flannel和calico的安装步骤：(二选一即可)</p><h5 id="flannel安装" tabindex="-1"><a class="header-anchor" href="#flannel安装" aria-hidden="true">#</a> flannel安装</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载配置</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> kube-flannel.yml <span class="token punctuation">\\</span>
  https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
<span class="token comment"># 配置网络</span>
kubectl apply <span class="token parameter variable">-f</span> kube-flannel.yml

<span class="token comment"># 检测master节点</span>
kubectl get <span class="token function">node</span>
<span class="token function">watch</span> kubectl get pods --all-namespaces

<span class="token comment"># 查看kubelet的日志</span>
journalctl <span class="token parameter variable">-fu</span> kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决k8s的coredns一直处于的crashloopbackoff问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看日志</span>
kubectl logs <span class="token parameter variable">-n</span> kube-system coredns-5c98db65d4-bxmhq
<span class="token comment"># error: no such file or directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),f={href:"https://www.cnblogs.com/Enlencode/p/14213351.html",target:"_blank",rel:"noopener noreferrer"},x=n(`<p>解决方式(仅供参考)</p><p><code>可能是由iptables规则的错乱或者缓存导致的</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop kubelet
systemctl stop <span class="token function">docker</span>
iptables <span class="token parameter variable">--flush</span>
iptables <span class="token parameter variable">-tnat</span> <span class="token parameter variable">--flush</span>
systemctl start kubelet
systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={id:"calico安装-点我",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#calico安装-点我","aria-hidden":"true"},"#",-1),w={href:"https://docs.projectcalico.org/archive/v3.18/getting-started/kubernetes/quickstart",target:"_blank",rel:"noopener noreferrer"},E=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> https://docs.projectcalico.org/archive/v3.18/manifests/tigera-operator.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p>kubectl get node 获取节点时</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>NAME   STATUS     ROLES    AGE    VERSION
k8s1   Ready      master   7d1h   v1.15.0
k8s2   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   7d     v1.15.0
k8s3   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   7d     v1.15.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试刷新iptables试试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop kubelet
iptables <span class="token parameter variable">--flush</span>
iptables <span class="token parameter variable">-tnat</span> <span class="token parameter variable">--flush</span>
systemctl start kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function q(N,O){const a=r("ExternalLinkIcon");return c(),t("div",null,[o,e("p",null,[s("可参考官网提供的安装步骤 "),e("a",p,[s("点我"),i(a)])]),u,e("ul",null,[e("li",null,[e("p",null,[s("离线包上传"),v,s(),e("a",b,[s("下载"),i(a)]),s(" 提取码: m6a1；版本为1.15.0")]),e("p",null,[s("可参考博客 "),e("a",m,[s("点我"),i(a)])]),k]),h]),g,e("p",null,[s("参考博客 "),e("a",f,[s("点我"),i(a)])]),x,e("h5",_,[y,s(" calico安装 "),e("a",w,[s("点我"),i(a)])]),E])}const S=l(d,[["render",q],["__file","K8S与服务网格化.html.vue"]]);export{S as default};
