import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,e as l,d as a,b as o,r as p,o as d}from"./app-niU14jXG.js";const c={},r={href:"https://www.mongodb.com/docs/manual/installation/",target:"_blank",rel:"noopener noreferrer"};function u(m,n){const e=p("ExternalLinkIcon");return d(),i("div",null,[n[2]||(n[2]=s("h3",{id:"下载并安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下载并安装"},[s("span",null,"下载并安装")])],-1)),s("p",null,[n[1]||(n[1]=a("可参照官网步骤 ",-1)),s("a",r,[n[0]||(n[0]=a("查看",-1)),o(e)])]),n[3]||(n[3]=l(`<ol><li><p>添加yum源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mongodb-org-8.0<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>MongoDB Repository
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://repo.mongodb.org/yum/redhat/9/mongodb-org/8.0/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://pgp.mongodb.com/server-8.0.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装server</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mongodb-org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>安装完成后默认会使用一下目录：</p><ul><li><p><code>/var/lib/mongo</code> data</p></li><li><p><code>/var/log/mongodb</code> log</p></li></ul><p>如果以上目录缺少读写权限，需授权</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mongod:mongod <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动server-状态检查" tabindex="-1"><a class="header-anchor" href="#启动server-状态检查"><span>启动server &amp; 状态检查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
<span class="token function">sudo</span> systemctl start mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 检查运行情况</span>
<span class="token function">sudo</span> systemctl status mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开启自动启动</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 停止服务</span>
<span class="token function">sudo</span> systemctl stop mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 重启服务</span>
<span class="token function">sudo</span> systemctl stop mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>安装过后在 <code>/etc/mongod.conf</code>会生成该文件</p><p>mongodb 默认是单模式且没有密码防护，新装服务需要配置以避免被人随意访问</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># mongod.conf</span>

<span class="token comment"># for documentation of all options, see:</span>
<span class="token comment">#   http://docs.mongodb.org/manual/reference/configuration-options/</span>

<span class="token comment"># where to write logging data.</span>
<span class="token key atrule">systemLog</span><span class="token punctuation">:</span>
  <span class="token key atrule">destination</span><span class="token punctuation">:</span> file
  <span class="token key atrule">logAppend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/log/mongodb/mongod.log

<span class="token comment"># Where and how to store data.</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span>
  <span class="token key atrule">dbPath</span><span class="token punctuation">:</span> /var/lib/mongo

<span class="token comment"># how the process runs</span>
<span class="token key atrule">processManagement</span><span class="token punctuation">:</span>
  <span class="token key atrule">timeZoneInfo</span><span class="token punctuation">:</span> /usr/share/zoneinfo

<span class="token comment"># network interfaces</span>
<span class="token key atrule">net</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">27017</span>
  <span class="token key atrule">bindIpAll</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.</span>


<span class="token key atrule">security</span><span class="token punctuation">:</span>
  <span class="token key atrule">keyFile</span><span class="token punctuation">:</span> /var/lib/mongo/db.key
  <span class="token key atrule">authorization</span><span class="token punctuation">:</span> <span class="token string">&quot;enabled&quot;</span>

<span class="token comment">#operationProfiling:</span>

<span class="token comment">#replication:</span>
<span class="token key atrule">replication</span><span class="token punctuation">:</span>
  <span class="token key atrule">replSetName</span><span class="token punctuation">:</span> <span class="token string">&quot;rs0&quot;</span>

<span class="token comment">#sharding:</span>

<span class="token comment">## Enterprise-Only Options</span>

<span class="token comment">#auditLog:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>bindIpAll: true</code> 允许任意ip访问</p><p><code>security.authorization: &quot;enabled&quot;</code> 开启权限访问</p><p>连接 mongosh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mongosh
-----
use admin<span class="token punctuation">;</span>

<span class="token comment"># 创建用户 &amp; 授权</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>
   user: <span class="token string">&quot;用户名&quot;</span>,
   pwd: <span class="token string">&quot;密码&quot;</span>,
   roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;readWrite&quot;</span>, db: <span class="token string">&quot;数据库名&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># 获取用户信息</span>
db.getUser<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># 修改密码</span>
db.changeUserPassword<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>, <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 修改用户密码和信息</span>
db.runCommand<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        updateUser:<span class="token string">&quot;username&quot;</span>,
        pwd:<span class="token string">&quot;xxx&quot;</span>,
        customData:<span class="token punctuation">{</span>title:<span class="token string">&quot;xxx&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 删除用户</span>
db.dropUser<span class="token punctuation">(</span><span class="token string">&#39;user001&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>user字段，为新用户的名字； <br> pwd字段，用户的密码； <br> cusomData字段，为任意内容，例如可以为用户全名介绍； <br> roles字段，指定用户的角色，可以用一个空数组给新用户设定空角色。在roles字段,可以指定内置角色和用户定义的角色。 <br> 超级用户的role有两种，userAdmin或者userAdminAnyDatabase(比前一种多加了对所有数据库的访问,仅仅是访问而已)。 <br> db是指定数据库的名字，admin是管理数据库。 <br> 不能用admin数据库中的用户登录其他数据库。注：只能查看当前数据库中的用户，哪怕当前数据库admin数据库，也只能查看admin数据库中创建的用户。</p></blockquote><p>权限角色列表</p><blockquote><ol><li>数据库用户角色：read、readWrite；</li><li>数据库管理角色：dbAdmin、dbOwner、userAdmin;</li><li>集群管理角色：clusterAdmin、clusterManager、4. clusterMonitor、hostManage；</li><li>备份恢复角色：backup、restore；</li><li>所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase</li><li>超级用户角色：root</li><li>内部角色：__system</li></ol></blockquote><p>具体描述如下</p><blockquote><ol><li>Read：允许用户读取指定数据库</li><li>readWrite：允许用户读写指定数据库</li><li>dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile</li><li>userAdmin：允许用户向system.users集合写入，可以在指定数据库里创建、删除和管理用户</li><li>clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。</li><li>readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限</li><li>readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限</li><li>userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限</li><li>dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。</li><li>root：只在admin数据库中可用。超级账号，超级权限</li></ol></blockquote><h3 id="复制集" tabindex="-1"><a class="header-anchor" href="#复制集"><span>复制集</span></a></h3><p>保证数据在生产部署时的冗余和可靠性，通过在不同的机器上保存副本来保证数据的不会因为单点损坏而丢失。能够随时应对数据丢失、机器损坏带来的风险。</p><ol><li><p>生成访问时使用的key</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>openssl rand <span class="token parameter variable">-base64</span> <span class="token number">128</span> <span class="token operator">&gt;</span> /var/lib/mongo/db.key <span class="token operator">&amp;</span>
<span class="token function">chmod</span> <span class="token number">400</span> /var/lib/mongo/db.key <span class="token operator">&amp;</span>
<span class="token function">chown</span> <span class="token number">999</span>:999 /data/mongodb.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>脚本初始化副本(复制集)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>const isInited <span class="token operator">=</span> rs.status<span class="token punctuation">(</span><span class="token punctuation">)</span>.ok <span class="token operator">==</span> <span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isInited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rs.initiate<span class="token punctuation">(</span><span class="token punctuation">{</span>
      _id: <span class="token string">&quot;rs0&quot;</span>,
      members: <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> _id: <span class="token number">0</span>, host: <span class="token string">&quot;127.0.0.1:27017&quot;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="添加其它复制集" tabindex="-1"><a class="header-anchor" href="#添加其它复制集"><span>添加其它复制集</span></a></h1><p>rs.add(&quot;ubuntu:27018&quot;);</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
也可以通过配置设置 \`replication.replSetName: &quot;rs0&quot;\`

当主节点失活后，其它副节点选举一个作为新的主节点</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30))])}const k=t(c,[["render",u],["__file","mongdb.html.vue"]]),g=JSON.parse('{"path":"/guide/db/mongdb.html","title":"mongo数据安装与授权","lang":"zh-CN","frontmatter":{"title":"mongo数据安装与授权","head":[["meta",{"name":"referrer","content":"no-referrer"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress-doc/guide/db/mongdb.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"mongo数据安装与授权"}],["meta",{"property":"og:description","content":"下载并安装 可参照官网步骤 查看 添加yum源 安装server 安装完成后默认会使用一下目录： /var/lib/mongo data /var/log/mongodb log 如果以上目录缺少读写权限，需授权 启动server & 状态检查 配置 安装过后在 /etc/mongod.conf会生成该文件 mongodb 默认是单模式且没有密码防护，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-11-19T03:46:32.000Z"}],["meta",{"property":"article:author","content":"bincooo"}],["meta",{"property":"article:modified_time","content":"2025-11-19T03:46:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mongo数据安装与授权\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-11-19T03:46:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"bincooo\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]],"description":"下载并安装 可参照官网步骤 查看 添加yum源 安装server 安装完成后默认会使用一下目录： /var/lib/mongo data /var/log/mongodb log 如果以上目录缺少读写权限，需授权 启动server & 状态检查 配置 安装过后在 /etc/mongod.conf会生成该文件 mongodb 默认是单模式且没有密码防护，..."},"headers":[{"level":3,"title":"下载并安装","slug":"下载并安装","link":"#下载并安装","children":[]},{"level":3,"title":"启动server & 状态检查","slug":"启动server-状态检查","link":"#启动server-状态检查","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"复制集","slug":"复制集","link":"#复制集","children":[]}],"git":{"createdTime":1763523992000,"updatedTime":1763523992000,"contributors":[{"name":"折戟沉沙、丿","email":"36452456+bincooo@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.49,"words":1046},"filePathRelative":"guide/db/mongdb.md","localizedDate":"2025年11月19日","autoDesc":true}');export{k as comp,g as data};
