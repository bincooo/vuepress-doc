import{_ as t,E as i,Z as l,$ as d,a0 as n,a3 as s,a1 as a,a4 as r}from"./framework-e0d053a9.js";const o={},c=r(`<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><ul><li><ul><li><a href="#1_Nginx_1">1. 什么是Nginx？</a></li><li><a href="#2_Nginx_6">2. 为什么要用Nginx？</a></li><li><a href="#3_Nginx_16">3. 为什么Nginx性能这么高？</a></li><li><a href="#4_Nginx_19">4. Nginx怎么处理请求的？</a></li><li><a href="#5__33">5. 什么是正向代理和反向代理？</a></li><li><a href="#6__38">6. 使用“反向代理服务器的优点是什么?</a></li><li><a href="#7_Nginx_42">7. Nginx的优缺点？</a></li><li><a href="#8_Nginx_52">8. Nginx应用场景？</a></li><li><a href="#9_Nginx_60">9. Nginx目录结构有哪些？</a></li><li><a href="#10_Nginxnginxconf_98">10. Nginx配置文件nginx.conf有哪些属性模块?</a></li><li><a href="#11_Nginx_123">11. Nginx静态资源?</a></li><li><a href="#12_Nginx_126">12. 如何用Nginx解决前端跨域问题？</a></li><li><a href="#13_Nginx_129">13. Nginx虚拟主机怎么配置?</a></li><li><a href="#14_location_179">14. location的作用是什么？</a></li><li><a href="#15__224">15. 限流怎么做的？</a></li><li><a href="#16__295">16. 漏桶流算法和令牌桶算法知道？</a></li><li><a href="#17__311">17. 为什么要做动静分离？</a></li><li><a href="#18_Nginx_322">18. Nginx怎么做的动静分离？</a></li><li><a href="#19_Nginx_349">19. Nginx负载均衡的算法怎么实现的?策略有哪些?</a></li><li><a href="#20_Nginx_410">20. Nginx配置高可用性怎么配置？</a></li><li><a href="#21_NginxIP_432">21. Nginx怎么判断别IP不可访问？</a></li><li><a href="#22__440">22. 怎么限制浏览器访问？</a></li><li><a href="#23_Rewrite_448">23. Rewrite全局变量是什么？</a></li></ul></li></ul><h2 id="_1-什么是nginx" tabindex="-1"><a class="header-anchor" href="#_1-什么是nginx" aria-hidden="true">#</a> 1. 什么是Nginx？</h2><ul><li>Nginx是一个 轻量级/高性能的反向代理Web服务器，他实现非常高效的反向代理、负载平衡，他<br> 可以处理2-3万并发连接数，官方监测能支持5万并发，现在中国使用nginx网站用户有很多，例<br> 如：新浪、网易、 腾讯等。</li></ul><h2 id="_2-为什么要用nginx" tabindex="-1"><a class="header-anchor" href="#_2-为什么要用nginx" aria-hidden="true">#</a> 2. 为什么要用Nginx？</h2><ul><li>跨平台、配置简单、方向代理、高并发连接：处理2-3万并发连接数，官方监测能支持5万并发，<br> 内存消耗小：开启10个nginx才占150M内存 ，nginx处理静态文件好，耗费内存少，</li><li>而且Nginx内置的健康检查功能：如果有一个服务器宕机，会做一个健康检查，再发送的请求就不<br> 会发送到宕机的服务器了。重新将请求提交到其他的节点上。</li><li>使用Nginx的话还能： <ol><li>节省宽带：支持GZIP压缩，可以添加浏览器本地缓存</li><li>稳定性高：宕机的概率非常小</li><li>接收用户请求是异步的</li></ol></li></ul><h2 id="_3-为什么nginx性能这么高" tabindex="-1"><a class="header-anchor" href="#_3-为什么nginx性能这么高" aria-hidden="true">#</a> 3. 为什么Nginx性能这么高？</h2><ul><li>因为他的事件处理机制：异步非阻塞事件处理机制：运用了epoll模型，提供了一个队列，排队解决</li></ul><h2 id="_4-nginx怎么处理请求的" tabindex="-1"><a class="header-anchor" href="#_4-nginx怎么处理请求的" aria-hidden="true">#</a> 4. Nginx怎么处理请求的？</h2><ul><li>nginx接收一个请求后，首先由listen和server_name指令匹配server模块，再匹配server模块里的<br> location，location就是实际地址</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span> <span class="token comment"># 第一个Server区块开始，表示一个独立的虚拟主机站点</span>
	listen 80； <span class="token comment"># 提供服务的端口，默认80</span>
	server_name localhost； <span class="token comment"># 提供服务的域名主机名</span>
	location / <span class="token punctuation">{</span> <span class="token comment"># 第一个location区块开始</span>
		root html； <span class="token comment"># 站点的根目录，相当于Nginx的安装目录</span>
		index index.html index.htm； <span class="token comment"># 默认的首页文件，多个用空格分开</span>
	<span class="token punctuation">}</span> <span class="token comment"># 第一个location区块结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-什么是正向代理和反向代理" tabindex="-1"><a class="header-anchor" href="#_5-什么是正向代理和反向代理" aria-hidden="true">#</a> 5. 什么是正向代理和反向代理？</h2><ol><li>正向代理就是一个人发送一个请求直接就到达了目标的服务器</li><li>反方代理就是请求统一被Nginx接收，nginx反向代理服务器接收到之后，按照一定的规 则分发给<br> 了后端的业务处理服务器进行处理了</li></ol><h2 id="_6-使用-反向代理服务器的优点是什么" tabindex="-1"><a class="header-anchor" href="#_6-使用-反向代理服务器的优点是什么" aria-hidden="true">#</a> 6. 使用“反向代理服务器的优点是什么?</h2><ul><li>反向代理服务器可以隐藏源服务器的存在和特征。它充当互联网云和web服务器之间的中间层。这<br> 对于安全方面来说是很好的，特别是当您使用web托管服务时。</li></ul><h2 id="_7-nginx的优缺点" tabindex="-1"><a class="header-anchor" href="#_7-nginx的优缺点" aria-hidden="true">#</a> 7. Nginx的优缺点？</h2><ul><li>优点：</li></ul><ol><li>占内存小，可实现高并发连接，处理响应快</li><li>可实现http服务器、虚拟主机、方向代理、负载均衡</li><li>Nginx配置简单</li><li>可以不暴露正式的服务器IP地址</li></ol><ul><li>缺点： 动态处理差：nginx处理静态文件好,耗费内存少，但是处理动态页面则很鸡肋，现在一般<br> 前端用nginx作为反向代理抗住压力，</li></ul><h2 id="_8-nginx应用场景" tabindex="-1"><a class="header-anchor" href="#_8-nginx应用场景" aria-hidden="true">#</a> 8. Nginx应用场景？</h2><ol><li>http服务器。Nginx是一个http服务可以独立提供http服务。可以做网页静态服务器。</li><li>虚拟主机。可以实现在一台服务器虚拟出多个网站，例如个人网站使用的虚拟机。</li><li>反向代理，负载均衡。当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要<br> 用多台服务器集群可以使用nginx做反向代理。并且多台服务器可以平均分担负载，不会应为某台<br> 服务器负载高宕机而某台服务器闲置的情况。</li><li>nginz 中也可以配置安全管理、比如可以使用Nginx搭建API接口网关,对每个接口服务进行拦截。</li></ol><h2 id="_9-nginx目录结构有哪些" tabindex="-1"><a class="header-anchor" href="#_9-nginx目录结构有哪些" aria-hidden="true">#</a> 9. Nginx目录结构有哪些？</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tree /usr/local/nginx</span>
/usr/local/nginx
├── client_body_temp
├── conf <span class="token comment"># Nginx所有配置文件的目录</span>
│ ├── fastcgi.conf <span class="token comment"># fastcgi相关参数的配置文件</span>
│ ├── fastcgi.conf.default <span class="token comment"># fastcgi.conf的原始备份文件</span>
│ ├── fastcgi_params <span class="token comment"># fastcgi的参数文件</span>
│ ├── fastcgi_params.default
│ ├── koi<span class="token punctuation">-</span>utf
│ ├── koi<span class="token punctuation">-</span>win
│ ├── mime.types <span class="token comment"># 媒体类型</span>
│ ├── mime.types.default
│ ├── nginx.conf <span class="token comment"># Nginx主配置文件</span>
│ ├── nginx.conf.default
│ ├── scgi_params <span class="token comment"># scgi相关参数文件</span>
│ ├── scgi_params.default
│ ├── uwsgi_params <span class="token comment"># uwsgi相关参数文件</span>
│ ├── uwsgi_params.default
│ └── win<span class="token punctuation">-</span>utf
├── fastcgi_temp <span class="token comment"># fastcgi临时数据目录</span>
├── html <span class="token comment"># Nginx默认站点目录</span>
│ ├── 50x.html <span class="token comment"># 错误页面优雅替代显示文件，例如当出现502错误时会调</span>
用此页面
│ └── index.html <span class="token comment"># 默认的首页文件</span>
├── logs <span class="token comment"># Nginx日志目录</span>
│ ├── access.log <span class="token comment"># 访问日志文件</span>
│ ├── error.log <span class="token comment"># 错误日志文件</span>
│ └── nginx.pid <span class="token comment"># pid文件，Nginx进程启动后，会把所有进程的ID号写</span>
到此文件
├── proxy_temp <span class="token comment"># 临时目录</span>
├── sbin <span class="token comment"># Nginx命令目录</span>
│ └── nginx <span class="token comment"># Nginx的启动命令</span>
├── scgi_temp <span class="token comment"># 临时目录</span>
└── uwsgi_temp <span class="token comment"># 临时目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-nginx配置文件nginx-conf有哪些属性模块" tabindex="-1"><a class="header-anchor" href="#_10-nginx配置文件nginx-conf有哪些属性模块" aria-hidden="true">#</a> 10. Nginx配置文件nginx.conf有哪些属性模块?</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>worker_processes 1； <span class="token comment"># worker进程的数量</span>
events <span class="token punctuation">{</span> <span class="token comment"># 事件区块开始</span>
	worker_connections 1024； <span class="token comment"># 每个worker进程支持的最大连接数</span>
<span class="token punctuation">}</span> <span class="token comment"># 事件区块结束</span>
http <span class="token punctuation">{</span> <span class="token comment"># HTTP区块开始</span>
	include mime.types； <span class="token comment"># Nginx支持的媒体类型库文件</span>
	default_type application/octet<span class="token punctuation">-</span>stream； <span class="token comment"># 默认的媒体类型</span>
	sendfile on； <span class="token comment"># 开启高效传输模式</span>
	keepalive_timeout 65； <span class="token comment"># 连接超时</span>
	server <span class="token punctuation">{</span> <span class="token comment"># 第一个Server区块开始，表示一个独立的虚拟主机站点</span>
		listen 80； <span class="token comment"># 提供服务的端口，默认80</span>
		server_name localhost； <span class="token comment"># 提供服务的域名主机名</span>
		location / <span class="token punctuation">{</span> <span class="token comment"># 第一个location区块开始</span>
			root html； <span class="token comment"># 站点的根目录，相当于Nginx的安装目录</span>
			index index.html index.htm； <span class="token comment"># 默认的首页文件，多个用空格分开</span>
		<span class="token punctuation">}</span> <span class="token comment"># 第一个location区块结果</span>
		error_page 500502503504 /50x.html； <span class="token comment"># 出现对应的http状态码时，使用50x.html回应客户</span>
		location = /50x.html <span class="token punctuation">{</span> <span class="token comment"># location区块开始，访问50x.html</span>
			root html； <span class="token comment"># 指定对应的站点目录为html</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-nginx静态资源" tabindex="-1"><a class="header-anchor" href="#_11-nginx静态资源" aria-hidden="true">#</a> 11. Nginx静态资源?</h2><ul><li>静态资源访问，就是存放在nginx的html页面，我们可以自己编写</li></ul><h2 id="_12-如何用nginx解决前端跨域问题" tabindex="-1"><a class="header-anchor" href="#_12-如何用nginx解决前端跨域问题" aria-hidden="true">#</a> 12. 如何用Nginx解决前端跨域问题？</h2><ul><li>使用Nginx转发请求。把跨域的接口写成调本域的接口，然后将这些接口转发到真正的请求地址。</li></ul><h2 id="_13-nginx虚拟主机怎么配置" tabindex="-1"><a class="header-anchor" href="#_13-nginx虚拟主机怎么配置" aria-hidden="true">#</a> 13. Nginx虚拟主机怎么配置?</h2><p>1、基于域名的虚拟主机，通过域名来区分虚拟主机——应用：外部网站<br> 2、基于端口的虚拟主机，通过端口来区分虚拟主机——应用：公司内部网站，外部网站的管理后台<br> 3、基于ip的虚拟主机。</p><p><strong>基于虚拟主机配置域名</strong></p><ul><li>需要建立/data/www /data/bbs目录，windows本地hosts添加虚拟机ip地址对应的域名解析；对<br> 应域名网站目录下新增index.html文件；</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#当客户端访问www.lijie.com,监听端口号为80,直接跳转到data/www目录下文件</span>
server <span class="token punctuation">{</span>
	listen 80;
	server_name www.lijie.com;
	location / <span class="token punctuation">{</span>
		root data/www;
		index index.html index.htm;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">#当客户端访问www.lijie.com,监听端口号为80,直接跳转到data/bbs目录下文件</span>
server <span class="token punctuation">{</span>
	listen 80;
	server_name bbs.lijie.com;
	location / <span class="token punctuation">{</span>
		root data/bbs;
		index index.html index.htm;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>基于端口的虚拟主机</strong></p><ul><li>使用端口来区分，浏览器使用域名或ip地址:端口号 访问</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#当客户端访问www.lijie.com,监听端口号为8080,直接跳转到data/www目录下文件</span>
server <span class="token punctuation">{</span>
	listen 8080;
	server_name 8080.lijie.com;
	location / <span class="token punctuation">{</span>
		root data/www;
		index index.html index.htm;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">#当客户端访问www.lijie.com,监听端口号为80直接跳转到真实ip服务器地址 127.0.0.1:8080</span>
server <span class="token punctuation">{</span>
	listen 80;
	server_name www.lijie.com;
	location / <span class="token punctuation">{</span>
		proxy_pass http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>8080;
		index index.html index.htm;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-location的作用是什么" tabindex="-1"><a class="header-anchor" href="#_14-location的作用是什么" aria-hidden="true">#</a> 14. location的作用是什么？</h2><ul><li>location指令的作用是根据用户请求的URI来执行不同的应用，也就是根据用户请求的网站URL进<br> 行匹配，匹配成功即进行相关的操作。</li></ul><p><strong>location的语法能说出来吗？</strong><br><code>注意：~ 代表自己输入的英文字母</code></p><table><thead><tr><th>匹配符</th><th>匹配规则</th><th>优先级</th></tr></thead><tbody><tr><td>=</td><td>精确匹配</td><td>1</td></tr><tr><td>^~</td><td>以某个字符串开头</td><td>2</td></tr><tr><td>~</td><td>区分大小写的正则匹配</td><td>3</td></tr><tr><td>~*</td><td>不区分大小写的正则匹配</td><td>4</td></tr><tr><td>!~</td><td>区分大小写不匹配的正则</td><td>5</td></tr><tr><td>!~*</td><td>不区分大小写不匹配的正则</td><td>6</td></tr><tr><td>/</td><td>通用匹配，任何请求都会匹配到</td><td>7</td></tr></tbody></table><p><strong>Location正则案例</strong></p><ul><li>示例：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#优先级1,精确匹配，根路径</span>
location =/ <span class="token punctuation">{</span>
	return 400;
<span class="token punctuation">}</span>

<span class="token comment">#优先级2,以某个字符串开头,以av开头的，优先匹配这里，区分大小写</span>
location ^~ /av <span class="token punctuation">{</span>
	root /data/av/;
<span class="token punctuation">}</span>

<span class="token comment">#优先级3，区分大小写的正则匹配，匹配/media*****路径</span>
location ~ /media <span class="token punctuation">{</span>
	alias /data/static/;
<span class="token punctuation">}</span>

<span class="token comment">#优先级4 ，不区分大小写的正则匹配，所有的****.jpg|gif|png 都走这里</span>
location ~* .<span class="token important">*\\.(jpg|gif|png|js|css)$</span> <span class="token punctuation">{</span>
	root /data/av/;
<span class="token punctuation">}</span>

<span class="token comment">#优先7，通用匹配</span>
location / <span class="token punctuation">{</span>
	return 403;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-限流怎么做的" tabindex="-1"><a class="header-anchor" href="#_15-限流怎么做的" aria-hidden="true">#</a> 15. 限流怎么做的？</h2><ul><li>Nginx限流就是限制用户请求速度，防止服务器受不了</li><li>限流有3种</li></ul><ol><li>正常限制访问频率（正常流量）</li><li>突发限制访问频率（突发流量）</li><li>限制并发连接数</li></ol><ul><li>Nginx的限流都是基于漏桶流算法，底下会说道什么是桶铜流</li></ul><p><strong>实现三种限流算法</strong><br><strong>1、正常限制访问频率（正常流量）：</strong></p><ul><li>限制一个用户发送的请求，我Nginx多久接收一个请求。</li><li>Nginx中使用ngx_http_limit_req_module模块来限制的访问频率，限制的原理实质是基于漏桶算<br> 法原理来实现的。在nginx.conf配置文件中可以使用limit_req_zone命令及limit_req命令限制单个<br> IP的请求处理频率。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#定义限流维度，一个用户一分钟一个请求进来，多余的全部漏掉</span>
limit_req_zone $binary_remote_addr zone=one<span class="token punctuation">:</span>10m rate=1r/m;
<span class="token comment">#绑定限流维度</span>
server<span class="token punctuation">{</span>
	location/seckill.html<span class="token punctuation">{</span>
		limit_req zone=zone;
		proxy_pass http<span class="token punctuation">:</span>//lj_seckill;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>1r/s代表1秒一个请求，1r/m一分钟接收一个请求， 如果Nginx这时还有别人的请求没有处理完，<br> Nginx就会拒绝处理该用户请求。</li></ul><p><strong>2、突发限制访问频率（突发流量）：</strong></p><ul><li>限制一个用户发送的请求，我Nginx多久接收一个。</li><li>上面的配置一定程度可以限制访问频率，但是也存在着一个问题：如果突发流量超出请求被拒绝处<br> 理，无法处理活动时候的突发流量，这时候应该如何进一步处理呢？Nginx提供burst参数结合<br> nodelay参数可以解决流量突发的问题，可以设置能处理的超过设置的请求数外能额外处理的请求<br> 数。我们可以将之前的例子添加burst参数以及nodelay参数：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#定义限流维度，一个用户一分钟一个请求进来，多余的全部漏掉</span>
limit_req_zone $binary_remote_addr zone=one<span class="token punctuation">:</span>10m rate=1r/m;
<span class="token comment">#绑定限流维度</span>
server<span class="token punctuation">{</span>
	location/seckill.html<span class="token punctuation">{</span>
		limit_req zone=zone burst=5 nodelay;
		proxy_pass http<span class="token punctuation">:</span>//lj_seckill;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>为什么就多了一个 burst=5 nodelay; 呢，多了这个可以代表Nginx对于一个用户的请求会立即处<br> 理前五个，多余的就慢慢来落，没有其他用户的请求我就处理你的，有其他的请求的话我Nginx就<br> 漏掉不接受你的请求</li></ul><p><strong>3、 限制并发连接数</strong></p><ul><li>Nginx中的ngx_http_limit_conn_module模块提供了限制并发连接数的功能，可以使用<br> limit_conn_zone指令以及limit_conn执行进行配置。接下来我们可以通过一个简单的例子来看<br> 下：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>http <span class="token punctuation">{</span>
	limit_conn_zone $binary_remote_addr zone=myip<span class="token punctuation">:</span>10m;
	limit_conn_zone $server_name zone=myServerName<span class="token punctuation">:</span>10m;
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	location / <span class="token punctuation">{</span>
		limit_conn myip 10;
		limit_conn myServerName 100;
		rewrite / http<span class="token punctuation">:</span>//www.lijie.net permanent;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面配置了单个IP同时并发连接数最多只能10个连接，并且设置了整个虚拟服务器同时最大并发<br> 数最多只能100个链接。当然，只有当请求的header被服务器处理后，虚拟服务器的连接数才会<br> 计数。刚才有提到过Nginx是基于漏桶算法原理实现的，实际上限流一般都是基于漏桶算法和令牌<br> 桶算法实现的。接下来我们来看看两个算法的介绍：</li></ul><h2 id="_16-漏桶流算法和令牌桶算法知道" tabindex="-1"><a class="header-anchor" href="#_16-漏桶流算法和令牌桶算法知道" aria-hidden="true">#</a> 16. 漏桶流算法和令牌桶算法知道？</h2><p><strong>漏桶算法</strong></p><ul><li>漏桶算法是网络世界中流量整形或速率限制时经常使用的一种算法，它的主要目的是控制数据注入<br> 到网络的速率，平滑网络上的突发流量。漏桶算法提供了一种机制，通过它，突发流量可以被整形<br> 以便为网络提供一个稳定的流量。也就是我们刚才所讲的情况。漏桶算法提供的机制实际上就是刚<br> 才的案例：<strong>突发流量会进入到一个漏桶，漏桶会按照我们定义的速率依次处理请求，如果水流过大<br> 也就是突发流量过大就会直接溢出，则多余的请求会被拒绝。所以漏桶算法能控制数据的传输速<br> 率。</strong></li></ul><p><strong>令牌桶算法</strong></p><ul><li>令牌桶算法是网络流量整形和速率限制中最常使用的一种算法。典型情况下，令牌桶算法用来控制<br> 发送到网络上的数据的数目，并允许突发数据的发送。Google开源项目Guava中的RateLimiter使<br> 用的就是令牌桶控制算法。<strong>令牌桶算法的机制如下：存在一个大小固定的令牌桶，会以恒定的速率<br> 源源不断产生令牌。如果令牌消耗速率小于生产令牌的速度，令牌就会一直产生直至装满整个令牌<br> 桶。</strong></li></ul><h2 id="_17-为什么要做动静分离" tabindex="-1"><a class="header-anchor" href="#_17-为什么要做动静分离" aria-hidden="true">#</a> 17. 为什么要做动静分离？</h2><ul><li>Nginx是当下最热的Web容器，网站优化的重要点在于静态化网站，网站静态化的关键点则是是动<br> 静分离，动静分离是让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开<br> 来，动静资源做好了拆分以后，我们则根据静态资源的特点将其做缓存操作。</li><li>让静态的资源只走静态资源服务器，动态的走动态的服务器</li><li>Nginx的静态处理能力很强，但是动态处理能力不足，因此，在企业中常用动静分离技术。</li><li>对于静态资源比如图片，js，css等文件，我们则在反向代理服务器nginx中进行缓存。这样浏览器<br> 在请求一个静态资源时，代理服务器nginx就可以直接处理，无需将请求转发给后端服务器<br> tomcat。 若用户请求的动态文件，比如servlet,jsp则转发给Tomcat服务器处理，从而实现动静分<br> 离。这也是反向代理服务器的一个重要的作用。</li></ul><h2 id="_18-nginx怎么做的动静分离" tabindex="-1"><a class="header-anchor" href="#_18-nginx怎么做的动静分离" aria-hidden="true">#</a> 18. Nginx怎么做的动静分离？</h2><ul><li>只需要指定路径对应的目录。location/可以使用正则表达式匹配。并指定对应的硬盘中的目录。<br> 如下：（操作都是在Linux上）</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>location /image/ <span class="token punctuation">{</span>
	root /usr/local/static/;
	autoindex on;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>创建目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /usr/local/static/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>进入目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/static/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>放一张照片上去#</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>重启 nginx</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>打开浏览器 输入 server_name/image/1.jpg 就可以访问该静态图片了</li></ol><h2 id="_19-nginx负载均衡的算法怎么实现的-策略有哪些" tabindex="-1"><a class="header-anchor" href="#_19-nginx负载均衡的算法怎么实现的-策略有哪些" aria-hidden="true">#</a> 19. Nginx负载均衡的算法怎么实现的?策略有哪些?</h2><ul><li>为了避免服务器崩溃，大家会通过负载均衡的方式来分担服务器压力。将对台服务器组成一个集<br> 群，当用户访问时，先访问到一个转发服务器，再由转发服务器将访问分发到压力更小的服务器。</li><li>Nginx负载均衡实现的策略有以下五种：</li></ul><p><strong>1 轮询(默认)</strong></p><ul><li>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端某个服务器宕机，能自动剔除故障系统。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream backserver <span class="token punctuation">{</span>
	server 192.168.0.12;
	server 192.168.0.13;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2 权重 weight</strong></p><ul><li>weight的值越大分配</li><li>到的访问概率越高，主要用于后端每台服务器性能不均衡的情况下。其次是为在主从的情况下设置<br> 不同的权值，达到合理有效的地利用主机资源。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream backserver <span class="token punctuation">{</span>
	server 192.168.0.12 weight=2;
	server 192.168.0.13 weight=8;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>权重越高，在被访问的概率越大，如上例，分别是20%，80%。</li></ul><p><strong>3 ip_hash( IP绑定)</strong></p><ul><li>每个请求按访问IP的哈希结果分配，使来自同一个IP的访客固定访问一台后端服务器， 并且可以有<br> 效解决动态网页存在的session共享问题</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream backserver <span class="token punctuation">{</span>
	ip_hash;
	server 192.168.0.12<span class="token punctuation">:</span>88;
	server 192.168.0.13<span class="token punctuation">:</span>80;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4 fair(第三方插件)</strong></p><ul><li>必须安装upstream_fair模块。</li><li>对比 weight、ip_hash更加智能的负载均衡算法，fair算法可以根据页面大小和加载时间长短智能<br> 地进行负载均衡，响应时间短的优先分配。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream backserver <span class="token punctuation">{</span>
	server server1;
	server server2;
	fair;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>哪个服务器的响应速度快，就将请求分配到那个服务器上。</li></ul><p><strong>5、url_hash(第三方插件)</strong><br> 必须安装Nginx的hash软件包<br> 按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，可以进一步提高后端缓存<br> 服务器的效率。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream backserver <span class="token punctuation">{</span>
	server squid1<span class="token punctuation">:</span>3128;
	server squid2<span class="token punctuation">:</span>3128;
	hash $request_uri;
	hash_method crc32;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-nginx配置高可用性怎么配置" tabindex="-1"><a class="header-anchor" href="#_20-nginx配置高可用性怎么配置" aria-hidden="true">#</a> 20. Nginx配置高可用性怎么配置？</h2><ul><li>当上游服务器(真实访问服务器)，一旦出现故障或者是没有及时相应的话，应该直接轮训到下一台<br> 服务器，保证服务器的高可用</li><li>Nginx配置代码：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
	listen 80;
	server_name www.lijie.com;
	location / <span class="token punctuation">{</span>
		<span class="token comment">### 指定上游服务器负载均衡服务器</span>
		proxy_pass http<span class="token punctuation">:</span>//backServer;
		<span class="token comment">###nginx与上游服务器(真实访问的服务器)超时时间 后端服务器连接的超时时间_发起握手等候响应超时时间</span>
		proxy_connect_timeout 1s;
		<span class="token comment">###nginx发送给上游服务器(真实访问的服务器)超时时间</span>
		proxy_send_timeout 1s;
		<span class="token comment">### nginx接受上游服务器(真实访问的服务器)超时时间</span>
		proxy_read_timeout 1s;
		index index.html index.htm;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-nginx怎么判断别ip不可访问" tabindex="-1"><a class="header-anchor" href="#_21-nginx怎么判断别ip不可访问" aria-hidden="true">#</a> 21. Nginx怎么判断别IP不可访问？</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 如果访问的ip地址为192.168.9.115,则返回403</span>
if ($remote_addr = 192.168.9.115) <span class="token punctuation">{</span>
	return 403;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-怎么限制浏览器访问" tabindex="-1"><a class="header-anchor" href="#_22-怎么限制浏览器访问" aria-hidden="true">#</a> 22. 怎么限制浏览器访问？</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## 不允许谷歌浏览器访问 如果是谷歌浏览器返回500</span>
if ($http_user_agent ~ Chrome) <span class="token punctuation">{</span>
	return 500;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-rewrite全局变量是什么" tabindex="-1"><a class="header-anchor" href="#_23-rewrite全局变量是什么" aria-hidden="true">#</a> 23. Rewrite全局变量是什么？</h2><table><thead><tr><th>变量</th><th>含义</th></tr></thead><tbody><tr><td>$args</td><td>这个变量等于请求行中的参数，同$query_string</td></tr><tr><td>$content length</td><td>请求头中的Content-length字段。</td></tr><tr><td>$content_type</td><td>请求头中的Content-Type字段。</td></tr><tr><td>$document_root</td><td>当前请求在root指令中指定的值。</td></tr><tr><td>$host</td><td>请求主机头字段，否则为服务器名称。</td></tr><tr><td>$http_user_agent</td><td>客户端agent信息</td></tr><tr><td>$http_cookie</td><td>客户端cookie信息</td></tr><tr><td>$limit_rate</td><td>这个变量可以限制连接速率。</td></tr><tr><td>$request_method</td><td>客户端请求的动作，通常为GET或POST。</td></tr><tr><td>$remote_addr</td><td>客户端的IP地址。</td></tr><tr><td>$remote_port</td><td>客户端的端口。</td></tr><tr><td>$remote_user</td><td>已经经过Auth Basic Module验证的用户名。</td></tr><tr><td>$request_filename</td><td>当前请求的文件路径，由root或alias指令与URI请求生成。</td></tr><tr><td>$scheme</td><td>HTTP方法（如http，https）。</td></tr><tr><td>$server_protocol</td><td>请求使用的协议，通常是HTTP/1.0或HTTP/1.1。</td></tr><tr><td>$server_addr</td><td>服务器地址，在完成一次系统调用后可以确定这个值。</td></tr><tr><td>$server_name</td><td>服务器名称。</td></tr><tr><td>$server_port</td><td>请求到达服务器的端口号。</td></tr><tr><td>$request_uri</td><td>包含请求参数的原始URI，不包含主机名，如”/foo/bar.php?arg=baz”。</td></tr><tr><td>$uri</td><td>不带请求参数的当前URI，</td></tr><tr><td>$uri</td><td>不包含主机名，如”/foo/bar.html”。</td></tr><tr><td>$document_uri</td><td>与$uri相同。</td></tr></tbody></table><hr><p><strong>史上最全Java面试宝典，BAT大厂面试必备。整理不易，建议先关注点赞加收藏</strong></p>`,108),u=n("thead",null,[n("tr",null,[n("th",null,"序号"),n("th",null,"名称"),n("th",null,"地址")])],-1),p=n("td",null,"1",-1),m=n("td",null,"Java基础面试题（91道含答案）",-1),v={href:"https://blog.csdn.net/qq_30999361/article/details/124482581",target:"_blank",rel:"noopener noreferrer"},h=n("td",null,"2",-1),b=n("td",null,"Java并发编程面试题 （123道含答案）",-1),_={href:"https://blog.csdn.net/qq_30999361/article/details/124545403",target:"_blank",rel:"noopener noreferrer"},g=n("td",null,"3",-1),x=n("td",null,"Java异常面试题 （33道含答案）",-1),k={href:"https://blog.csdn.net/qq_30999361/article/details/124560006",target:"_blank",rel:"noopener noreferrer"},f=n("td",null,"4",-1),N=n("td",null,"Java虚拟机（JVM）面试题（51道含答案）",-1),y={href:"https://blog.csdn.net/qq_30999361/article/details/124532763",target:"_blank",rel:"noopener noreferrer"},q=n("td",null,"5",-1),w=n("td",null,"Java集合面试题（52道含答案）",-1),$={href:"https://blog.csdn.net/qq_30999361/article/details/124503952",target:"_blank",rel:"noopener noreferrer"},I=n("td",null,"6",-1),j=n("td",null,"Linux面试题（50道含答案）",-1),P={href:"https://blog.csdn.net/qq_30999361/article/details/124575798",target:"_blank",rel:"noopener noreferrer"},z=n("td",null,"7",-1),T=n("td",null,"Memcache面试题（23道含答案）",-1),S={href:"https://blog.csdn.net/qq_30999361/article/details/124596870",target:"_blank",rel:"noopener noreferrer"},R=n("td",null,"8",-1),L=n("td",null,"Mybatiss面试题 （37道含答案）",-1),M={href:"https://blog.csdn.net/qq_30999361/article/details/124560907",target:"_blank",rel:"noopener noreferrer"},B=n("td",null,"9",-1),C=n("td",null,"MySQL面试题（40道含答案）",-1),J={href:"https://blog.csdn.net/qq_30999361/article/details/124506169",target:"_blank",rel:"noopener noreferrer"},E=n("td",null,"10",-1),U=n("td",null,"Netty面试题（49道含答案）",-1),V={href:"https://blog.csdn.net/qq_30999361/article/details/124617122",target:"_blank",rel:"noopener noreferrer"},G=n("td",null,"11",-1),H=n("td",null,"Nginx面试题（23道含答案）",-1),A={href:"https://blog.csdn.net/qq_30999361/article/details/124597174",target:"_blank",rel:"noopener noreferrer"},O=n("td",null,"12",-1),D=n("td",null,"RabbitMQ面试题（22道含答案）",-1),Z={href:"https://blog.csdn.net/qq_30999361/article/details/124533998",target:"_blank",rel:"noopener noreferrer"},Q=n("td",null,"13",-1),W=n("td",null,"Redis面试题（70道含答案）",-1),F={href:"https://blog.csdn.net/qq_30999361/article/details/124459566",target:"_blank",rel:"noopener noreferrer"},K=n("td",null,"14",-1),X=n("td",null,"SpringBoot面试题（44道含答案）",-1),Y={href:"https://blog.csdn.net/qq_30999361/article/details/124461725",target:"_blank",rel:"noopener noreferrer"},nn=n("td",null,"15",-1),en=n("td",null,"SpringCloud面试题（49道含答案）",-1),sn={href:"https://blog.csdn.net/qq_30999361/article/details/124430712",target:"_blank",rel:"noopener noreferrer"},an=n("td",null,"16",-1),tn=n("td",null,"SpringMVC面试题（29道含答案）",-1),ln={href:"https://blog.csdn.net/qq_30999361/article/details/124519135",target:"_blank",rel:"noopener noreferrer"},dn=n("td",null,"17",-1),rn=n("td",null,"Spring面试题（75道含答案）",-1),on={href:"https://blog.csdn.net/qq_30999361/article/details/124519472",target:"_blank",rel:"noopener noreferrer"},cn=n("td",null,"18",-1),un=n("td",null,"TCP、UDP、Socket、Http网络编程面试题（47道含答案）",-1),pn={href:"https://blog.csdn.net/qq_30999361/article/details/124617792",target:"_blank",rel:"noopener noreferrer"},mn=n("td",null,"19",-1),vn=n("td",null,"Tomcat面试题（15道含答案）",-1),hn={href:"https://blog.csdn.net/qq_30999361/article/details/124576964",target:"_blank",rel:"noopener noreferrer"},bn=n("td",null,"20",-1),_n=n("td",null,"Zookeeper面试题（28道含答案）",-1),gn={href:"https://blog.csdn.net/qq_30999361/article/details/124596208",target:"_blank",rel:"noopener noreferrer"},xn=n("td",null,"21",-1),kn=n("td",null,"多线程面试题（60道含答案）",-1),fn={href:"https://blog.csdn.net/qq_30999361/article/details/124596462",target:"_blank",rel:"noopener noreferrer"},Nn=n("td",null,"22",-1),yn=n("td",null,"设计模式面试题（14道含答案）",-1),qn={href:"https://blog.csdn.net/qq_30999361/article/details/124637874",target:"_blank",rel:"noopener noreferrer"},wn=n("td",null,"23",-1),$n=n("td",null,"BIO、NIO、AIO、Netty面试题（35道含答案）",-1),In={href:"https://blog.csdn.net/qq_30999361/article/details/124653616",target:"_blank",rel:"noopener noreferrer"},jn=n("td",null,"24",-1),Pn=n("td",null,"Dubbo面试题（47道含答案）",-1),zn={href:"https://blog.csdn.net/qq_30999361/article/details/124637288",target:"_blank",rel:"noopener noreferrer"},Tn=n("td",null,"25",-1),Sn=n("td",null,"ElasticSearch面试题（31道含答案）",-1),Rn={href:"https://blog.csdn.net/qq_30999361/article/details/124619240",target:"_blank",rel:"noopener noreferrer"},Ln=n("td",null,"26",-1),Mn=n("td",null,"Git常用命令（63条）",-1),Bn={href:"https://blog.csdn.net/qq_30999361/article/details/124438420",target:"_blank",rel:"noopener noreferrer"};function Cn(Jn,En){const e=i("ExternalLinkIcon");return l(),d("div",null,[c,n("table",null,[u,n("tbody",null,[n("tr",null,[p,m,n("td",null,[n("a",v,[s("（点击查看）"),a(e)])])]),n("tr",null,[h,b,n("td",null,[n("a",_,[s("（点击查看）"),a(e)])])]),n("tr",null,[g,x,n("td",null,[n("a",k,[s("（点击查看）"),a(e)])])]),n("tr",null,[f,N,n("td",null,[n("a",y,[s("（点击查看）"),a(e)])])]),n("tr",null,[q,w,n("td",null,[n("a",$,[s("（点击查看）"),a(e)])])]),n("tr",null,[I,j,n("td",null,[n("a",P,[s("（点击查看）"),a(e)])])]),n("tr",null,[z,T,n("td",null,[n("a",S,[s("（点击查看）"),a(e)])])]),n("tr",null,[R,L,n("td",null,[n("a",M,[s("（点击查看）"),a(e)])])]),n("tr",null,[B,C,n("td",null,[n("a",J,[s("（点击查看）"),a(e)])])]),n("tr",null,[E,U,n("td",null,[n("a",V,[s("（点击查看）"),a(e)])])]),n("tr",null,[G,H,n("td",null,[n("a",A,[s("（点击查看）"),a(e)])])]),n("tr",null,[O,D,n("td",null,[n("a",Z,[s("（点击查看）"),a(e)])])]),n("tr",null,[Q,W,n("td",null,[n("a",F,[s("（点击查看）"),a(e)])])]),n("tr",null,[K,X,n("td",null,[n("a",Y,[s("（点击查看）"),a(e)])])]),n("tr",null,[nn,en,n("td",null,[n("a",sn,[s("（点击查看）"),a(e)])])]),n("tr",null,[an,tn,n("td",null,[n("a",ln,[s("（点击查看）"),a(e)])])]),n("tr",null,[dn,rn,n("td",null,[n("a",on,[s("（点击查看）"),a(e)])])]),n("tr",null,[cn,un,n("td",null,[n("a",pn,[s("（点击查看）"),a(e)])])]),n("tr",null,[mn,vn,n("td",null,[n("a",hn,[s("（点击查看）"),a(e)])])]),n("tr",null,[bn,_n,n("td",null,[n("a",gn,[s("（点击查看）"),a(e)])])]),n("tr",null,[xn,kn,n("td",null,[n("a",fn,[s("（点击查看）"),a(e)])])]),n("tr",null,[Nn,yn,n("td",null,[n("a",qn,[s("（点击查看）"),a(e)])])]),n("tr",null,[wn,$n,n("td",null,[n("a",In,[s("（点击查看）"),a(e)])])]),n("tr",null,[jn,Pn,n("td",null,[n("a",zn,[s("（点击查看）"),a(e)])])]),n("tr",null,[Tn,Sn,n("td",null,[n("a",Rn,[s("（点击查看）"),a(e)])])]),n("tr",null,[Ln,Mn,n("td",null,[n("a",Bn,[s("（点击查看）"),a(e)])])])])])])}const Vn=t(o,[["render",Cn],["__file","Nginx面试题（23道含答案）.html.vue"]]);export{Vn as default};
