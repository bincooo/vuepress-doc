### 目录

+   [一、配置操作](#_2)
+   +   [1\. 全局配置](#1__3)
    +   [2\. 当前仓库配置](#2__9)
    +   [3.查看 global 配置](#3_global__15)
    +   [4\. 查看当前仓库配置](#4__20)
    +   [5\. 删除 global 配置](#5__global__26)
    +   [6\. 删除当前仓库配置](#6__32)
+   [二、本地操作](#_40)
+   +   [1\. 查看变更情况](#1__41)
    +   [2\. 将当前目录及其子目录下所有变更都加入到暂存区](#2__47)
    +   [3\. 将仓库内所有变更都加入到暂存区](#3__53)
    +   [4\. 将指定文件添加到暂存区](#4__59)
    +   [5\. 比较工作区和暂存区的所有差异](#5__65)
    +   [6\. 比较某文件工作区和暂存区的差异](#6__71)
    +   [7\. 比较暂存区和 HEAD 的所有差异](#7__HEAD__77)
    +   [8\. 比较某文件暂存区和 HEAD 的差异](#8__HEAD__83)
    +   [9\. 比较某文件工作区和 HEAD 的差异](#9__HEAD__89)
    +   [10\. 创建 commit](#10__commit_95)
    +   [11\. 将工作区指定文件恢复成和暂存区一致](#11__101)
    +   [12\. 将暂存区指定文件恢复成和 HEAD 一致](#12__HEAD__107)
    +   [13\. 将暂存区和工作区所有文件恢复成和 HEAD 一样](#13__HEAD__113)
    +   [14\. 用 difftool 比较任意两个 commit 的差异](#14__difftool__commit__119)
    +   [15\. 查看哪些文件没被 Git 管控](#15__Git__125)
    +   [16\. 将未处理完的变更先保存到 stash 中](#16__stash__131)
    +   [17\. 临时任务处理完后继续之前的工作](#17__137)
    +   [18\. 查看所有 stash](#18__stash_146)
    +   [19\. 取回某次 stash 的变更](#19__stash__152)
    +   [20\. 优雅修改最后一次 commit](#20__commit_158)
+   [三、分支操作](#_167)
+   +   [1\. 查看当前工作分支及本地分支](#1__168)
    +   [2\. 查看本地和远端分支](#2__174)
    +   [3\. 查看远端分支](#3__180)
    +   [4\. 切换到指定分支](#4__186)
    +   [5\. 基于当前分支创建新分支](#5__192)
    +   [6\. 基于指定分支创建新分支](#6__198)
    +   [7\. 基于某个 commit 创建分支](#7__commit__204)
    +   [8\. 创建并切换到该分支](#8__210)
    +   [9\. 安全删除本地某分支](#9__216)
    +   [10\. 强行删除本地某分支](#10__222)
    +   [11\. 删除已合并到 master 分支的所有本地分支](#11__master__228)
    +   [12\. 删除远端 origin 已不存在的所有本地分支](#12__origin__234)
    +   [13\. 将 A 分支合入到当前分支中且为 merge 创建 commit](#13__A__merge__commit_240)
    +   [14\. 将 A 分支合入到 B 分支中且为 merge 创建 commit](#14__A__B__merge__commit_246)
    +   [15\. 将当前分支基于 B 分支做 rebase，以便将B分支合入到当前分支](#15__B__rebaseB_252)
    +   [16\. 将 A 分支基于 B 分支做 rebase，以便将 B 分支合入到 A 分支](#16__A__B__rebase_B__A__258)
+   [四、变更历史](#_267)
+   +   [1\. 当前分支各个 commit 用一行显示](#1__commit__268)
    +   [2\. 显示就近的 n 个 commit](#2__n__commit_274)
    +   [3\. 用图示显示所有分支的历史](#3__280)
    +   [4\. 查看涉及到某文件变更的所有 commit](#4__commit_286)
    +   [5\. 某文件各行最后修改对应的 commit 以及作者](#5__commit__292)
+   [五、标签操作](#_301)
+   +   [1\. 查看已有标签](#1__302)
    +   [2\. 新建标签](#2__308)
    +   [3\. 新建带备注标签](#3__314)
    +   [4\. 给指定的 commit 打标签](#4__commit__320)
    +   [5\. 推送一个本地标签](#5__326)
    +   [6\. 推送全部未推送过的本地标签](#6__332)
    +   [7\. 删除一个本地标签](#7__338)
    +   [8\. 删除一个远端标签](#8__344)
+   [六、远端交互](#_353)
+   +   [1\. 查看所有远端仓库](#1__354)
    +   [2\. 添加远端仓库](#2__360)
    +   [3\. 删除远端仓库](#3__366)
    +   [4\. 重命名远端仓库](#4__372)
    +   [5\. 将远端所有分支和标签的变更都拉到本地](#5__378)
    +   [6\. 把远端分支的变更拉到本地，且 merge 到本地分支](#6__merge__384)
    +   [7\. 将本地分支 push 到远端](#7__push__390)
    +   [8\. 删除远端分支](#8__396)

## 一、配置操作

## 1\. 全局配置

```shell
git config --global user.name '你的名字'
git config --global user.email '你的邮箱'
```

## 2\. 当前仓库配置

```shell
git config --local user.name '你的名字'
git config --local user.email '你的邮箱'
```

## 3.查看 global 配置

```shell
 git config --global --list
```

## 4\. 查看当前仓库配置

```shell
 git config --local --list
```

## 5\. 删除 global 配置

```shell
 git config --unset --global 要删除的配置项
```

## 6\. 删除当前仓库配置

```shell
 git config --unset --local 要删除的配置项
```

* * *

## 二、本地操作

## 1\. 查看变更情况

```shell
 git status
```

## 2\. 将当前目录及其子目录下所有变更都加入到暂存区

```shell
 git add .
```

## 3\. 将仓库内所有变更都加入到暂存区

```shell
 git add -A
```

## 4\. 将指定文件添加到暂存区

```shell
 git add 文件1 文件2 文件3
```

## 5\. 比较工作区和暂存区的所有差异

```shell
 git diff
```

## 6\. 比较某文件工作区和暂存区的差异

```shell
 git diff 文件
```

## 7\. 比较暂存区和 HEAD 的所有差异

```shell
 git diff --cached
```

## 8\. 比较某文件暂存区和 HEAD 的差异

```shell
 git diff --cached 文件
```

## 9\. 比较某文件工作区和 HEAD 的差异

```shell
 git diff HEAD 文件
```

## 10\. 创建 commit

```shell
git commit
```

## 11\. 将工作区指定文件恢复成和暂存区一致

```shell
 git checkout 文件1 文件2 文件3
```

## 12\. 将暂存区指定文件恢复成和 HEAD 一致

```shell
 git reset 文件1 文件2 文件3
```

## 13\. 将暂存区和工作区所有文件恢复成和 HEAD 一样

```shell
 git reset --hard
```

## 14\. 用 difftool 比较任意两个 commit 的差异

```shell
 git difftool 提交1 提交2
```

## 15\. 查看哪些文件没被 Git 管控

```shell
 git ls-files --others
```

## 16\. 将未处理完的变更先保存到 stash 中

```shell
 git stash
```

## 17\. 临时任务处理完后继续之前的工作

+   pop 不保留 stash
+   apply 保留 stash

```shell
git stash pop
git stash apply
```

## 18\. 查看所有 stash

```shell
git stash list
```

## 19\. 取回某次 stash 的变更

```shell
 git stash pop stash@{数字n}
```

## 20\. 优雅修改最后一次 commit

```shell
git add.
git commit --amend
```

* * *

## 三、分支操作

## 1\. 查看当前工作分支及本地分支

```shell
 git branch -v
```

## 2\. 查看本地和远端分支

```shell
 git branch -av
```

## 3\. 查看远端分支

```shell
 git branch -rv
```

## 4\. 切换到指定分支

```shell
 git checkout 指定分支
```

## 5\. 基于当前分支创建新分支

```shell
git branch 新分支
```

## 6\. 基于指定分支创建新分支

```shell
 git branch 新分支 指定分支
```

## 7\. 基于某个 commit 创建分支

```shell
 git branch 新分支 某个 commit 的 id
```

## 8\. 创建并切换到该分支

```shell
 git checkout -b 新分支
```

## 9\. 安全删除本地某分支

```shell
 git branch -d 要删除的分支
```

## 10\. 强行删除本地某分支

```shell
 git branch -D 要删除的分支
```

## 11\. 删除已合并到 master 分支的所有本地分支

```shell
 git branch --merged master | grep -v '^\*\| master' | xargs -n 1 git branch -d
```

## 12\. 删除远端 origin 已不存在的所有本地分支

```shell
 git remote prune orign
```

## 13\. 将 A 分支合入到当前分支中且为 merge 创建 commit

```shell
git merge A分支
```

## 14\. 将 A 分支合入到 B 分支中且为 merge 创建 commit

```shell
git merge A分支 B分支
```

## 15\. 将当前分支基于 B 分支做 rebase，以便将B分支合入到当前分支

```shell
 git rebase B分支
```

## 16\. 将 A 分支基于 B 分支做 rebase，以便将 B 分支合入到 A 分支

```shell
 git rebase B分支 A分支
```

* * *

## 四、变更历史

## 1\. 当前分支各个 commit 用一行显示

```shell
 git log --oneline
```

## 2\. 显示就近的 n 个 commit

```shell
git log -n
```

## 3\. 用图示显示所有分支的历史

```shell
 git log --oneline --graph --all
```

## 4\. 查看涉及到某文件变更的所有 commit

```shell
git log 文件
```

## 5\. 某文件各行最后修改对应的 commit 以及作者

```shell
 git blame 文件
```

* * *

## 五、标签操作

## 1\. 查看已有标签

```shell
 git tag
```

## 2\. 新建标签

```shell
 git tag v1.0
```

## 3\. 新建带备注标签

```shell
 git tag -a v1.0 -m '前端食堂'
```

## 4\. 给指定的 commit 打标签

```shell
 git tag v1.0 commitid
```

## 5\. 推送一个本地标签

```shell
 git push origin v1.0
```

## 6\. 推送全部未推送过的本地标签

```shell
 git push origin --tags
```

## 7\. 删除一个本地标签

```shell
 git tag -d v1.0
```

## 8\. 删除一个远端标签

```shell
 git push origin :refs/tags/v1.0
```

* * *

## 六、远端交互

## 1\. 查看所有远端仓库

```shell
 git remote -v
```

## 2\. 添加远端仓库

```shell
 git remote add url
```

## 3\. 删除远端仓库

```shell
 git remote remove remote的名称
```

## 4\. 重命名远端仓库

```shell
 git remote rename 旧名称 新名称
```

## 5\. 将远端所有分支和标签的变更都拉到本地

```shell
 git fetch remote
```

## 6\. 把远端分支的变更拉到本地，且 merge 到本地分支

```shell
git pull origin 分支名
```

## 7\. 将本地分支 push 到远端

```shell
git push origin 分支名
```

## 8\. 删除远端分支

```shell
git push remote --delete 远端分支名
git push remote :远端分支名
```
