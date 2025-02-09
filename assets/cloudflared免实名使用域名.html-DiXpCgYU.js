import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as c,o as l}from"./app-B8je2evO.js";const r={};function a(i,e){return l(),t("div",null,e[0]||(e[0]=[c('<ol><li><p>准备工作</p><blockquote><p>域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买</p><p>服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的</p><p>cloudflare：创建一个cloudflare账号</p></blockquote></li><li><p>登陆cloudflare，安装cloudflared客户端</p><p>登陆后在主页面的 <code>Zero Trust </code> : <code>Access</code> &gt; <code>Tunnels</code> 侧边栏进入</p><img src="https://article.biliimg.com/bfs/article/46d2de0772e8b58dbb1b2d57d6b696cc97e1944b.png" style="zoom:50%;"><p>然后点击 <code>Create a Tunnel</code> 创建一个Tunnel条目，创建保存后会进入信息页，里面提供多个操作系统的内网穿透安装指令：</p><img src="https://article.biliimg.com/bfs/article/88c0c55f0f0d18af04495a46a65c2002a5561fd0.png" style="zoom:50%;"><p>你需要根据你的系统选择指令，进入服务器执行。</p><p>显示 <code>Installed successfully</code> 即安装完成：</p></li></ol><img src="https://article.biliimg.com/bfs/article/e1c168087c912cdc7893200ee4e4481ce2d7d954.png" style="zoom:50%;"><ol start="3"><li><p>接着将域名添加到cloudflare</p><p>点击左上角的图标回到主页，点击 <code>Websites</code> &gt; <code>Add a Site</code> 添加域名：(记得选Free选项卡，不然是要收费的)</p><img src="https://article.biliimg.com/bfs/article/707a3e489ae291dd048ed92ea68e95f971b5cd05.png" style="zoom:50%;"><p>然后去你的域名服务商那里修改dns：</p><img src="https://article.biliimg.com/bfs/article/72ab0f1b0418e817258f548aff9369afab394790.png@1e_1c.webp" style="zoom:50%;"><img src="https://article.biliimg.com/bfs/article/ad5cb2229b1158719aaebb6dd094a17824512ef6.png" style="zoom:50%;"></li><li><p>回到 <code>Zero Trust </code> : <code>Access</code> &gt; <code>Tunnels</code></p><p>选择你刚刚创建的 <code>Tunnel</code> 右侧三个点点击 <code>Configure</code> &gt; <code>Public Hostname</code></p><p>添加你的域名访问地址以及你的服务器内部web服务地址</p><img src="https://article.biliimg.com/bfs/article/07217ee2a8f4f627b76bf397e5312848fa8702ee.png" style="zoom:50%;"><p>以上图为例，那么我的公网域名地址为：https://tencent.1micro.top。</p><p>是否为https取决于你在添加域名时的配置。</p><img src="https://article.biliimg.com/bfs/article/207c773448c829c8ce79daf7a5eeaff44a5139f1.png" style="zoom:50%;"><p>至此配置完成。</p></li></ol>',3)]))}const s=o(r,[["render",a],["__file","cloudflared免实名使用域名.html.vue"]]),n=JSON.parse('{"path":"/guide/program/cloudflared%E5%85%8D%E5%AE%9E%E5%90%8D%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D.html","title":"cloudflared免实名使用域名","lang":"zh-CN","frontmatter":{"title":"cloudflared免实名使用域名","head":[["meta",{"name":"referrer","content":"no-referrer"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress-doc/guide/program/cloudflared%E5%85%8D%E5%AE%9E%E5%90%8D%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"cloudflared免实名使用域名"}],["meta",{"property":"og:description","content":"准备工作 域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买 服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的 cloudflare：创建一个cloudflare账号 登陆cloudflare，安装cloudflared客户端 登陆后在主页面的 Zero Trust : Access > Tunnels 侧边栏进..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-09T13:48:14.000Z"}],["meta",{"property":"article:author","content":"bincooo"}],["meta",{"property":"article:modified_time","content":"2025-02-09T13:48:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cloudflared免实名使用域名\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-09T13:48:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"bincooo\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]],"description":"准备工作 域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买 服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的 cloudflare：创建一个cloudflare账号 登陆cloudflare，安装cloudflared客户端 登陆后在主页面的 Zero Trust : Access > Tunnels 侧边栏进..."},"headers":[],"git":{"createdTime":1739108894000,"updatedTime":1739108894000,"contributors":[{"name":"bincooo","email":"bincooo@bincooos-iMac.local","commits":1}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"guide/program/cloudflared免实名使用域名.md","localizedDate":"2025年2月9日","autoDesc":true}');export{s as comp,n as data};
