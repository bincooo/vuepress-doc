const e=JSON.parse('{"key":"v-501b7f2d","path":"/guide/markdown/cloudflared%E5%85%8D%E5%AE%9E%E5%90%8D%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D.html","title":"常见证书说明","lang":"zh-CN","frontmatter":{"title":"常见证书说明","head":[["meta",{"name":"referrer","content":"no-referrer"}],["meta",{"property":"og:url","content":"https://www.icu-web.tk/vuepress-doc/guide/markdown/cloudflared%E5%85%8D%E5%AE%9E%E5%90%8D%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"常见证书说明"}],["meta",{"property":"og:description","content":"cloudflared免实名给服务器使用域名 准备工作 域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买 服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的 cloudflare：创建一个cloudflare账号 登陆cloudflare，安装cloudflared客户端 登陆后在主页面的 Zero Trust : Access &gt; Tunnels 侧边栏进入 然后点击 Create a Tunnel 创建一个Tunnel条目，创建保存后会进入信息页，里面提供多个操作系统的内网穿透安装指令： 你需要根据你的系统选择指令，进入服务器执行。 显示 Installed successfully 即安装完成： 接着将域名添加到cloudflare 点击左上角的图标回到主页，点击 Websites &gt; Add a Site 添加域名：(记得选Free选项卡，不然是要收费的) 然后去你的域名服务商那里修改dns： 回到 Zero Trust : Access &gt; Tunnels 选择你刚刚创建的 Tunnel 右侧三个点点击 Configure &gt; Public Hostname 添加你的域名访问地址以及你的服务器内部web服务地址 以上图为例，那么我的公网域名地址为：https://tencent.1micro.top。 是否为https取决于你在添加域名时的配置。 至此配置完成。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T01:05:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T01:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见证书说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-21T01:05:04.000Z\\",\\"author\\":[]}"]],"description":"cloudflared免实名给服务器使用域名 准备工作 域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买 服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的 cloudflare：创建一个cloudflare账号 登陆cloudflare，安装cloudflared客户端 登陆后在主页面的 Zero Trust : Access &gt; Tunnels 侧边栏进入 然后点击 Create a Tunnel 创建一个Tunnel条目，创建保存后会进入信息页，里面提供多个操作系统的内网穿透安装指令： 你需要根据你的系统选择指令，进入服务器执行。 显示 Installed successfully 即安装完成： 接着将域名添加到cloudflare 点击左上角的图标回到主页，点击 Websites &gt; Add a Site 添加域名：(记得选Free选项卡，不然是要收费的) 然后去你的域名服务商那里修改dns： 回到 Zero Trust : Access &gt; Tunnels 选择你刚刚创建的 Tunnel 右侧三个点点击 Configure &gt; Public Hostname 添加你的域名访问地址以及你的服务器内部web服务地址 以上图为例，那么我的公网域名地址为：https://tencent.1micro.top。 是否为https取决于你在添加域名时的配置。 至此配置完成。"},"headers":[{"level":3,"title":"cloudflared免实名给服务器使用域名","slug":"cloudflared免实名给服务器使用域名","link":"#cloudflared免实名给服务器使用域名","children":[]}],"git":{"createdTime":1684631104000,"updatedTime":1684631104000,"contributors":[{"name":"bincooo","email":"admin@bincooodeiMac.local","commits":1}]},"readingTime":{"minutes":1.43,"words":430},"filePathRelative":"guide/markdown/cloudflared免实名使用域名.md","localizedDate":"2023年5月21日","excerpt":"<h3> cloudflared免实名给服务器使用域名</h3>\\n<ol>\\n<li>\\n<p>准备工作</p>\\n<blockquote>\\n<p>域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买</p>\\n<p>服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的</p>\\n<p>cloudflare：创建一个cloudflare账号</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>登陆cloudflare，安装cloudflared客户端</p>\\n<p>登陆后在主页面的 <code>Zero Trust </code> :  <code>Access</code> &gt; <code>Tunnels</code> 侧边栏进入</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/46d2de0772e8b58dbb1b2d57d6b696cc97e1944b.png\\" style=\\"zoom:50%;\\">\\n<p>然后点击 <code>Create a Tunnel</code> 创建一个Tunnel条目，创建保存后会进入信息页，里面提供多个操作系统的内网穿透安装指令：</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/88c0c55f0f0d18af04495a46a65c2002a5561fd0.png\\" style=\\"zoom:50%;\\">\\n<p>你需要根据你的系统选择指令，进入服务器执行。</p>\\n<p>显示 <code>Installed successfully</code> 即安装完成：</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/e1c168087c912cdc7893200ee4e4481ce2d7d954.png\\" style=\\"zoom:50%;\\">\\n</li>\\n<li>\\n<p>接着将域名添加到cloudflare</p>\\n<p>点击左上角的图标回到主页，点击 <code>Websites</code> &gt; <code>Add a Site</code> 添加域名：(记得选Free选项卡，不然是要收费的)</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/707a3e489ae291dd048ed92ea68e95f971b5cd05.png\\" style=\\"zoom:50%;\\">\\n<p>然后去你的域名服务商那里修改dns：</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/72ab0f1b0418e817258f548aff9369afab394790.png@1e_1c.webp\\" style=\\"zoom:50%;\\">\\n<img src=\\"https://article.biliimg.com/bfs/article/ad5cb2229b1158719aaebb6dd094a17824512ef6.png\\" style=\\"zoom:50%;\\">\\n</li>\\n<li>\\n<p>回到 <code>Zero Trust </code> :  <code>Access</code> &gt; <code>Tunnels</code></p>\\n<p>选择你刚刚创建的 <code>Tunnel</code> 右侧三个点点击 <code>Configure</code> &gt; <code>Public Hostname</code></p>\\n<p>添加你的域名访问地址以及你的服务器内部web服务地址</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/07217ee2a8f4f627b76bf397e5312848fa8702ee.png\\" style=\\"zoom:50%;\\">\\n<p>以上图为例，那么我的公网域名地址为：<a href=\\"https://tencent.1micro.top\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://tencent.1micro.top</a>。</p>\\n<p>是否为https取决于你在添加域名时的配置。</p>\\n<img src=\\"https://article.biliimg.com/bfs/article/207c773448c829c8ce79daf7a5eeaff44a5139f1.png\\" style=\\"zoom:50%;\\">\\n<p>至此配置完成。</p>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
