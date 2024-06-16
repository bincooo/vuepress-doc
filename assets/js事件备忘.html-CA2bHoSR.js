import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app--CHp3Uh7.js";const t={},o=e(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//禁用拖拽</span>
document<span class="token punctuation">.</span><span class="token function-variable function">ondragstart</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 禁用右键菜单
 */</span>
document<span class="token punctuation">.</span><span class="token function-variable function">oncontextmenu</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 禁用选中功能
 */</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onselectstart</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 禁用复制功能
 */</span>
document<span class="token punctuation">.</span><span class="token function-variable function">oncopy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 禁用鼠标的左右键
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">e</span>
 */</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>which <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//鼠标左键</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>which <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//鼠标右键</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 获取键盘上的输入值
 */</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>which<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>which <span class="token operator">==</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;回车键&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>onclick        当单击鼠标时运行脚本
ondblclick     当双击鼠标时运行脚本
ondrag         当拖动元素时运行脚本
ondragend      当拖动操作结束时运行脚本
ondragenter    当元素被拖动至有效的拖放目标时运行脚本
ondragleave    当元素离开有效拖放目标时运行脚本
ondragover     当元素被拖动至有效拖放目标上方时运行脚本
ondragstart    当拖动操作开始时运行脚本
ondrop         当被拖动元素正在被拖放时运行脚本
onmousedown    当按下鼠标按钮时运行脚本
onmousemove    当鼠标指针移动时运行脚本
onmouseout     当鼠标指针移出元素时运行脚本
onmouseover    当鼠标指针移至元素之上时运行脚本
onmouseup      当松开鼠标按钮时运行脚本
onmousewheel   当转动鼠标滚轮时运行脚本
onscroll       当滚动元素滚动元素的滚动条时运行脚本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>键盘事件对象</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>keyup		按键弹起时触发
keydown		键盘按下时触发
keypress	键盘按下触发 但是识别不了功能键

三个事件执行顺序是keydown,keypress,keyup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","js事件备忘.html.vue"]]),v=JSON.parse('{"path":"/guide/program/js%E4%BA%8B%E4%BB%B6%E5%A4%87%E5%BF%98.html","title":"js事件备忘","lang":"zh-CN","frontmatter":{"title":"js事件备忘","description":"键盘事件对象","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress-doc/guide/program/js%E4%BA%8B%E4%BB%B6%E5%A4%87%E5%BF%98.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"js事件备忘"}],["meta",{"property":"og:description","content":"键盘事件对象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T11:54:35.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-16T11:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"js事件备忘\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-16T11:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1718538875000,"updatedTime":1718538875000,"contributors":[{"name":"折戟沉沙、丿","email":"36452456+bincooo@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"guide/program/js事件备忘.md","localizedDate":"2024年6月16日","autoDesc":true}');export{r as comp,v as data};
