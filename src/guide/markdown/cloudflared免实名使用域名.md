---
title: 常见证书说明
head:
  - - meta
    - name: referrer
      content: no-referrer
---

### cloudflared免实名给服务器使用域名

1. 准备工作

   > 域名：你需要拥有一个顶级域名，可在Freenom或者阿里、腾讯购买
   >
   > 服务器：一台没有实名的服务器，国内给服务器上域名是需要提交材料上报申请的
   >
   > cloudflare：创建一个cloudflare账号

2. 登陆cloudflare，安装cloudflared客户端

   登陆后在主页面的 `Zero Trust ` :  `Access` > `Tunnels` 侧边栏进入

   <img src="https://article.biliimg.com/bfs/article/46d2de0772e8b58dbb1b2d57d6b696cc97e1944b.png" style="zoom:50%;" />

   然后点击 `Create a Tunnel` 创建一个Tunnel条目，创建保存后会进入信息页，里面提供多个操作系统的内网穿透安装指令：

   <img src="https://article.biliimg.com/bfs/article/88c0c55f0f0d18af04495a46a65c2002a5561fd0.png" style="zoom:50%;" />

   你需要根据你的系统选择指令，进入服务器执行。


   显示 `Installed successfully` 即安装完成：

   <img src="https://article.biliimg.com/bfs/article/e1c168087c912cdc7893200ee4e4481ce2d7d954.png" style="zoom:50%;" />

   

3. 接着将域名添加到cloudflare

   点击左上角的图标回到主页，点击 `Websites` > `Add a Site` 添加域名：(记得选Free选项卡，不然是要收费的)

   <img src="https://article.biliimg.com/bfs/article/707a3e489ae291dd048ed92ea68e95f971b5cd05.png" style="zoom:50%;" />

   然后去你的域名服务商那里修改dns：

   <img src="https://article.biliimg.com/bfs/article/72ab0f1b0418e817258f548aff9369afab394790.png@1e_1c.webp" style="zoom:50%;" />

   <img src="https://article.biliimg.com/bfs/article/ad5cb2229b1158719aaebb6dd094a17824512ef6.png" style="zoom:50%;" />

4. 回到 `Zero Trust ` :  `Access` > `Tunnels` 

   选择你刚刚创建的 `Tunnel` 右侧三个点点击 `Configure` > `Public Hostname`

   添加你的域名访问地址以及你的服务器内部web服务地址

   <img src="https://article.biliimg.com/bfs/article/07217ee2a8f4f627b76bf397e5312848fa8702ee.png" style="zoom:50%;" />

   

   以上图为例，那么我的公网域名地址为：https://tencent.1micro.top。

   是否为https取决于你在添加域名时的配置。

   <img src="https://article.biliimg.com/bfs/article/207c773448c829c8ce79daf7a5eeaff44a5139f1.png" style="zoom:50%;" />

   
   至此配置完成。
