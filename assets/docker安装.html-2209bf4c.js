import{_ as a,E as i,Z as l,$ as d,a0 as n,a1 as s,a2 as c,a4 as o}from"./framework-10e089e2.js";const t={},r=n("h3",{id:"下载并安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载并安装","aria-hidden":"true"},"#"),s(" 下载并安装")],-1),p={href:"https://docs.docker.com/engine/install/centos",target:"_blank",rel:"noopener noreferrer"},u=o(`<ol><li><p>如之前已安装过先删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
  docker-client <span class="token punctuation">\\</span>
  docker-client-latest <span class="token punctuation">\\</span>
  docker-common <span class="token punctuation">\\</span>
  docker-latest <span class="token punctuation">\\</span>
  docker-latest-logrotate <span class="token punctuation">\\</span>
  docker-logrotate <span class="token punctuation">\\</span>
  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加docker yum源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
  --add-repo <span class="token punctuation">\\</span>
  https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="配置docker加速器" tabindex="-1"><a class="header-anchor" href="#配置docker加速器" aria-hidden="true">#</a> 配置docker加速器</h3><p>编辑 <code>/etc/docker/daemon.json</code>，文件不存在则新建</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;https://m2sku7ir.mirror.aliyuncs.com&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果docker已启动，需要重新加载配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置开机启动" tabindex="-1"><a class="header-anchor" href="#设置开机启动" aria-hidden="true">#</a> 设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="警告处理" tabindex="-1"><a class="header-anchor" href="#警告处理" aria-hidden="true">#</a> 警告处理</h3><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>WARNING: IPv4 forwarding is disabled
WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysctl.conf
<span class="token operator">==</span><span class="token operator">=</span>
<span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>
net.bridge.bridge-nf-call-iptables <span class="token operator">=</span> <span class="token number">1</span>
net.bridge.bridge-nf-call-ip6tables <span class="token operator">=</span> <span class="token number">1</span>
<span class="token operator">==</span><span class="token operator">=</span>
systemctl restart network
<span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(m,b){const e=i("ExternalLinkIcon");return l(),d("div",null,[r,n("p",null,[s("可参照官网步骤 "),n("a",p,[s("查看"),c(e)])]),u])}const h=a(t,[["render",v],["__file","docker安装.html.vue"]]);export{h as default};
