---
title: 对graalvm、springboot3.0一些新特性的探究
head:
  - - meta
    - name: referrer
      content: no-referrer
---



## 环境

>系统: Intel core Mac Ventura13.0.1
>
>工具: 
>
>​	- Idea: 2022.2.3  gradle: 7.4 (idea自带的)
>
>​	- openjdk: version "17.0.5" 2022-10-18
>
>​	- graalvm: CE 22.3.0





## 步骤

###  1. 安装 
graalvm 下载地址[[点我](https://www.graalvm.org/downloads/)] 

安装过程挺简单的就不多介绍了。 

安装完成后配置```JAVA_HOME```, 可参考我的配置但不一定要照抄

```bash
#!/bin/bash

declare useJdk()
{
    local jdk
    local machines=/Library/Java/JavaVirtualMachines
    if [ $1 = 'jdk11' ]; then
        jdk=$machines/jdk-11.jdk/Contents/Home
    elif [ $1 = 'jdk17'  ]; then
        jdk=$machines/jdk-17.jdk/Contents/Home
    elif [ $1 = 'jdk19' ]; then
        jdk=$machines/jdk-19.jdk/Contents/Home
    elif [ $1 = 'gdk17' ]; then
        jdk=$machines/graalvm-ce-java17/Contents/Home
    else
        jdk=$JAVA_HOME
    fi
    export JAVA_HOME=$jdk
    export PATH=$JAVA_HOME/bin:$PATH
}

#jdk
alias jdk11="useJdk jdk11"
alias jdk17="useJdk jdk17"
alias jdk19="useJdk jdk19"
#gdk
alias gdk17="useJdk gdk17"

# 若不需要指定版本把下面一行注释，Mac会识别JavaVirtualMachines目录下的jdk，并将最新版作为默认
useJdk gdk17
# 切换时在 控制台输入 jdk11 或 gdk17 即可

```

在控制台输入指令查看是否配置成功

```bash
java -version
```

如图：

![img](https://i0.hdslb.com/bfs/album/7e60849511b78a6d260bbf7f2ecd12e010a3691f.png)









graalvm 安装native-image 工具

```bash
# 控制台输入安装
gu install native-image
# 查看是否安装成功
native-image --help
```

最后在Idea中配置项目使用的jdk，预备工作就算完成了

![img](https://i0.hdslb.com/bfs/album/d761f8d1ab8b86adc12f91952f5b1d490245a095.png)







### 2. 配置 
项目中使用 ```build.gradle```

添加插件:

```groovy
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.0.0'
    id 'io.spring.dependency-management' version '1.1.0'
    // 主要添加下面native插件
    id 'org.graalvm.buildtools.native' version '0.9.18'
}
```

配置编译指令

```groovy
graalvmNative {
    binaries {
        main {
            // 编译时显示详细信息
            buildArgs.add('--verbose')
        }
    }
}
```



选择右侧边栏的编译选项即可开始编译 nativeCompile

![img](https://i0.hdslb.com/bfs/album/8f69f709680e43bed90a8cd2f898be69b8fb0b1f.png)














### 3. 问题
如果你的项目是一个初始项目比较干净，一般一次能编译过并能成功跑起来。

而博主当然不可能一次编译通过啦，这也是本文编写的目的，为此用了一个以前写的小项目升级springboot3.0

第一次编译结果如下：

![img](https://i0.hdslb.com/bfs/album/ebc6717ef1ecba20903eec33c4b596456b0c4e2a.png)











大致意思是这个类需要在构建过程中被初始化，Eum～～ 没弄懂？ 去到官网瞅了瞅

发现了一些字眼很类似：

![img](https://i0.hdslb.com/bfs/album/932de74b70024d8d76a31782c62ca5117d63b4ce.png)



```tex
# 构建期初始化？
--initialize-at-build-time: a comma-separated list of packages and classes (and implicitly all of their superclasses) that are initialized during the image build. An empty string designates all packages.
# 运行时初始化？
--initialize-at-run-time: a comma-separated list of packages and classes (and implicitly all of their subclasses) that must be initialized at runtime and not during the image build. An empty string is currently not supported.
```

加上试试
```groovy
graalvmNative {
    binaries {
        main {
            buildArgs.add('--verbose')
            buildArgs.add("--initialize-at-build-time=org.apache.commons.logging.LogFactory")
        }
    }
}
```



![img](https://i0.hdslb.com/bfs/album/e34536e4d23cd13f41bac959e144a3f906aa1b6c.png)

不错，确实可行

但是还没完 ...











运行项目看看

![img](https://i0.hdslb.com/bfs/album/c5967a197fc79aafc743d267266bae678ee98cfd.png)

缓存炸了，细心的人应该留意到了CGLIB字眼。

 没错了，就是动态代理的问题









 官方文档也有对此的说明，我们把参数加上

```build.gradle```

```groovy
graalvmNative {
    binaries {
        main {
            buildArgs.add('--verbose')
            buildArgs.add("--initialize-at-build-time=org.apache.commons.logging.LogFactory")
            buildArgs.add("-H:ReflectionConfigurationFiles=$projectDir/reflection-config.json")
        }
    }
}
```

```reflection-config.json```

```json
# 这个文件主要描述了类的一些信息来给运行期的程序识别的
[
  {
    "name": "com.github.benmanes.caffeine.cache.PSWMS",
    "methods": [
      // <init> 固定写法，就是构造方法，普通方法就写名字就好了
      { "name" : "<init>", "parameterTypes" : [] }
    ]
  },
  {
    "name": "com.github.benmanes.caffeine.cache.SSSMSW",
    "methods": [
      {
        "name" : "<init>",
        "parameterTypes" : [
          "com.github.benmanes.caffeine.cache.Caffeine", "com.github.benmanes.caffeine.cache.AsyncCacheLoader", "boolean"
        ]
      }
    ]
  }
]
```

编译、运行 ...

![img](https://i0.hdslb.com/bfs/album/39e32f5b96679fb21363d71b4daf1c1305ebe82d.png)

启动正常了 







哦，对了。

官方还介绍了另一种动态代理的处理方式，不过现在被标记为过时了。

就是使用类的方式标注，编译时会被识别解析

```java
package com.github.benmanes.caffeine.cache;

import com.oracle.svm.core.annotate.AutomaticFeature;
import org.graalvm.nativeimage.hosted.Feature;
import org.graalvm.nativeimage.hosted.RuntimeReflection;

@AutomaticFeature
public class ReflectionFeature implements Feature {
    @Override
    public void beforeAnalysis(BeforeAnalysisAccess access) {
        try {
            RuntimeReflection.register(SSSMSW.class);
            RuntimeReflection.register(SSSMSW.class
                    .getDeclaredConstructor(Caffeine.class, AsyncCacheLoader.class, boolean.class));
            RuntimeReflection.register(PSWMS.class);
            RuntimeReflection.register(PSWMS.class.getDeclaredConstructor());
        } catch (NoSuchMethodException e) {
            throw new RuntimeException(e);
        }
    }
}
```









\-----------------------

graalvm文档[[点我](https://docs.oracle.com/en/graalvm/enterprise/20/docs/reference-manual/native-image/Options/)]  ｜  演示的项目[[点我](https://github.com/bincooo/aria2-boot)]

