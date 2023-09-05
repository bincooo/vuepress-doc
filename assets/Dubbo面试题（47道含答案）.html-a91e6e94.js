const l=JSON.parse('{"key":"v-600ad4c7","path":"/guide/markdown/Java%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/Dubbo%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8847%E9%81%93%E5%90%AB%E7%AD%94%E6%A1%88%EF%BC%89.html","title":"","lang":"zh-CN","frontmatter":{"description":"目录 一、基础知识 1. 为什么要用 Dubbo？ 2. Dubbo 是什么？ 3. Dubbo 的使用场景有哪些？ 4. Dubbo 核心功能有哪些？ 5. Dubbo 核心组件有哪些？ 6. Dubbo 服务器注册与发现的流程？ 二、架构设计 7. Dubbo 的整体架构设计有哪些分层? 8. Dubbo Monitor 实现原理？ 三、分布式框架 9. Dubbo 类似的分布式框架还有哪些？ 10. Dubbo 和 Spring Cloud 有什么关系？ 11. Dubbo 和 Spring Cloud 有什么哪些区别？ 12. Dubbo 和 Dubbox 之间的区别？ 四、注册中心 13. Dubbo 有哪些注册中心？ 14. Dubbo 的注册中心集群挂掉，发布者和订阅者之间还能通信么？ 五、集群 15. Dubbo集群提供了哪些负载均衡策略？ 16. Dubbo的集群容错方案有哪些？ 六、配置 17. Dubbo 配置文件是如何加载到 Spring 中的？ 18. 说说核心的配置有哪些？ 19. Dubbo 超时设置有哪些方式？ 20. 服务调用超时会怎么样？ 七、通信协议 21. Dubbo 使用的是什么通信框架? 22. Dubbo 支持哪些协议，它们的优缺点有哪些？ 八、设计模式 23. Dubbo 用到哪些设计模式？ 九、运维管理 24. 服务上线怎么兼容旧版本？ 25. Dubbo telnet 命令能做什么？ 26. Dubbo 支持服务降级吗？ 27. Dubbo 如何优雅停机？ 十、SPI 28. Dubbo SPI 和 Java SPI 区别？ 十一、其他 29. Dubbo 支持分布式事务吗？ 30. Dubbo 可以对结果进行缓存吗？ 31. Dubbo 必须依赖的包有哪些？ 32. Dubbo 支持哪些序列化方式？ 33. Dubbo 在安全方面有哪些措施？ 34. 服务调用是阻塞的吗？ 35. 服务提供者能实现失效踢出是什么原理？ 36. 同一个服务多个注册的情况下可以直连某一个服务吗？ 37. Dubbo 服务降级，失败重试怎么做？ 38.Dubbo 使用过程中都遇到了些什么问题？ 十二、RPC 39. 为什么要有RPC 40. 什么是RPC 41. PRC架构组件 42. RPC和SOA、SOAP、REST的区别 43. RPC框架需要解决的问题？ 44. RPC的实现基础？ 45. RPC使用了哪些关键技术？ 46. 主流RPC框架有哪些 47. RPC的实现原理架构图","head":[["meta",{"property":"og:url","content":"https://www.icu-web.tk/vuepress-doc/guide/markdown/Java%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/Dubbo%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8847%E9%81%93%E5%90%AB%E7%AD%94%E6%A1%88%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:description","content":"目录 一、基础知识 1. 为什么要用 Dubbo？ 2. Dubbo 是什么？ 3. Dubbo 的使用场景有哪些？ 4. Dubbo 核心功能有哪些？ 5. Dubbo 核心组件有哪些？ 6. Dubbo 服务器注册与发现的流程？ 二、架构设计 7. Dubbo 的整体架构设计有哪些分层? 8. Dubbo Monitor 实现原理？ 三、分布式框架 9. Dubbo 类似的分布式框架还有哪些？ 10. Dubbo 和 Spring Cloud 有什么关系？ 11. Dubbo 和 Spring Cloud 有什么哪些区别？ 12. Dubbo 和 Dubbox 之间的区别？ 四、注册中心 13. Dubbo 有哪些注册中心？ 14. Dubbo 的注册中心集群挂掉，发布者和订阅者之间还能通信么？ 五、集群 15. Dubbo集群提供了哪些负载均衡策略？ 16. Dubbo的集群容错方案有哪些？ 六、配置 17. Dubbo 配置文件是如何加载到 Spring 中的？ 18. 说说核心的配置有哪些？ 19. Dubbo 超时设置有哪些方式？ 20. 服务调用超时会怎么样？ 七、通信协议 21. Dubbo 使用的是什么通信框架? 22. Dubbo 支持哪些协议，它们的优缺点有哪些？ 八、设计模式 23. Dubbo 用到哪些设计模式？ 九、运维管理 24. 服务上线怎么兼容旧版本？ 25. Dubbo telnet 命令能做什么？ 26. Dubbo 支持服务降级吗？ 27. Dubbo 如何优雅停机？ 十、SPI 28. Dubbo SPI 和 Java SPI 区别？ 十一、其他 29. Dubbo 支持分布式事务吗？ 30. Dubbo 可以对结果进行缓存吗？ 31. Dubbo 必须依赖的包有哪些？ 32. Dubbo 支持哪些序列化方式？ 33. Dubbo 在安全方面有哪些措施？ 34. 服务调用是阻塞的吗？ 35. 服务提供者能实现失效踢出是什么原理？ 36. 同一个服务多个注册的情况下可以直连某一个服务吗？ 37. Dubbo 服务降级，失败重试怎么做？ 38.Dubbo 使用过程中都遇到了些什么问题？ 十二、RPC 39. 为什么要有RPC 40. 什么是RPC 41. PRC架构组件 42. RPC和SOA、SOAP、REST的区别 43. RPC框架需要解决的问题？ 44. RPC的实现基础？ 45. RPC使用了哪些关键技术？ 46. 主流RPC框架有哪些 47. RPC的实现原理架构图"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-05T14:04:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-05T14:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-05T14:04:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"一、基础知识","slug":"一、基础知识","link":"#一、基础知识","children":[]},{"level":2,"title":"1. 为什么要用 Dubbo？","slug":"_1-为什么要用-dubbo","link":"#_1-为什么要用-dubbo","children":[]},{"level":2,"title":"2. Dubbo 是什么？","slug":"_2-dubbo-是什么","link":"#_2-dubbo-是什么","children":[]},{"level":2,"title":"3. Dubbo 的使用场景有哪些？","slug":"_3-dubbo-的使用场景有哪些","link":"#_3-dubbo-的使用场景有哪些","children":[]},{"level":2,"title":"4. Dubbo 核心功能有哪些？","slug":"_4-dubbo-核心功能有哪些","link":"#_4-dubbo-核心功能有哪些","children":[]},{"level":2,"title":"5. Dubbo 核心组件有哪些？","slug":"_5-dubbo-核心组件有哪些","link":"#_5-dubbo-核心组件有哪些","children":[]},{"level":2,"title":"6. Dubbo 服务器注册与发现的流程？","slug":"_6-dubbo-服务器注册与发现的流程","link":"#_6-dubbo-服务器注册与发现的流程","children":[]},{"level":2,"title":"二、架构设计","slug":"二、架构设计","link":"#二、架构设计","children":[]},{"level":2,"title":"7. Dubbo 的整体架构设计有哪些分层?","slug":"_7-dubbo-的整体架构设计有哪些分层","link":"#_7-dubbo-的整体架构设计有哪些分层","children":[]},{"level":2,"title":"8. Dubbo Monitor 实现原理？","slug":"_8-dubbo-monitor-实现原理","link":"#_8-dubbo-monitor-实现原理","children":[]},{"level":2,"title":"三、分布式框架","slug":"三、分布式框架","link":"#三、分布式框架","children":[]},{"level":2,"title":"9. Dubbo 类似的分布式框架还有哪些？","slug":"_9-dubbo-类似的分布式框架还有哪些","link":"#_9-dubbo-类似的分布式框架还有哪些","children":[]},{"level":2,"title":"10. Dubbo 和 Spring Cloud 有什么关系？","slug":"_10-dubbo-和-spring-cloud-有什么关系","link":"#_10-dubbo-和-spring-cloud-有什么关系","children":[]},{"level":2,"title":"11. Dubbo 和 Spring Cloud 有什么哪些区别？","slug":"_11-dubbo-和-spring-cloud-有什么哪些区别","link":"#_11-dubbo-和-spring-cloud-有什么哪些区别","children":[]},{"level":2,"title":"12. Dubbo 和 Dubbox 之间的区别？","slug":"_12-dubbo-和-dubbox-之间的区别","link":"#_12-dubbo-和-dubbox-之间的区别","children":[]},{"level":2,"title":"四、注册中心","slug":"四、注册中心","link":"#四、注册中心","children":[]},{"level":2,"title":"13. Dubbo 有哪些注册中心？","slug":"_13-dubbo-有哪些注册中心","link":"#_13-dubbo-有哪些注册中心","children":[]},{"level":2,"title":"14. Dubbo 的注册中心集群挂掉，发布者和订阅者之间还能通信么？","slug":"_14-dubbo-的注册中心集群挂掉-发布者和订阅者之间还能通信么","link":"#_14-dubbo-的注册中心集群挂掉-发布者和订阅者之间还能通信么","children":[]},{"level":2,"title":"五、集群","slug":"五、集群","link":"#五、集群","children":[]},{"level":2,"title":"15. Dubbo集群提供了哪些负载均衡策略？","slug":"_15-dubbo集群提供了哪些负载均衡策略","link":"#_15-dubbo集群提供了哪些负载均衡策略","children":[]},{"level":2,"title":"16. Dubbo的集群容错方案有哪些？","slug":"_16-dubbo的集群容错方案有哪些","link":"#_16-dubbo的集群容错方案有哪些","children":[]},{"level":2,"title":"六、配置","slug":"六、配置","link":"#六、配置","children":[]},{"level":2,"title":"17. Dubbo 配置文件是如何加载到 Spring 中的？","slug":"_17-dubbo-配置文件是如何加载到-spring-中的","link":"#_17-dubbo-配置文件是如何加载到-spring-中的","children":[]},{"level":2,"title":"18. 说说核心的配置有哪些？","slug":"_18-说说核心的配置有哪些","link":"#_18-说说核心的配置有哪些","children":[]},{"level":2,"title":"19. Dubbo 超时设置有哪些方式？","slug":"_19-dubbo-超时设置有哪些方式","link":"#_19-dubbo-超时设置有哪些方式","children":[]},{"level":2,"title":"20. 服务调用超时会怎么样？","slug":"_20-服务调用超时会怎么样","link":"#_20-服务调用超时会怎么样","children":[]},{"level":2,"title":"七、通信协议","slug":"七、通信协议","link":"#七、通信协议","children":[]},{"level":2,"title":"21. Dubbo 使用的是什么通信框架?","slug":"_21-dubbo-使用的是什么通信框架","link":"#_21-dubbo-使用的是什么通信框架","children":[]},{"level":2,"title":"22. Dubbo 支持哪些协议，它们的优缺点有哪些？","slug":"_22-dubbo-支持哪些协议-它们的优缺点有哪些","link":"#_22-dubbo-支持哪些协议-它们的优缺点有哪些","children":[]},{"level":2,"title":"八、设计模式","slug":"八、设计模式","link":"#八、设计模式","children":[]},{"level":2,"title":"23. Dubbo 用到哪些设计模式？","slug":"_23-dubbo-用到哪些设计模式","link":"#_23-dubbo-用到哪些设计模式","children":[]},{"level":2,"title":"九、运维管理","slug":"九、运维管理","link":"#九、运维管理","children":[]},{"level":2,"title":"24. 服务上线怎么兼容旧版本？","slug":"_24-服务上线怎么兼容旧版本","link":"#_24-服务上线怎么兼容旧版本","children":[]},{"level":2,"title":"25. Dubbo telnet 命令能做什么？","slug":"_25-dubbo-telnet-命令能做什么","link":"#_25-dubbo-telnet-命令能做什么","children":[]},{"level":2,"title":"26. Dubbo 支持服务降级吗？","slug":"_26-dubbo-支持服务降级吗","link":"#_26-dubbo-支持服务降级吗","children":[]},{"level":2,"title":"27. Dubbo 如何优雅停机？","slug":"_27-dubbo-如何优雅停机","link":"#_27-dubbo-如何优雅停机","children":[]},{"level":2,"title":"十、SPI","slug":"十、spi","link":"#十、spi","children":[]},{"level":2,"title":"28. Dubbo SPI 和 Java SPI 区别？","slug":"_28-dubbo-spi-和-java-spi-区别","link":"#_28-dubbo-spi-和-java-spi-区别","children":[]},{"level":2,"title":"十一、其他","slug":"十一、其他","link":"#十一、其他","children":[]},{"level":2,"title":"29. Dubbo 支持分布式事务吗？","slug":"_29-dubbo-支持分布式事务吗","link":"#_29-dubbo-支持分布式事务吗","children":[]},{"level":2,"title":"30. Dubbo 可以对结果进行缓存吗？","slug":"_30-dubbo-可以对结果进行缓存吗","link":"#_30-dubbo-可以对结果进行缓存吗","children":[]},{"level":2,"title":"31. Dubbo 必须依赖的包有哪些？","slug":"_31-dubbo-必须依赖的包有哪些","link":"#_31-dubbo-必须依赖的包有哪些","children":[]},{"level":2,"title":"32. Dubbo 支持哪些序列化方式？","slug":"_32-dubbo-支持哪些序列化方式","link":"#_32-dubbo-支持哪些序列化方式","children":[]},{"level":2,"title":"33. Dubbo 在安全方面有哪些措施？","slug":"_33-dubbo-在安全方面有哪些措施","link":"#_33-dubbo-在安全方面有哪些措施","children":[]},{"level":2,"title":"34. 服务调用是阻塞的吗？","slug":"_34-服务调用是阻塞的吗","link":"#_34-服务调用是阻塞的吗","children":[]},{"level":2,"title":"35. 服务提供者能实现失效踢出是什么原理？","slug":"_35-服务提供者能实现失效踢出是什么原理","link":"#_35-服务提供者能实现失效踢出是什么原理","children":[]},{"level":2,"title":"36. 同一个服务多个注册的情况下可以直连某一个服务吗？","slug":"_36-同一个服务多个注册的情况下可以直连某一个服务吗","link":"#_36-同一个服务多个注册的情况下可以直连某一个服务吗","children":[]},{"level":2,"title":"37. Dubbo 服务降级，失败重试怎么做？","slug":"_37-dubbo-服务降级-失败重试怎么做","link":"#_37-dubbo-服务降级-失败重试怎么做","children":[]},{"level":2,"title":"38.Dubbo 使用过程中都遇到了些什么问题？","slug":"_38-dubbo-使用过程中都遇到了些什么问题","link":"#_38-dubbo-使用过程中都遇到了些什么问题","children":[]},{"level":2,"title":"十二、RPC","slug":"十二、rpc","link":"#十二、rpc","children":[]},{"level":2,"title":"39. 为什么要有RPC","slug":"_39-为什么要有rpc","link":"#_39-为什么要有rpc","children":[]},{"level":2,"title":"40. 什么是RPC","slug":"_40-什么是rpc","link":"#_40-什么是rpc","children":[]},{"level":2,"title":"41. PRC架构组件","slug":"_41-prc架构组件","link":"#_41-prc架构组件","children":[]},{"level":2,"title":"42. RPC和SOA、SOAP、REST的区别","slug":"_42-rpc和soa、soap、rest的区别","link":"#_42-rpc和soa、soap、rest的区别","children":[]},{"level":2,"title":"43. RPC框架需要解决的问题？","slug":"_43-rpc框架需要解决的问题","link":"#_43-rpc框架需要解决的问题","children":[]},{"level":2,"title":"44. RPC的实现基础？","slug":"_44-rpc的实现基础","link":"#_44-rpc的实现基础","children":[]},{"level":2,"title":"45. RPC使用了哪些关键技术？","slug":"_45-rpc使用了哪些关键技术","link":"#_45-rpc使用了哪些关键技术","children":[]},{"level":2,"title":"46. 主流RPC框架有哪些","slug":"_46-主流rpc框架有哪些","link":"#_46-主流rpc框架有哪些","children":[]},{"level":2,"title":"47. RPC的实现原理架构图","slug":"_47-rpc的实现原理架构图","link":"#_47-rpc的实现原理架构图","children":[]}],"git":{"createdTime":1693922657000,"updatedTime":1693922657000,"contributors":[{"name":"bincooo","email":"admin@bincooodeiMac.local","commits":1}]},"readingTime":{"minutes":32.3,"words":9690},"filePathRelative":"guide/markdown/Java面试宝典/Dubbo面试题（47道含答案）.md","localizedDate":"2023年9月5日","excerpt":"<h3> 目录</h3>\\n<ul>\\n<li><a href=\\"#_4\\">一、基础知识</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__Dubbo_5\\">1. 为什么要用 Dubbo？</a></li>\\n<li><a href=\\"#2_Dubbo__11\\">2. Dubbo 是什么？</a></li>\\n<li><a href=\\"#3_Dubbo__15\\">3. Dubbo 的使用场景有哪些？</a></li>\\n<li><a href=\\"#4_Dubbo__22\\">4. Dubbo 核心功能有哪些？</a></li>\\n<li><a href=\\"#5_Dubbo__30\\">5. Dubbo 核心组件有哪些？</a></li>\\n<li><a href=\\"#6_Dubbo__38\\">6. Dubbo 服务器注册与发现的流程？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_50\\">二、架构设计</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#7_Dubbo__51\\">7. Dubbo 的整体架构设计有哪些分层?</a></li>\\n<li><a href=\\"#8_Dubbo_Monitor__73\\">8. Dubbo Monitor 实现原理？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_89\\">三、分布式框架</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#9_Dubbo__90\\">9. Dubbo 类似的分布式框架还有哪些？</a></li>\\n<li><a href=\\"#10_Dubbo__Spring_Cloud__93\\">10. Dubbo 和 Spring Cloud 有什么关系？</a></li>\\n<li><a href=\\"#11_Dubbo__Spring_Cloud__99\\">11. Dubbo 和 Spring Cloud 有什么哪些区别？</a></li>\\n<li><a href=\\"#12_Dubbo__Dubbox__107\\">12. Dubbo 和 Dubbox 之间的区别？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_111\\">四、注册中心</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#13_Dubbo__112\\">13. Dubbo 有哪些注册中心？</a></li>\\n<li><a href=\\"#14_Dubbo__122\\">14. Dubbo 的注册中心集群挂掉，发布者和订阅者之间还能通信么？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_126\\">五、集群</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#15_Dubbo_127\\">15. Dubbo集群提供了哪些负载均衡策略？</a></li>\\n<li><a href=\\"#16_Dubbo_136\\">16. Dubbo的集群容错方案有哪些？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_149\\">六、配置</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#17_Dubbo__Spring__150\\">17. Dubbo 配置文件是如何加载到 Spring 中的？</a></li>\\n<li><a href=\\"#18__155\\">18. 说说核心的配置有哪些？</a></li>\\n<li><a href=\\"#19_Dubbo__172\\">19. Dubbo 超时设置有哪些方式？</a></li>\\n<li><a href=\\"#20__179\\">20. 服务调用超时会怎么样？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_182\\">七、通信协议</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#21_Dubbo__183\\">21. Dubbo 使用的是什么通信框架?</a></li>\\n<li><a href=\\"#22_Dubbo__186\\">22. Dubbo 支持哪些协议，它们的优缺点有哪些？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_203\\">八、设计模式</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#23_Dubbo__204\\">23. Dubbo 用到哪些设计模式？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_239\\">九、运维管理</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#24__240\\">24. 服务上线怎么兼容旧版本？</a></li>\\n<li><a href=\\"#25_Dubbo_telnet__244\\">25. Dubbo telnet 命令能做什么？</a></li>\\n<li><a href=\\"#26_Dubbo__248\\">26. Dubbo 支持服务降级吗？</a></li>\\n<li><a href=\\"#27_Dubbo__253\\">27. Dubbo 如何优雅停机？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#SPI_257\\">十、SPI</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#28_Dubbo_SPI__Java_SPI__258\\">28. Dubbo SPI 和 Java SPI 区别？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_268\\">十一、其他</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#29_Dubbo__269\\">29. Dubbo 支持分布式事务吗？</a></li>\\n<li><a href=\\"#30_Dubbo__274\\">30. Dubbo 可以对结果进行缓存吗？</a></li>\\n<li><a href=\\"#31_Dubbo__279\\">31. Dubbo 必须依赖的包有哪些？</a></li>\\n<li><a href=\\"#32_Dubbo__282\\">32. Dubbo 支持哪些序列化方式？</a></li>\\n<li><a href=\\"#33_Dubbo__285\\">33. Dubbo 在安全方面有哪些措施？</a></li>\\n<li><a href=\\"#34__289\\">34. 服务调用是阻塞的吗？</a></li>\\n<li><a href=\\"#35__294\\">35. 服务提供者能实现失效踢出是什么原理？</a></li>\\n<li><a href=\\"#36__297\\">36. 同一个服务多个注册的情况下可以直连某一个服务吗？</a></li>\\n<li><a href=\\"#37_Dubbo__300\\">37. Dubbo 服务降级，失败重试怎么做？</a></li>\\n<li><a href=\\"#38Dubbo__305\\">38.Dubbo 使用过程中都遇到了些什么问题？</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#RPC_309\\">十二、RPC</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#39_RPC_310\\">39. 为什么要有RPC</a></li>\\n<li><a href=\\"#40_RPC_323\\">40. 什么是RPC</a></li>\\n<li><a href=\\"#41_PRC_332\\">41. PRC架构组件</a></li>\\n<li><a href=\\"#42_RPCSOASOAPREST_354\\">42. RPC和SOA、SOAP、REST的区别</a></li>\\n<li><a href=\\"#43_RPC_374\\">43. RPC框架需要解决的问题？</a></li>\\n<li><a href=\\"#44_RPC_381\\">44. RPC的实现基础？</a></li>\\n<li><a href=\\"#45_RPC_387\\">45. RPC使用了哪些关键技术？</a></li>\\n<li><a href=\\"#46_RPC_410\\">46. 主流RPC框架有哪些</a></li>\\n<li><a href=\\"#47_RPC_436\\">47. RPC的实现原理架构图</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
