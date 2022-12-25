---
title: nginx
head:
  - - meta
    - name: referrer
      content: no-referrer
---
### location 一些基础匹配规则

```nginx
# 精确匹配 / : 主机名后面不能带任何字符串
location  = / {
  [ configuration A ] 
}

# 前缀匹配 / : 但是正则和最长字符串会优先匹配
location  / {
  [ configuration B ] 
}

# 匹配任何以 / 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
location ^~ / {
  [ configuration D ] 
}

# 正则匹配: 区分大小写
# 优先级比 ^~ 低
# 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索
# 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
location ~ [regex] {
  [ configuration C ] 
}

# 正则匹配: 不区分大小写
# 优先级比 ^~ 低
# 匹配任何以 /[regex] 开头的地址，匹配符合以后，还要继续往下搜索
# 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
location ~* [regex] {
  [ configuration E ] 
}

# !~ 		 区分大小写不匹配的正则
# !~*    不区分大小写不匹配的正则
```







### rewrite 语法 （重定向配置）

#### 1. 语法 

```nginx
# rewrite [regex] [replacement] [flag]
location ~ /goto/ {
  rewrite ^/goto/(.*) http://localhost:81/$1 break;
}
```



#### 2. flag 标志位

last - 完成重写指令，之后搜索相应的URI或location。 

break - 完成重写指令。 

redirect - 返回302临时重定向。 

permanent - 返回301永久重定向。







### 一些高级的用法

1. 调试location uri比较有用：

   ```nginx
   # 定义一个 debug/header.conf 文件
   # 内容如下
   add_header x0-NGINX-DEBUG '=========================================';
   add_header xA-NGINX-http_user_agent $http_user_agent;
   add_header xB-NGINX-request $request;
   add_header xC-NGINX-request_body $request_body;
   add_header xD-NGINX-request_method $request_method;
   add_header xE-NGINX-request_time $request_time;
   add_header xF-NGINX-request_uri $request_uri;
   add_header xG-NGINX-scheme $scheme;
   add_header xH-NGINX-request_server_name $server_name;
   add_header xI-NGINX-request_server_port $server_port;
   add_header xJ-NGINX-uri $uri;
   add_header xK-NGINX-args $args;
   add_header xL-NGINX-is_args $is_args;
   add_header xM-NGINX-request_filename $request_filename;
   add_header xN-NGINX-pid $pid;
   add_header xO-NGINX-document_root $document_root;
   add_header xP-NGINX-document_uri $document_uri;
   add_header xQ-NGINX-host $host;
   add_header xR-NGINX-hostname $hostname;
   add_header xS-NGINX-proxy_protocol_addr $proxy_protocol_addr;
   add_header xT-NGINX-proxy_protocol_port $proxy_protocol_port;
   add_header xU-NGINX-query_string $query_string;
   add_header xV-NGINX-realpath_root $realpath_root;
   add_header xW-NGINX-remote_addr $remote_addr;
   add_header xX-NGINX-remote_port $remote_port;
   add_header xY-NGINX-remote_user $remote_user;
   add_header xZ-NGINX-DEBUG '=========================================';
   ```

   在页面访问地址后可以在浏览器调试工具内查看

   xx-NGINX 没有明确的意义只是用以排序作用

   例子：

   ```nginx
   location ~ /test/(?<path>[a-Z-_]+)/([^/]+)/(.+)$ {
     include conf.d/debug/header.conf;
     add_header xX1-NGINX-echo 'arg1 - $path $2 $3';
     return 200 "SUCCUSS";
   }
   ```

   

<img src="https://i0.hdslb.com/bfs/album/9ac67ec2bda9cba23b3cedbefcca4931440acda6.png" alt="截屏2022-11-25 21.35.48" style="zoom:50%;" />



其中 `( [regex] )` 为正则子组，正常可以使用$1 ...n 获取。

也可以指定变量名 `?< [name] >` 使用$[name]获取。

