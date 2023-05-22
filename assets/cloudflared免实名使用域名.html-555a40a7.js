import{_ as l,E as a,Z as s,$ as d,a0 as e,a1 as c,a2 as i,a4 as o}from"./framework-10e089e2.js";const r={},n=o('<h3 id="cloudflared免实名给服务器使用域名" tabindex="-1"><a class="header-anchor" href="#cloudflared免实名给服务器使用域名" aria-hidden="true">#</a> cloudflared免实名给服务器使用域名</h3><ol><li><p>准备工作</p><blockquote><p>域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买</p><p>服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的</p><p>cloudflare：创建一个cloudflare账号</p></blockquote></li><li><p>登陆cloudflare，安装cloudflared客户端</p><p>登陆后在主页面的 <code>Zero Trust </code> : <code>Access</code> &gt; <code>Tunnels</code> 侧边栏进入</p><img src="https://article.biliimg.com/bfs/article/46d2de0772e8b58dbb1b2d57d6b696cc97e1944b.png" style="zoom:50%;"><p>然后点击 <code>Create a Tunnel</code> 创建一个Tunnel条目，创建保存后会进入信息页，里面提供多个操作系统的内网穿透安装指令：</p><img src="https://article.biliimg.com/bfs/article/88c0c55f0f0d18af04495a46a65c2002a5561fd0.png" style="zoom:50%;"><p>你需要根据你的系统选择指令，进入服务器执行。</p><p>显示 <code>Installed successfully</code> 即安装完成：</p></li></ol><img src="https://article.biliimg.com/bfs/article/e1c168087c912cdc7893200ee4e4481ce2d7d954.png" style="zoom:50%;">',3),p={start:"3"},f=e("li",null,[e("p",null,"接着将域名添加到cloudflare"),e("p",null,[c("点击左上角的图标回到主页，点击 "),e("code",null,"Websites"),c(" > "),e("code",null,"Add a Site"),c(" 添加域名：(记得选Free选项卡，不然是要收费的)")]),e("img",{src:"https://article.biliimg.com/bfs/article/707a3e489ae291dd048ed92ea68e95f971b5cd05.png",style:{zoom:"50%"}}),e("p",null,"然后去你的域名服务商那里修改dns："),e("img",{src:"https://article.biliimg.com/bfs/article/72ab0f1b0418e817258f548aff9369afab394790.png@1e_1c.webp",style:{zoom:"50%"}}),e("img",{src:"https://article.biliimg.com/bfs/article/ad5cb2229b1158719aaebb6dd094a17824512ef6.png",style:{zoom:"50%"}})],-1),m=o('<p>回到 <code>Zero Trust </code> : <code>Access</code> &gt; <code>Tunnels</code></p><p>选择你刚刚创建的 <code>Tunnel</code> 右侧三个点点击 <code>Configure</code> &gt; <code>Public Hostname</code></p><p>添加你的域名访问地址以及你的服务器内部web服务地址</p><img src="https://article.biliimg.com/bfs/article/07217ee2a8f4f627b76bf397e5312848fa8702ee.png" style="zoom:50%;">',4),b={href:"https://tencent.1micro.top",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"是否为https取决于你在添加域名时的配置。",-1),_=e("img",{src:"https://article.biliimg.com/bfs/article/207c773448c829c8ce79daf7a5eeaff44a5139f1.png",style:{zoom:"50%"}},null,-1),g=e("p",null,"至此配置完成。",-1);function h(y,z){const t=a("ExternalLinkIcon");return s(),d("div",null,[n,e("ol",p,[f,e("li",null,[m,e("p",null,[c("以上图为例，那么我的公网域名地址为："),e("a",b,[c("https://tencent.1micro.top"),i(t)]),c("。")]),u,_,g])])])}const k=l(r,[["render",h],["__file","cloudflared免实名使用域名.html.vue"]]);export{k as default};
