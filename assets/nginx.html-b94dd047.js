const n=JSON.parse('{"key":"v-a387e39a","path":"/guide/markdown/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{"title":"nginx","head":[["meta",{"name":"referrer","content":"no-referrer"}],["meta",{"property":"og:url","content":"https://www.icu-web.tk/vuepress-doc/guide/markdown/nginx.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:description","content":"location 一些基础匹配规则 # 精确匹配 / : 主机名后面不能带任何字符串 location = / { [ configuration A ] } # 前缀匹配 / : 但是正则和最长字符串会优先匹配 location / { [ configuration B ] } # 匹配任何以 / 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。 location ^~ / { [ configuration D ] } # 正则匹配: 区分大小写 # 优先级比 ^~ 低 # 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索 # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条 location ~ [regex] { [ configuration C ] } # 正则匹配: 不区分大小写 # 优先级比 ^~ 低 # 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索 # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条 location ~* [regex] { [ configuration E ] } # !~ \\t\\t 区分大小写不匹配的正则 # !~* 不区分大小写不匹配的正则"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-05T14:04:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-05T14:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-05T14:04:17.000Z\\",\\"author\\":[]}"]],"description":"location 一些基础匹配规则 # 精确匹配 / : 主机名后面不能带任何字符串 location = / { [ configuration A ] } # 前缀匹配 / : 但是正则和最长字符串会优先匹配 location / { [ configuration B ] } # 匹配任何以 / 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。 location ^~ / { [ configuration D ] } # 正则匹配: 区分大小写 # 优先级比 ^~ 低 # 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索 # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条 location ~ [regex] { [ configuration C ] } # 正则匹配: 不区分大小写 # 优先级比 ^~ 低 # 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索 # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条 location ~* [regex] { [ configuration E ] } # !~ \\t\\t 区分大小写不匹配的正则 # !~* 不区分大小写不匹配的正则"},"headers":[{"level":3,"title":"location 一些基础匹配规则","slug":"location-一些基础匹配规则","link":"#location-一些基础匹配规则","children":[]},{"level":3,"title":"rewrite 语法 （重定向配置）","slug":"rewrite-语法-重定向配置","link":"#rewrite-语法-重定向配置","children":[]},{"level":3,"title":"一些高级的用法","slug":"一些高级的用法","link":"#一些高级的用法","children":[]}],"git":{"createdTime":1693922657000,"updatedTime":1693922657000,"contributors":[{"name":"bincooo","email":"admin@bincooodeiMac.local","commits":1}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"guide/markdown/nginx.md","localizedDate":"2023年9月5日","excerpt":"<h3> location 一些基础匹配规则</h3>\\n<div class=\\"language-nginx line-numbers-mode\\" data-ext=\\"nginx\\"><pre class=\\"language-nginx\\"><code><span class=\\"token comment\\"># 精确匹配 / : 主机名后面不能带任何字符串</span>\\n<span class=\\"token directive\\"><span class=\\"token keyword\\">location</span>  = /</span> <span class=\\"token punctuation\\">{</span>\\n  [ configuration A ] \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\"># 前缀匹配 / : 但是正则和最长字符串会优先匹配</span>\\n<span class=\\"token directive\\"><span class=\\"token keyword\\">location</span>  /</span> <span class=\\"token punctuation\\">{</span>\\n  [ configuration B ] \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\"># 匹配任何以 / 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。</span>\\n<span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> ^~ /</span> <span class=\\"token punctuation\\">{</span>\\n  [ configuration D ] \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\"># 正则匹配: 区分大小写</span>\\n<span class=\\"token comment\\"># 优先级比 ^~ 低</span>\\n<span class=\\"token comment\\"># 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索</span>\\n<span class=\\"token comment\\"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>\\n<span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> ~ [regex]</span> <span class=\\"token punctuation\\">{</span>\\n  [ configuration C ] \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\"># 正则匹配: 不区分大小写</span>\\n<span class=\\"token comment\\"># 优先级比 ^~ 低</span>\\n<span class=\\"token comment\\"># 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索</span>\\n<span class=\\"token comment\\"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>\\n<span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> ~* [regex]</span> <span class=\\"token punctuation\\">{</span>\\n  [ configuration E ] \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\"># !~ \\t\\t 区分大小写不匹配的正则</span>\\n<span class=\\"token comment\\"># !~*    不区分大小写不匹配的正则</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
