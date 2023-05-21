const e=JSON.parse('{"key":"v-16e5d498","path":"/guide/coder/%E5%B8%B8%E8%A7%81%E8%AF%81%E4%B9%A6%E8%AF%B4%E6%98%8E.html","title":"常见证书说明","lang":"zh-CN","frontmatter":{"title":"常见证书说明","description":"X.509证书标准定义 PEM、DER --- 文件拓展名: --- CRT和CER是一种东西，只是后缀名不一样：也同样有两种格式: Base64和字节码 PEM: 纯文本文件, 以-----BEGIN 某某某-----开头, 以-----END 某某某-----结尾, 内容是 base64 编码 DER: 二进制文件格式, 一般应使用 Windows/Java 开发工具打开, 也可以使用openssl命令行工具提取其中信息或进行编码转换 CRT: 常见于*NIX系统,有可能是PEM编码,也有可能是DER编码,大多数应该是PEM编码 CER: 常见于Windows系统,同样的,可能是PEM编码,也可能是DER编码,大多数应该是DER编码 KEY: 通常用来存放一个公钥或者私钥,并非X.509证书,编码同样的,可能是PEM,也可能是DER 查看KEY的办法:","head":[["meta",{"property":"og:url","content":"https://www.icu-web.tk/vuepress-doc/guide/coder/%E5%B8%B8%E8%A7%81%E8%AF%81%E4%B9%A6%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"常见证书说明"}],["meta",{"property":"og:description","content":"X.509证书标准定义 PEM、DER --- 文件拓展名: --- CRT和CER是一种东西，只是后缀名不一样：也同样有两种格式: Base64和字节码 PEM: 纯文本文件, 以-----BEGIN 某某某-----开头, 以-----END 某某某-----结尾, 内容是 base64 编码 DER: 二进制文件格式, 一般应使用 Windows/Java 开发工具打开, 也可以使用openssl命令行工具提取其中信息或进行编码转换 CRT: 常见于*NIX系统,有可能是PEM编码,也有可能是DER编码,大多数应该是PEM编码 CER: 常见于Windows系统,同样的,可能是PEM编码,也可能是DER编码,大多数应该是DER编码 KEY: 通常用来存放一个公钥或者私钥,并非X.509证书,编码同样的,可能是PEM,也可能是DER 查看KEY的办法:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T00:49:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T00:49:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见证书说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-21T00:49:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"X.509证书标准定义","slug":"x-509证书标准定义","link":"#x-509证书标准定义","children":[]},{"level":3,"title":"证书编码的转换","slug":"证书编码的转换","link":"#证书编码的转换","children":[]},{"level":3,"title":"生成CSR时翻译说明","slug":"生成csr时翻译说明","link":"#生成csr时翻译说明","children":[]},{"level":3,"title":"自颁发证书指令","slug":"自颁发证书指令","link":"#自颁发证书指令","children":[]},{"level":3,"title":"证书转换","slug":"证书转换","link":"#证书转换","children":[]},{"level":3,"title":"测试可用自签名步骤","slug":"测试可用自签名步骤","link":"#测试可用自签名步骤","children":[]},{"level":3,"title":"生成指令","slug":"生成指令","link":"#生成指令","children":[]}],"git":{"createdTime":1684630192000,"updatedTime":1684630192000,"contributors":[{"name":"折戟沉沙、丿","email":"36452456+bincooo@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.97,"words":892},"filePathRelative":"guide/coder/常见证书说明.md","localizedDate":"2023年5月21日","excerpt":"<h3> X.509证书标准定义</h3>\\n<p>PEM、DER</p>\\n<p>--- 文件拓展名: ---\\nCRT和CER是一种东西，只是后缀名不一样：也同样有两种格式: Base64和字节码\\nPEM: 纯文本文件, 以-----BEGIN 某某某-----开头, 以-----END 某某某-----结尾, 内容是 base64 编码\\nDER: 二进制文件格式, 一般应使用 Windows/Java 开发工具打开, 也可以使用openssl命令行工具提取其中信息或进行编码转换\\nCRT: 常见于*NIX系统,有可能是PEM编码,也有可能是DER编码,大多数应该是PEM编码\\nCER: 常见于Windows系统,同样的,可能是PEM编码,也可能是DER编码,大多数应该是DER编码\\nKEY: 通常用来存放一个公钥或者私钥,并非X.509证书,编码同样的,可能是PEM,也可能是DER\\n查看KEY的办法:</p>","autoDesc":true}');export{e as data};
