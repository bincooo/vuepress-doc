import{_ as l,E as n,Z as i,$ as h,a0 as e,a3 as t,a1 as a,a4 as d}from"./framework-e0d053a9.js";const _={},s=d('<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><ul><li><a href="#1MySQL__2">1、MySQL 中有哪几种锁？</a></li><li><a href="#2MySQL__8">2、MySQL 中有哪些不同的表格？</a></li><li><a href="#3MySQL__MyISAM_InnoDB__11">3、简述在MySQL 数据库中 MyISAM 和InnoDB 的区别</a></li><li><a href="#4MySQL_InnoDB__28">4、MySQL 中InnoDB 支持的四种事务隔离级别名称，以及逐级之间的区别？</a></li><li><a href="#5CHAR_VARCHAR__35">5、CHAR 和VARCHAR 的区别？</a></li><li><a href="#6_40">6、主键和候选键有什么区别？</a></li><li><a href="#7myisamchk__44">7、myisamchk 是用来做什么的？</a></li><li><a href="#8TIMESTAMP_50">8、如果一个表有一列定义为TIMESTAMP，将发生什么？</a></li><li><a href="#9_56">9、你怎么看到为表格定义的所有索引？</a></li><li><a href="#10LIKE___0__LIKE__60">10、LIKE 声明中的％和是什么意思？％ 对应于 0 个或更多字符，只是 LIKE 语句中的一个字符。</a></li><li><a href="#11_64">11、列对比运算符是什么？</a></li><li><a href="#12BLOB_TEXT__67">12、BLOB 和TEXT 有什么区别？</a></li><li><a href="#13MySQL_fetch_array_MySQL_fetch_object__72">13、MySQL_fetch_array 和MySQL_fetch_object 的区别是什么？</a></li><li><a href="#14MyISAM__77">14、MyISAM 表格将在哪里存储，并且还提供其存储格式？</a></li><li><a href="#15MySQL_DISTINCT_83">15、MySQL 如何优化DISTINCT？</a></li><li><a href="#16_50__87">16、如何显示前 50 行？</a></li><li><a href="#17_90">17、可以使用多少列创建索引？</a></li><li><a href="#18NOW_CURRENT_DATE_93">18、NOW（）和 CURRENT_DATE（）有什么区别？</a></li><li><a href="#19_96">19、什么是非标准字符串类型？</a></li><li><a href="#20_SQL__102">20、什么是通用 SQL 函数？</a></li><li><a href="#21MySQL__114">21、MySQL 支持事务吗？</a></li><li><a href="#22MySQL__121">22、MySQL 里记录货币用什么字段类型好</a></li><li><a href="#23MySQL__130">23、MySQL 有关权限的表都有哪几个？</a></li><li><a href="#24_134">24、列的字符串类型可以是什么？</a></li><li><a href="#25MySQL___141">25、MySQL 数据库作发布系统的存储，一天五万条以上的增量， 预</a></li><li><a href="#26_152">26、锁的优化策略</a></li><li><a href="#27_159">27、索引的底层实现原理和优化</a></li><li><a href="#28_164">28、什么情况下设置了索引但无法使用</a></li><li><a href="#29_MySQL_169">29、实践中如何优化 MySQL</a></li><li><a href="#30_176">30、优化数据库的方法</a></li><li><a href="#31_MySQL__187">31、简单描述 MySQL 中，索引，主键，唯一索引，联合索引</a></li><li><a href="#32_201">32、数据库中的事务是什么?</a></li><li><a href="#33SQL__215">33、SQL 注入漏洞产生的原因？如何防止？</a></li><li><a href="#34_223">34、为表中得字段选择合适得数据类型</a></li><li><a href="#35_228">35、存储时期</a></li><li><a href="#36_238">36、对于关系型数据库而言，索引是相当重要的概念，请回答</a></li><li><a href="#37_MySQL__255">37、解释 MySQL 外连接、内连接与自连接的区别</a></li><li><a href="#38Myql__261">38、Myql 中的事务回滚机制概述</a></li><li><a href="#39SQL__269">39、SQL 语言包括哪几部分？每部分都有哪些操作关键字？</a></li><li><a href="#40_274">40、完整性约束包括哪些？</a></li></ul><h2 id="_1、mysql-中有哪几种锁" tabindex="-1"><a class="header-anchor" href="#_1、mysql-中有哪几种锁" aria-hidden="true">#</a> 1、MySQL 中有哪几种锁？</h2><p>1、表级锁： 开销小， 加锁快； 不会出现死锁； 锁定粒度大， 发生锁冲突的概率最高， 并发度最低。<br> 2、行级锁： 开销大， 加锁慢； 会出现死锁； 锁定粒度最小， 发生锁冲突的概率最低， 并发度也最高。<br> 3、页面锁： 开销和加锁时间界于表锁和行锁之间； 会出现死锁； 锁定粒度界于表锁和行锁之间， 并<br> 发度一般。</p><h2 id="_2、mysql-中有哪些不同的表格" tabindex="-1"><a class="header-anchor" href="#_2、mysql-中有哪些不同的表格" aria-hidden="true">#</a> 2、MySQL 中有哪些不同的表格？</h2><p>共有 5 种类型的表格： 1、MyISAM2、Heap 3、Merge 4、INNODB 5、MISAM</p><h2 id="_3、简述在mysql-数据库中-myisam-和innodb-的区别" tabindex="-1"><a class="header-anchor" href="#_3、简述在mysql-数据库中-myisam-和innodb-的区别" aria-hidden="true">#</a> 3、简述在MySQL 数据库中 MyISAM 和InnoDB 的区别</h2><p><strong>MyISAM：</strong><br> 不支持事务， 但是每次查询都是原子的； 支持表级锁， 即每次操作是对整个表加锁； 存储表的总行<br> 数；<br> 一个 MYISAM 表有三个文件： 索引文件、表结构文件、数据文件；<br> 采用菲聚集索引， 索引文件的数据域存储指向数据文件的指针。辅索引与主索引基本一致， 但是辅索<br> 引不用保证唯一性。<br><strong>InnoDb：</strong><br> 支持 ACID 的事务， 支持事务的四种隔离级别； 支持行级锁及外键约束： 因此可以支持写并发； 不存<br> 储总行数：<br> 一个 InnoDb 引擎存储在一个文件空间（ 共享表空间， 表大小不受操作系统控制，<br> 一个表可能分布在多个文件里）， 也有可能为多个（ 设置为独立表空， 表大小受操作系统文件大小限<br> 制， 一般为 2G）， 受操作系统文件大小的限制；<br> 主键索引采用聚集索引（ 索引的数据域存储数据文件本身）， 辅索引的数据域存储主键的值； 因此从<br> 辅索引查找数据， 需要先通过辅索引找到主键值， 再访问辅索引； 最好使用自增主键， 防止插入数据<br> 时， 为维持 B+树结构， 文件的大调整。</p><h2 id="_4、mysql-中innodb-支持的四种事务隔离级别名称-以及逐级之间的区别" tabindex="-1"><a class="header-anchor" href="#_4、mysql-中innodb-支持的四种事务隔离级别名称-以及逐级之间的区别" aria-hidden="true">#</a> 4、MySQL 中InnoDB 支持的四种事务隔离级别名称，以及逐级之间的区别？</h2><p>SQL 标准定义的四个隔离级别为：<br> 1、read uncommited ： 读到未提交数据<br> 2、read committed： 脏读， 不可重复读<br> 3、repeatable read： 可重读<br> 4、serializable ： 串行事物</p><h2 id="_5、char-和varchar-的区别" tabindex="-1"><a class="header-anchor" href="#_5、char-和varchar-的区别" aria-hidden="true">#</a> 5、CHAR 和VARCHAR 的区别？</h2><p>1、CHAR 和 VARCHAR 类型在存储和检索方面有所不同<br> 2、CHAR 列长度固定为创建表时声明的长度， 长度值范围是 1 到 255 当 CHAR 值被存储时， 它们被<br> 用空格填充到特定长度， 检索 CHAR 值时需删除尾随空格。</p><h2 id="_6、主键和候选键有什么区别" tabindex="-1"><a class="header-anchor" href="#_6、主键和候选键有什么区别" aria-hidden="true">#</a> 6、主键和候选键有什么区别？</h2><p>表格的每一行都由主键唯一标识,一个表只有一个主键。<br> 主键也是候选键。按照惯例， 候选键可以被指定为主键， 并且可以用于任何外键引用。</p><h2 id="_7、myisamchk-是用来做什么的" tabindex="-1"><a class="header-anchor" href="#_7、myisamchk-是用来做什么的" aria-hidden="true">#</a> 7、myisamchk 是用来做什么的？</h2><p>它用来压缩 MyISAM 表， 这减少了磁盘或内存使用。<br> MyISAM Static 和 MyISAM Dynamic 有什么区别？<br> 在 MyISAM Static 上的所有字段有固定宽度。动态 MyISAM 表将具有像 TEXT， BLOB 等字段， 以适应不同长度的数据类型。<br> MyISAM Static 在受损情况下更容易恢复。</p><h2 id="_8、如果一个表有一列定义为timestamp-将发生什么" tabindex="-1"><a class="header-anchor" href="#_8、如果一个表有一列定义为timestamp-将发生什么" aria-hidden="true">#</a> 8、如果一个表有一列定义为TIMESTAMP，将发生什么？</h2><p>每当行被更改时， 时间戳字段将获取当前时间戳。列设置为 AUTO INCREMENT 时， 如果在表中达到<br> 最大值， 会发生什么情况？它会停止递增， 任何进一步的插入都将产生错误， 因为密钥已被使用。<br> 怎样才能找出最后一次插入时分配了哪个自动增量？LAST_INSERT_ID 将返回由 Auto_increment 分配<br> 的最后一个值， 并且不需要指定表名称。</p><h2 id="_9、你怎么看到为表格定义的所有索引" tabindex="-1"><a class="header-anchor" href="#_9、你怎么看到为表格定义的所有索引" aria-hidden="true">#</a> 9、你怎么看到为表格定义的所有索引？</h2><p>索引是通过以下方式为表格定义的：<br> SHOW INDEX FROM ;</p><h2 id="_10、like-声明中的-和是什么意思-对应于-0-个或更多字符-只是-like-语句中的一个字符。" tabindex="-1"><a class="header-anchor" href="#_10、like-声明中的-和是什么意思-对应于-0-个或更多字符-只是-like-语句中的一个字符。" aria-hidden="true">#</a> 10、LIKE 声明中的％和是什么意思？％ 对应于 0 个或更多字符，只是 LIKE 语句中的一个字符。</h2><p>如何在 Unix 和 MySQL 时间戳之间进行转换？UNIX_TIMESTAMP 是从 MySQL 时间戳转换为 Unix 时<br> 间戳的命令FROM_UNIXTIME 是从 Unix 时间戳转换为 MySQL 时间戳的命令</p><h2 id="_11、列对比运算符是什么" tabindex="-1"><a class="header-anchor" href="#_11、列对比运算符是什么" aria-hidden="true">#</a> 11、列对比运算符是什么？</h2><p>在 SELECT 语句的列比较中使用=，&lt;&gt;，&lt;=，&lt;，&gt; =，&gt;，&lt;&lt;，&gt;&gt;，&lt;=&gt;，AND， OR 或 LIKE 运算符。</p><h2 id="_12、blob-和text-有什么区别" tabindex="-1"><a class="header-anchor" href="#_12、blob-和text-有什么区别" aria-hidden="true">#</a> 12、BLOB 和TEXT 有什么区别？</h2><p>BLOB 是一个二进制对象， 可以容纳可变数量的数据。TEXT 是一个不区分大小写的 BLOB。<br> BLOB 和 TEXT 类型之间的唯一区别在于对 BLOB 值进行排序和比较时区分大小写， 对 TEXT 值不区分<br> 大小写。</p><h2 id="_13、mysql-fetch-array-和mysql-fetch-object-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_13、mysql-fetch-array-和mysql-fetch-object-的区别是什么" aria-hidden="true">#</a> 13、MySQL_fetch_array 和MySQL_fetch_object 的区别是什么？</h2><p>以下是 MySQL_fetch_array 和 MySQL_fetch_object 的区别：<br> MySQL_fetch_array（ ） – 将结果行作为关联数组或来自数据库的常规数组返回。<br> MySQL_fetch_object – 从数据库返回结果行作为对象。</p><h2 id="_14、myisam-表格将在哪里存储-并且还提供其存储格式" tabindex="-1"><a class="header-anchor" href="#_14、myisam-表格将在哪里存储-并且还提供其存储格式" aria-hidden="true">#</a> 14、MyISAM 表格将在哪里存储，并且还提供其存储格式？</h2><p>每个 MyISAM 表格以三种格式存储在磁盘上：<br> ·“.frm” 文件存储表定义<br> ·数据文件具有“.MYD”（ MYData）<br> 扩展名索引文件具有“.MYI”（ MYIndex） 扩展名</p><h2 id="_15、mysql-如何优化distinct" tabindex="-1"><a class="header-anchor" href="#_15、mysql-如何优化distinct" aria-hidden="true">#</a> 15、MySQL 如何优化DISTINCT？</h2><p>DISTINCT 在所有列上转换为 GROUP BY， 并与 ORDER BY 子句结合使用。SELECT DISTINCT t1.a<br> FROM t1,t2 where t1.a=t2.a;</p><h2 id="_16、如何显示前-50-行" tabindex="-1"><a class="header-anchor" href="#_16、如何显示前-50-行" aria-hidden="true">#</a> 16、如何显示前 50 行？</h2><p>在 MySQL 中， 使用以下代码查询显示前 50 行： SELECT*FROM TABLE LIMIT 0,50;</p><h2 id="_17、可以使用多少列创建索引" tabindex="-1"><a class="header-anchor" href="#_17、可以使用多少列创建索引" aria-hidden="true">#</a> 17、可以使用多少列创建索引？</h2><p>任何标准表最多可以创建 16 个索引列。</p><h2 id="_18、now-和-current-date-有什么区别" tabindex="-1"><a class="header-anchor" href="#_18、now-和-current-date-有什么区别" aria-hidden="true">#</a> 18、NOW（）和 CURRENT_DATE（）有什么区别？</h2><p>NOW（） 命令用于显示当前年份， 月份， 日期， 小时， 分钟和秒。CURRENT_DATE（） 仅显示当前年份， 月份和日期。</p><h2 id="_19、什么是非标准字符串类型" tabindex="-1"><a class="header-anchor" href="#_19、什么是非标准字符串类型" aria-hidden="true">#</a> 19、什么是非标准字符串类型？</h2><p>1、TINYTEXT<br> 2、TEXT<br> 3、MEDIUMTEXT<br> 4、LONGTEXT</p><h2 id="_20、什么是通用-sql-函数" tabindex="-1"><a class="header-anchor" href="#_20、什么是通用-sql-函数" aria-hidden="true">#</a> 20、什么是通用 SQL 函数？</h2><p>1、CONCAT(A, B) – 连接两个字符串值以创建单个字符串输出。通常用于将两个或多个字段合并为一个<br> 字段。<br> 2、FORMAT(X, D)- 格式化数字 X 到 D 有效数字。<br> 3、CURRDATE(), CURRTIME()- 返回当前日期或时间。<br> 4、NOW（） – 将当前日期和时间作为一个值返回。<br> 5、MONTH（）， DAY（ ）， YEAR（）， WEEK（）， WEEKDAY（） – 从日期值中提取给定数据。<br> 6、HOUR（）， MINUTE（）， SECOND（） – 从时间值中提取给定数据。<br> 7、DATEDIFF（ A， B） – 确定两个日期之间的差异， 通常用于计算年龄<br> 8、SUBTIMES（ A， B） – 确定两次之间的差异。<br> 9、FROMDAYS（ INT） – 将整数天数转换为日期值。</p><h2 id="_21、mysql-支持事务吗" tabindex="-1"><a class="header-anchor" href="#_21、mysql-支持事务吗" aria-hidden="true">#</a> 21、MySQL 支持事务吗？</h2><p>在缺省模式下，MySQL 是 autocommit 模式的，所有的数据库更新操作都会即时提交， 所以在缺省情<br> 况下， MySQL 是不支持事务的。<br> 但是如果你的 MySQL 表类型是使用 InnoDB Tables 或 BDB tables 的话， 你的MySQL 就可以使用事<br> 务处理,使用 SET AUTOCOMMIT=0 就可以使 MySQL 允许在非 autocommit 模式， 在非<br> autocommit 模式下，你必须使用 COMMIT 来提交你的更改，或者用 ROLLBACK 来回滚你的更改。</p><h2 id="_22、mysql-里记录货币用什么字段类型好" tabindex="-1"><a class="header-anchor" href="#_22、mysql-里记录货币用什么字段类型好" aria-hidden="true">#</a> 22、MySQL 里记录货币用什么字段类型好</h2><p>NUMERIC 和 DECIMAL 类型被 MySQL 实现为同样的类型， 这在 SQL92 标准允许。他们被用于保存<br> 值， 该值的准确精度是极其重要的值， 例如与金钱有关的数据。当声明一个类是这些类型之一时， 精<br> 度和规模的能被(并且通常是)指定。<br> 例如：<br> salary DECIMAL(9,2)<br> 在这个例子中， 9(precision)代表将被用于存储值的总的小数位数，而 2(scale)代表将被用于存储小数<br> 点后的位数。因此， 在这种情况下， 能被存储在 salary 列中的值的范围是从-9999999.99 到9999999.99。</p><h2 id="_23、mysql-有关权限的表都有哪几个" tabindex="-1"><a class="header-anchor" href="#_23、mysql-有关权限的表都有哪几个" aria-hidden="true">#</a> 23、MySQL 有关权限的表都有哪几个？</h2><p>MySQL 服务器通过权限表来控制用户对数据库的访问， 权限表存放在 MySQL 数据库里，由<br> MySQL_install_db 脚本初始化。这些权限表分别 user，db，table_priv， columns_priv 和 host 。</p><h2 id="_24、列的字符串类型可以是什么" tabindex="-1"><a class="header-anchor" href="#_24、列的字符串类型可以是什么" aria-hidden="true">#</a> 24、列的字符串类型可以是什么？</h2><p>字符串类型是： 1、SET<br> 2、BLOB<br> 3、ENUM<br> 4、CHAR<br> 5、TEXT</p><h2 id="_25、mysql-数据库作发布系统的存储-一天五万条以上的增量-预" tabindex="-1"><a class="header-anchor" href="#_25、mysql-数据库作发布系统的存储-一天五万条以上的增量-预" aria-hidden="true">#</a> 25、MySQL 数据库作发布系统的存储，一天五万条以上的增量， 预</h2><p>计运维三年,怎么优化？<br> 1、设计良好的数据库结构， 允许部分数据冗余， 尽量避免 join 查询， 提高效率。<br> 2、选择合适的表字段数据类型和存储引擎， 适当的添加索引。<br> 3、MySQL 库主从读写分离。<br> 4、找规律分表， 减少单表中的数据量提高查询速度。5、添加缓存机制， 比如 memcached， apc<br> 等。<br> 6、不经常改动的页面， 生成静态页面。<br> 7、书写高效率的 SQL。比如 SELECT * FROM TABEL 改为 SELECT field_1, field_2, field_3 FROM<br> TABLE.</p><h2 id="_26、锁的优化策略" tabindex="-1"><a class="header-anchor" href="#_26、锁的优化策略" aria-hidden="true">#</a> 26、锁的优化策略</h2><p>1、读写分离<br> 2、分段加锁<br> 3、减少锁持有的时间<br> 4、. 多个线程尽量以相同的顺序去获取资源<br> 5、不能将锁的粒度过于细化， 不然可能会出现线程的加锁和释放次数过多， 反而效率不如一次加一把大锁。</p><h2 id="_27、索引的底层实现原理和优化" tabindex="-1"><a class="header-anchor" href="#_27、索引的底层实现原理和优化" aria-hidden="true">#</a> 27、索引的底层实现原理和优化</h2><p>B+树， 经过优化的 B+树<br> 主要是在所有的叶子结点中增加了指向下一个叶子节点的指针， 因此 InnoDB 建议为大部分表使用默认<br> 自增的主键作为主索引。</p><h2 id="_28、什么情况下设置了索引但无法使用" tabindex="-1"><a class="header-anchor" href="#_28、什么情况下设置了索引但无法使用" aria-hidden="true">#</a> 28、什么情况下设置了索引但无法使用</h2><p>1、以“%” 开头的 LIKE 语句， 模糊匹配<br> 2、OR 语句前后没有同时使用索引<br> 3、数据类型出现隐式转化（ 如 varchar 不加单引号的话可能会自动转换为 int 型）</p><h2 id="_29、实践中如何优化-mysql" tabindex="-1"><a class="header-anchor" href="#_29、实践中如何优化-mysql" aria-hidden="true">#</a> 29、实践中如何优化 MySQL</h2><p>最好是按照以下顺序优化：<br> 1、SQL 语句及索引的优化<br> 2、数据库表结构的优化<br> 3、系统配置的优化<br> 4、硬件的优化</p><h2 id="_30、优化数据库的方法" tabindex="-1"><a class="header-anchor" href="#_30、优化数据库的方法" aria-hidden="true">#</a> 30、优化数据库的方法</h2><p>1、选取最适用的字段属性，尽可能减少定义字段宽度，尽量把字段设置 NOTNULL， 例如’ 省份’、’ 性<br> 别’ 最好适用 ENUM<br> 2、使用连接(JOIN)来代替子查询<br> 3、适用联合(UNION)来代替手动创建的临时表<br> 4、事务处理<br> 5、锁定表、优化事务处理<br> 6、适用外键， 优化锁定表<br> 7、建立索引<br> 8、优化查询语句</p><h2 id="_31、简单描述-mysql-中-索引-主键-唯一索引-联合索引" tabindex="-1"><a class="header-anchor" href="#_31、简单描述-mysql-中-索引-主键-唯一索引-联合索引" aria-hidden="true">#</a> 31、简单描述 MySQL 中，索引，主键，唯一索引，联合索引</h2><p>的区别，对数据库的性能有什么影响（从读写两方面）<br> 索引是一种特殊的文件(InnoDB 数据表上的索引是表空间的一个组成部分)， 它们包含着对数据表里所<br> 有记录的引用指针。<br> 普通索引(由关键字 KEY 或 INDEX 定义的索引)的唯一任务是加快对数据的访问速度。<br> 普通索引允许被索引的数据列包含重复的值。如果能确定某个数据列将只包含彼此各不相同的值， 在为<br> 这个数据列创建索引的时候就应该用关键字 UNIQUE 把它定义为一个唯一索引。也就是说， 唯一索引<br> 可以保证数据记录的唯一性。<br> 主键， 是一种特殊的唯一索引， 在一张表中只能定义一个主键索引， 主键用于唯一标识一条记录， 使<br> 用关键字 PRIMARY KEY 来创建。<br> 索引可以覆盖多个数据列，如像 INDEX(columnA, columnB)索引，这就是联合索引。<br> 索引可以极大的提高数据的查询速度， 但是会降低插入、删除、更新表的速度， 因为在执行这些写操<br> 作时， 还要操作索引文件。</p><h2 id="_32、数据库中的事务是什么" tabindex="-1"><a class="header-anchor" href="#_32、数据库中的事务是什么" aria-hidden="true">#</a> 32、数据库中的事务是什么?</h2><p>事务（ transaction） 是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功， 则认为<br> 事务成功， 即使只有一个操作失败， 事务也不成功。如果所有操作完成， 事务则提交， 其修改将作用<br> 于所有其他数据库进程。如果一个操作失败， 则事务将回滚， 该事务所有操作的影响都将取消。<br> 事务特性：<br> 1、原子性： 即不可分割性， 事务要么全部被执行， 要么就全部不被执行。<br> 2、一致性或可串性。事务的执行使得数据库从一种正确状态转换成另一种正确状 态<br> 3、隔离性。在事务正确提交之前，不允许把该事务对数据的任何改变提供给任何 其他事务，<br> 4、持久性。事务正确提交后， 其结果将永久保存在数据库中， 即使在事务提交后有了其他故障， 事<br> 务的处理结果也会得到保存。或者这样理解：事务就是被绑定在一起作为一个逻辑工作单元的 SQL 语<br> 句分组， 如果任何一个语句操作失败那么整个操作就被失败， 以后操作就会回滚到操作前状态， 或者<br> 是上有个节点。为了确保要么执行， 要么不执行， 就可以使用事务。要将有组语句作为事务考虑， 就<br> 需要通过 ACID 测试， 即原子性， 一致性， 隔离性和持久性。</p><h2 id="_33、sql-注入漏洞产生的原因-如何防止" tabindex="-1"><a class="header-anchor" href="#_33、sql-注入漏洞产生的原因-如何防止" aria-hidden="true">#</a> 33、SQL 注入漏洞产生的原因？如何防止？</h2><p>SQL 注入产生的原因： 程序开发过程中不注意规范书写 sql 语句和对特殊字符进行过滤，导致客户端可<br> 以通过全局变量 POST 和 GET 提交一些 sql 语句正常执行。防止 SQL 注入的方式：<br> 开启配置文件中的 magic_quotes_gpc 和 magic_quotes_runtime 设置<br> 执行 sql 语句时使用 addslashes 进行 sql 语句转换Sql 语句书写尽量不要省略双引号和单引号。<br> 过滤掉 sql 语句中的一些关键词： update、insert、delete、select、 * 。<br> 提高数据库表和字段的命名技巧， 对一些重要的字段根据程序的特点命名， 取不易被猜到的。</p><h2 id="_34、为表中得字段选择合适得数据类型" tabindex="-1"><a class="header-anchor" href="#_34、为表中得字段选择合适得数据类型" aria-hidden="true">#</a> 34、为表中得字段选择合适得数据类型</h2><p>字段类型优先级: 整形&gt;date,time&gt;enum,char&gt;varchar&gt;blob,text<br> 优先考虑数字类型， 其次是日期或者二进制类型， 最后是字符串类型， 同级别得数据类型， 应该优先<br> 选择占用空间小的数据类型</p><h2 id="_35、存储时期" tabindex="-1"><a class="header-anchor" href="#_35、存储时期" aria-hidden="true">#</a> 35、存储时期</h2><p>Datatime:以 YYYY-MM-DD HH:MM:SS 格式存储时期时间， 精确到秒， 占用 8 个字节得存储空间，<br> datatime 类型与时区无关<br> Timestamp:以时间戳格式存储，占用 4 个字节，范围小 1970-1-1 到 2038-1-19， 显示依赖于所指定<br> 得时区， 默认在第一个列行的数据修改时可以自动得修改timestamp 列得值 Date:（ 生日） 占用得字<br> 节数比使用字符串.datatime.int 储存要少， 使用 date 只需要 3 个字节， 存储日期月份， 还可以利用<br> 日期时间函数进行日期间得计算Time:存储时间部分得数据<br> 注意:不要使用字符串类型来存储日期时间数据（ 通常比字符串占用得储存空间小， 在进行查找过滤可<br> 以利用日期得函数）使用 int 存储日期时间不如使用 timestamp 类型</p><h2 id="_36、对于关系型数据库而言-索引是相当重要的概念-请回答" tabindex="-1"><a class="header-anchor" href="#_36、对于关系型数据库而言-索引是相当重要的概念-请回答" aria-hidden="true">#</a> 36、对于关系型数据库而言，索引是相当重要的概念，请回答</h2><p>有关索引的几个问题：<br> 1、索引的目的是什么？<br> 快速访问数据表中的特定信息， 提高检索速度<br> 创建唯一性索引， 保证数据库表中每一行数据的唯一性。加速表和表之间的连接<br> 2、使用分组和排序子句进行数据检索时， 可以显著减少查询中分组和排序的时间2、索引对数据库系统<br> 的负面影响是什么？<br> 负面影响：<br> 创建索引和维护索引需要耗费时间， 这个时间随着数据量的增加而增加； 索引需要占用物理空间， 不<br> 光是表需要占用数据空间， 每个索引也需要占用物理空间； 当对表进行增、删、改、的时候索引也要<br> 动态维护， 这样就降低了数据的维护速度。<br> 3、为数据表建立索引的原则有哪些？<br> 在最频繁使用的、用以缩小查询范围的字段上建立索引。 在频繁使用的、需要排序的字段上建立索引<br> 4、什么情况下不宜建立索引？<br> 对于查询中很少涉及的列或者重复值比较多的列， 不宜建立索引。对于一些特殊的数据类型， 不宜建<br> 立索引， 比如文本字段（ text） 等</p><h2 id="_37、解释-mysql-外连接、内连接与自连接的区别" tabindex="-1"><a class="header-anchor" href="#_37、解释-mysql-外连接、内连接与自连接的区别" aria-hidden="true">#</a> 37、解释 MySQL 外连接、内连接与自连接的区别</h2><p>先说什么是交叉连接: 交叉连接又叫笛卡尔积，它是指不使用任何条件，直接将一个表的所有记录和另<br> 一个表中的所有记录一一匹配。内连接 则是只有条件的交叉连接，根据某个条件筛选出符合条件的记<br> 录，不符合条件的记录不会出现在结果集中， 即内连接只连接匹配的行。<br> 外连接 其结果集中不仅包含符合连接条件的行，而且还会包括左表、右表或两个表中的所有数据行， 这三种情况依次称之为左外连接， 右外连接， 和全外连接。左外连接， 也称左连接，左表为主表， 左表中的所有记录都会出现在结果集中， 对于那些在右表中并没有匹配的记录， 仍然要显示， 右边对应的那些字段值以NULL 来填充。右外连接，也称右连接，右表为主表，右表中的所有记录都会出现在结果集中。左连接和右连接可以互换， MySQL 目前还不支持全外连接。</p><h2 id="_38、myql-中的事务回滚机制概述" tabindex="-1"><a class="header-anchor" href="#_38、myql-中的事务回滚机制概述" aria-hidden="true">#</a> 38、Myql 中的事务回滚机制概述</h2><p>事务是用户定义的一个数据库操作序列， 这些操作要么全做要么全不做， 是一个不可分割的工作单<br> 位， 事务回滚是指将该事务已经完成的对数据库的更新操作撤销。要同时修改数据库中两个不同表<br> 时， 如果它们不是一个事务的话， 当第一个表修改完， 可能第二个表修改过程中出现了异常而没能修<br> 改， 此时就只有第二个表依旧是未修改之前的状态， 而第一个表已经被修改完毕。而当你把它们设定<br> 为一个事务的时候， 当第一个表修改完， 第二表修改出现异常而没能修改， 第一个表和第二个表都要<br> 回到未修改的状态， 这就是所谓的事务回滚</p><h2 id="_39、sql-语言包括哪几部分-每部分都有哪些操作关键字" tabindex="-1"><a class="header-anchor" href="#_39、sql-语言包括哪几部分-每部分都有哪些操作关键字" aria-hidden="true">#</a> 39、SQL 语言包括哪几部分？每部分都有哪些操作关键字？</h2><p>SQL 语言包括数据定义(DDL)、数据操纵(DML),数据控制(DCL)和数据查询（ DQL） 四个部分。<br> 数据定义： Create Table,Alter Table,Drop Table, Craete/Drop Index 等数据操纵： Select<br> ,insert,update,delete,数据控制： grant,revoke 数据查询： select</p><h2 id="_40、完整性约束包括哪些" tabindex="-1"><a class="header-anchor" href="#_40、完整性约束包括哪些" aria-hidden="true">#</a> 40、完整性约束包括哪些？</h2><p>数据完整性(Data Integrity)是指数据的精确(Accuracy)和可靠性(Reliability)。<br> 分为以下四类：<br> 1、实体完整性： 规定表的每一行在表中是惟一的实体。<br> 2、域完整性：是指表中的列必须满足某种特定的数据类型约束，其中约束又包括 取值范围、精度等<br> 规定。<br> 3、参照完整性： 是指两个表的主关键字和外关键字的数据应一致，保证了表之间的数据的一致性，<br> 防止了数据丢失或无意义的数据在数据库中扩散。<br> 4、用户定义的完整性：不同的关系数据库系统根据其应用环境的不同，往往还需 要一些特殊的约束<br> 条件。用户定义的完整性即是针对某个特定关系数据库的约束条件， 它反映某一具体应用必须满足的语<br> 义要求。<br> 与表有关的约束：包括列约束(NOT NULL（ 非空约束）)和表约束(PRIMARY KEY、foreign key、<br> check、UNIQUE) 。</p><hr><p><strong>史上最全Java面试宝典，BAT大厂面试必备。整理不易，建议先关注点赞加收藏</strong></p>',84),o=e("thead",null,[e("tr",null,[e("th",null,"序号"),e("th",null,"名称"),e("th",null,"地址")])],-1),c=e("td",null,"1",-1),b=e("td",null,"Java基础面试题（91道含答案）",-1),u={href:"https://blog.csdn.net/qq_30999361/article/details/124482581",target:"_blank",rel:"noopener noreferrer"},p=e("td",null,"2",-1),f=e("td",null,"Java并发编程面试题 （123道含答案）",-1),M={href:"https://blog.csdn.net/qq_30999361/article/details/124545403",target:"_blank",rel:"noopener noreferrer"},y=e("td",null,"3",-1),S=e("td",null,"Java异常面试题 （33道含答案）",-1),L={href:"https://blog.csdn.net/qq_30999361/article/details/124560006",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,"4",-1),m=e("td",null,"Java虚拟机（JVM）面试题（51道含答案）",-1),T={href:"https://blog.csdn.net/qq_30999361/article/details/124532763",target:"_blank",rel:"noopener noreferrer"},I=e("td",null,"5",-1),Q=e("td",null,"Java集合面试题（52道含答案）",-1),E={href:"https://blog.csdn.net/qq_30999361/article/details/124503952",target:"_blank",rel:"noopener noreferrer"},g=e("td",null,"6",-1),A=e("td",null,"Linux面试题（50道含答案）",-1),D={href:"https://blog.csdn.net/qq_30999361/article/details/124575798",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,"7",-1),R=e("td",null,"Memcache面试题（23道含答案）",-1),N={href:"https://blog.csdn.net/qq_30999361/article/details/124596870",target:"_blank",rel:"noopener noreferrer"},B=e("td",null,"8",-1),C=e("td",null,"Mybatiss面试题 （37道含答案）",-1),O={href:"https://blog.csdn.net/qq_30999361/article/details/124560907",target:"_blank",rel:"noopener noreferrer"},k=e("td",null,"9",-1),U=e("td",null,"MySQL面试题（40道含答案）",-1),Y={href:"https://blog.csdn.net/qq_30999361/article/details/124506169",target:"_blank",rel:"noopener noreferrer"},H=e("td",null,"10",-1),X=e("td",null,"Netty面试题（49道含答案）",-1),v={href:"https://blog.csdn.net/qq_30999361/article/details/124617122",target:"_blank",rel:"noopener noreferrer"},K=e("td",null,"11",-1),F=e("td",null,"Nginx面试题（23道含答案）",-1),P={href:"https://blog.csdn.net/qq_30999361/article/details/124597174",target:"_blank",rel:"noopener noreferrer"},V=e("td",null,"12",-1),j=e("td",null,"RabbitMQ面试题（22道含答案）",-1),J={href:"https://blog.csdn.net/qq_30999361/article/details/124533998",target:"_blank",rel:"noopener noreferrer"},W=e("td",null,"13",-1),G=e("td",null,"Redis面试题（70道含答案）",-1),w={href:"https://blog.csdn.net/qq_30999361/article/details/124459566",target:"_blank",rel:"noopener noreferrer"},Z=e("td",null,"14",-1),z=e("td",null,"SpringBoot面试题（44道含答案）",-1),$={href:"https://blog.csdn.net/qq_30999361/article/details/124461725",target:"_blank",rel:"noopener noreferrer"},ee=e("td",null,"15",-1),re=e("td",null,"SpringCloud面试题（49道含答案）",-1),te={href:"https://blog.csdn.net/qq_30999361/article/details/124430712",target:"_blank",rel:"noopener noreferrer"},ae=e("td",null,"16",-1),le=e("td",null,"SpringMVC面试题（29道含答案）",-1),ne={href:"https://blog.csdn.net/qq_30999361/article/details/124519135",target:"_blank",rel:"noopener noreferrer"},ie=e("td",null,"17",-1),he=e("td",null,"Spring面试题（75道含答案）",-1),de={href:"https://blog.csdn.net/qq_30999361/article/details/124519472",target:"_blank",rel:"noopener noreferrer"},_e=e("td",null,"18",-1),se=e("td",null,"TCP、UDP、Socket、Http网络编程面试题（47道含答案）",-1),oe={href:"https://blog.csdn.net/qq_30999361/article/details/124617792",target:"_blank",rel:"noopener noreferrer"},ce=e("td",null,"19",-1),be=e("td",null,"Tomcat面试题（15道含答案）",-1),ue={href:"https://blog.csdn.net/qq_30999361/article/details/124576964",target:"_blank",rel:"noopener noreferrer"},pe=e("td",null,"20",-1),fe=e("td",null,"Zookeeper面试题（28道含答案）",-1),Me={href:"https://blog.csdn.net/qq_30999361/article/details/124596208",target:"_blank",rel:"noopener noreferrer"},ye=e("td",null,"21",-1),Se=e("td",null,"多线程面试题（60道含答案）",-1),Le={href:"https://blog.csdn.net/qq_30999361/article/details/124596462",target:"_blank",rel:"noopener noreferrer"},qe=e("td",null,"22",-1),me=e("td",null,"设计模式面试题（14道含答案）",-1),Te={href:"https://blog.csdn.net/qq_30999361/article/details/124637874",target:"_blank",rel:"noopener noreferrer"},Ie=e("td",null,"23",-1),Qe=e("td",null,"BIO、NIO、AIO、Netty面试题（35道含答案）",-1),Ee={href:"https://blog.csdn.net/qq_30999361/article/details/124653616",target:"_blank",rel:"noopener noreferrer"},ge=e("td",null,"24",-1),Ae=e("td",null,"Dubbo面试题（47道含答案）",-1),De={href:"https://blog.csdn.net/qq_30999361/article/details/124637288",target:"_blank",rel:"noopener noreferrer"},xe=e("td",null,"25",-1),Re=e("td",null,"ElasticSearch面试题（31道含答案）",-1),Ne={href:"https://blog.csdn.net/qq_30999361/article/details/124619240",target:"_blank",rel:"noopener noreferrer"},Be=e("td",null,"26",-1),Ce=e("td",null,"Git常用命令（63条）",-1),Oe={href:"https://blog.csdn.net/qq_30999361/article/details/124438420",target:"_blank",rel:"noopener noreferrer"};function ke(Ue,Ye){const r=n("ExternalLinkIcon");return i(),h("div",null,[s,e("table",null,[o,e("tbody",null,[e("tr",null,[c,b,e("td",null,[e("a",u,[t("（点击查看）"),a(r)])])]),e("tr",null,[p,f,e("td",null,[e("a",M,[t("（点击查看）"),a(r)])])]),e("tr",null,[y,S,e("td",null,[e("a",L,[t("（点击查看）"),a(r)])])]),e("tr",null,[q,m,e("td",null,[e("a",T,[t("（点击查看）"),a(r)])])]),e("tr",null,[I,Q,e("td",null,[e("a",E,[t("（点击查看）"),a(r)])])]),e("tr",null,[g,A,e("td",null,[e("a",D,[t("（点击查看）"),a(r)])])]),e("tr",null,[x,R,e("td",null,[e("a",N,[t("（点击查看）"),a(r)])])]),e("tr",null,[B,C,e("td",null,[e("a",O,[t("（点击查看）"),a(r)])])]),e("tr",null,[k,U,e("td",null,[e("a",Y,[t("（点击查看）"),a(r)])])]),e("tr",null,[H,X,e("td",null,[e("a",v,[t("（点击查看）"),a(r)])])]),e("tr",null,[K,F,e("td",null,[e("a",P,[t("（点击查看）"),a(r)])])]),e("tr",null,[V,j,e("td",null,[e("a",J,[t("（点击查看）"),a(r)])])]),e("tr",null,[W,G,e("td",null,[e("a",w,[t("（点击查看）"),a(r)])])]),e("tr",null,[Z,z,e("td",null,[e("a",$,[t("（点击查看）"),a(r)])])]),e("tr",null,[ee,re,e("td",null,[e("a",te,[t("（点击查看）"),a(r)])])]),e("tr",null,[ae,le,e("td",null,[e("a",ne,[t("（点击查看）"),a(r)])])]),e("tr",null,[ie,he,e("td",null,[e("a",de,[t("（点击查看）"),a(r)])])]),e("tr",null,[_e,se,e("td",null,[e("a",oe,[t("（点击查看）"),a(r)])])]),e("tr",null,[ce,be,e("td",null,[e("a",ue,[t("（点击查看）"),a(r)])])]),e("tr",null,[pe,fe,e("td",null,[e("a",Me,[t("（点击查看）"),a(r)])])]),e("tr",null,[ye,Se,e("td",null,[e("a",Le,[t("（点击查看）"),a(r)])])]),e("tr",null,[qe,me,e("td",null,[e("a",Te,[t("（点击查看）"),a(r)])])]),e("tr",null,[Ie,Qe,e("td",null,[e("a",Ee,[t("（点击查看）"),a(r)])])]),e("tr",null,[ge,Ae,e("td",null,[e("a",De,[t("（点击查看）"),a(r)])])]),e("tr",null,[xe,Re,e("td",null,[e("a",Ne,[t("（点击查看）"),a(r)])])]),e("tr",null,[Be,Ce,e("td",null,[e("a",Oe,[t("（点击查看）"),a(r)])])])])])])}const Xe=l(_,[["render",ke],["__file","MySQL面试题（40道含答案）.html.vue"]]);export{Xe as default};
