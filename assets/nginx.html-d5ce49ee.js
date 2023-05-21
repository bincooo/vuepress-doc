import{_ as n,Z as s,$ as a,a4 as e}from"./framework-10e089e2.js";const i={},t=e(`<h3 id="location-一些基础匹配规则" tabindex="-1"><a class="header-anchor" href="#location-一些基础匹配规则" aria-hidden="true">#</a> location 一些基础匹配规则</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 精确匹配 / : 主机名后面不能带任何字符串</span>
<span class="token directive"><span class="token keyword">location</span>  = /</span> <span class="token punctuation">{</span>
  [ configuration A ] 
<span class="token punctuation">}</span>

<span class="token comment"># 前缀匹配 / : 但是正则和最长字符串会优先匹配</span>
<span class="token directive"><span class="token keyword">location</span>  /</span> <span class="token punctuation">{</span>
  [ configuration B ] 
<span class="token punctuation">}</span>

<span class="token comment"># 匹配任何以 / 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。</span>
<span class="token directive"><span class="token keyword">location</span> ^~ /</span> <span class="token punctuation">{</span>
  [ configuration D ] 
<span class="token punctuation">}</span>

<span class="token comment"># 正则匹配: 区分大小写</span>
<span class="token comment"># 优先级比 ^~ 低</span>
<span class="token comment"># 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索</span>
<span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>
<span class="token directive"><span class="token keyword">location</span> ~ [regex]</span> <span class="token punctuation">{</span>
  [ configuration C ] 
<span class="token punctuation">}</span>

<span class="token comment"># 正则匹配: 不区分大小写</span>
<span class="token comment"># 优先级比 ^~ 低</span>
<span class="token comment"># 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索</span>
<span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>
<span class="token directive"><span class="token keyword">location</span> ~* [regex]</span> <span class="token punctuation">{</span>
  [ configuration E ] 
<span class="token punctuation">}</span>

<span class="token comment"># !~ 		 区分大小写不匹配的正则</span>
<span class="token comment"># !~*    不区分大小写不匹配的正则</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rewrite-语法-重定向配置" tabindex="-1"><a class="header-anchor" href="#rewrite-语法-重定向配置" aria-hidden="true">#</a> rewrite 语法 （重定向配置）</h3><h4 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># rewrite [regex] [replacement] [flag]</span>
<span class="token directive"><span class="token keyword">location</span> ~ /goto/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">rewrite</span> ^/goto/(.*) http://localhost:81/<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-flag-标志位" tabindex="-1"><a class="header-anchor" href="#_2-flag-标志位" aria-hidden="true">#</a> 2. flag 标志位</h4><p>last - 完成重写指令，之后搜索相应的URI或location。</p><p>break - 完成重写指令。</p><p>redirect - 返回302临时重定向。</p><p>permanent - 返回301永久重定向。</p><h3 id="一些高级的用法" tabindex="-1"><a class="header-anchor" href="#一些高级的用法" aria-hidden="true">#</a> 一些高级的用法</h3><ol><li><p>调试location uri比较有用：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 定义一个 debug/header.conf 文件</span>
<span class="token comment"># 内容如下</span>
<span class="token directive"><span class="token keyword">add_header</span> x0-NGINX-DEBUG <span class="token string">&#39;=========================================&#39;</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xA-NGINX-http_user_agent <span class="token variable">$http_user_agent</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xB-NGINX-request <span class="token variable">$request</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xC-NGINX-request_body <span class="token variable">$request_body</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xD-NGINX-request_method <span class="token variable">$request_method</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xE-NGINX-request_time <span class="token variable">$request_time</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xF-NGINX-request_uri <span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xG-NGINX-scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xH-NGINX-request_server_name <span class="token variable">$server_name</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xI-NGINX-request_server_port <span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xJ-NGINX-uri <span class="token variable">$uri</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xK-NGINX-args <span class="token variable">$args</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xL-NGINX-is_args <span class="token variable">$is_args</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xM-NGINX-request_filename <span class="token variable">$request_filename</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xN-NGINX-pid <span class="token variable">$pid</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xO-NGINX-document_root <span class="token variable">$document_root</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xP-NGINX-document_uri <span class="token variable">$document_uri</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xQ-NGINX-host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xR-NGINX-hostname <span class="token variable">$hostname</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xS-NGINX-proxy_protocol_addr <span class="token variable">$proxy_protocol_addr</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xT-NGINX-proxy_protocol_port <span class="token variable">$proxy_protocol_port</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xU-NGINX-query_string <span class="token variable">$query_string</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xV-NGINX-realpath_root <span class="token variable">$realpath_root</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xW-NGINX-remote_addr <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xX-NGINX-remote_port <span class="token variable">$remote_port</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xY-NGINX-remote_user <span class="token variable">$remote_user</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> xZ-NGINX-DEBUG <span class="token string">&#39;=========================================&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面访问地址后可以在浏览器调试工具内查看</p><p>xx-NGINX 没有明确的意义只是用以排序作用</p><p>例子：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ /test/(?&lt;path&gt;[a-Z-_]+)/([^/]+)/(.+)$</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">include</span> conf.d/debug/header.conf</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">add_header</span> xX1-NGINX-echo <span class="token string">&#39;arg1 - <span class="token variable">$path</span> <span class="token variable">$2</span> <span class="token variable">$3</span>&#39;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;SUCCUSS&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><img src="https://i0.hdslb.com/bfs/album/9ac67ec2bda9cba23b3cedbefcca4931440acda6.png" alt="截屏2022-11-25 21.35.48" style="zoom:50%;"><p>其中 <code>( [regex] )</code> 为正则子组，正常可以使用$1 ...n 获取。</p><p>也可以指定变量名 <code>?&lt; [name] &gt;</code> 使用$[name]获取。</p>`,15),p=[t];function c(l,d){return s(),a("div",null,p)}const r=n(i,[["render",c],["__file","nginx.html.vue"]]);export{r as default};
