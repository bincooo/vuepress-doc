import{_ as a,Z as n,$ as s,a4 as e}from"./framework-d76c4486.js";const i={},l=e(`<h4 id="_1-修改主机名" tabindex="-1"><a class="header-anchor" href="#_1-修改主机名" aria-hidden="true">#</a> 1.修改主机名</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.72.128  bingco.com
vim /etc/sysconfig/network
====
HOSTNAME=bingco.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置yum源" tabindex="-1"><a class="header-anchor" href="#_2-配置yum源" aria-hidden="true">#</a> 2.配置YUM源</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mount</span> /dev/cdrom /mnt/server
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> binutils-* <span class="token punctuation">\\</span>
compat-libstdc-++-33-* <span class="token punctuation">\\</span>
elfutils-libelf-* <span class="token punctuation">\\</span>
elfutils-libelf-devel-* <span class="token punctuation">\\</span>
gcc-* <span class="token punctuation">\\</span>
gcc-c++-* <span class="token punctuation">\\</span>
glibc-* <span class="token punctuation">\\</span>
glibc-common-* <span class="token punctuation">\\</span>
glibc-devel-* <span class="token punctuation">\\</span>
glibc-headers-* <span class="token punctuation">\\</span>
ksh-* <span class="token punctuation">\\</span>
libaio-* <span class="token punctuation">\\</span>
libgcc-* <span class="token punctuation">\\</span>
libstdc++-* <span class="token punctuation">\\</span>
make-* <span class="token punctuation">\\</span>
sysstat-* <span class="token punctuation">\\</span>
unixODBC-* <span class="token punctuation">\\</span>
unixODBC-devel-* <span class="token punctuation">\\</span>
compat-libcap1-* <span class="token punctuation">\\</span>
libXp-* <span class="token punctuation">\\</span>
libXt-* <span class="token punctuation">\\</span>
libXtst-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-配置存储盘" tabindex="-1"><a class="header-anchor" href="#_3-配置存储盘" aria-hidden="true">#</a> 3.配置存储盘</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkfs.ext4 /dev/sdb
<span class="token function">mkdir</span> /oradata
<span class="token function">mount</span> /dev/sdb /oradata
<span class="token function">chown</span> oracle:oinstall /oradata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-创建用户和组" tabindex="-1"><a class="header-anchor" href="#_4-创建用户和组" aria-hidden="true">#</a> 4.创建用户和组</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/sbin/groupadd oinstall
/usr/sbin/groupadd dba
/usr/sbin/useradd <span class="token parameter variable">-g</span> oinstall <span class="token parameter variable">-G</span> dba oracle
<span class="token builtin class-name">echo</span> oracle <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-设置oracle用户环境变量" tabindex="-1"><a class="header-anchor" href="#_5-设置oracle用户环境变量" aria-hidden="true">#</a> 5.设置oracle用户环境变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_BASE</span><span class="token operator">=</span>/u01/app/oracle
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span><span class="token variable">$ORACLE_BASE</span>/product/12.2/db
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ORACLE_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>fsdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-修改系统内核" tabindex="-1"><a class="header-anchor" href="#_6-修改系统内核" aria-hidden="true">#</a> 6.修改系统内核</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>fs.aio-max-nr = 1048576
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-修改用户参数" tabindex="-1"><a class="header-anchor" href="#_7-修改用户参数" aria-hidden="true">#</a> 7.修改用户参数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/security/limits.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>oracle    soft    nproc    2048
oracle    hard    nproc    16384
oracle    soft    nofile   1024
oracle    hard    nofile   65536
oracle    soft    stack    10240
oracle    hard    stack    32768
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-创建软件目录结构" tabindex="-1"><a class="header-anchor" href="#_8-创建软件目录结构" aria-hidden="true">#</a> 8.创建软件目录结构</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /u01/app
<span class="token function">chown</span> <span class="token parameter variable">-R</span> oracle:oinstall /u01/app
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">775</span> /u01/app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-增加交换空间" tabindex="-1"><a class="header-anchor" href="#_9-增加交换空间" aria-hidden="true">#</a> 9.增加交换空间</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swap/01 <span class="token assign-left variable">bs</span><span class="token operator">=</span>1024k <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1024</span>
<span class="token function">mkswap</span> /swap/01
<span class="token function">swapon</span> /swap/01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),d=[l];function c(r,t){return n(),s("div",null,d)}const p=a(i,[["render",c],["__file","oracle安装.html.vue"]]);export{p as default};
