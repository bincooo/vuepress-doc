const l=JSON.parse('{"key":"v-6e4c1f0d","path":"/guide/markdown/Java%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%EF%BC%8863%E6%9D%A1%EF%BC%89.html","title":"","lang":"zh-CN","frontmatter":{"description":"目录 一、配置操作 1. 全局配置 2. 当前仓库配置 3.查看 global 配置 4. 查看当前仓库配置 5. 删除 global 配置 6. 删除当前仓库配置 二、本地操作 1. 查看变更情况 2. 将当前目录及其子目录下所有变更都加入到暂存区 3. 将仓库内所有变更都加入到暂存区 4. 将指定文件添加到暂存区 5. 比较工作区和暂存区的所有差异 6. 比较某文件工作区和暂存区的差异 7. 比较暂存区和 HEAD 的所有差异 8. 比较某文件暂存区和 HEAD 的差异 9. 比较某文件工作区和 HEAD 的差异 10. 创建 commit 11. 将工作区指定文件恢复成和暂存区一致 12. 将暂存区指定文件恢复成和 HEAD 一致 13. 将暂存区和工作区所有文件恢复成和 HEAD 一样 14. 用 difftool 比较任意两个 commit 的差异 15. 查看哪些文件没被 Git 管控 16. 将未处理完的变更先保存到 stash 中 17. 临时任务处理完后继续之前的工作 18. 查看所有 stash 19. 取回某次 stash 的变更 20. 优雅修改最后一次 commit 三、分支操作 1. 查看当前工作分支及本地分支 2. 查看本地和远端分支 3. 查看远端分支 4. 切换到指定分支 5. 基于当前分支创建新分支 6. 基于指定分支创建新分支 7. 基于某个 commit 创建分支 8. 创建并切换到该分支 9. 安全删除本地某分支 10. 强行删除本地某分支 11. 删除已合并到 master 分支的所有本地分支 12. 删除远端 origin 已不存在的所有本地分支 13. 将 A 分支合入到当前分支中且为 merge 创建 commit 14. 将 A 分支合入到 B 分支中且为 merge 创建 commit 15. 将当前分支基于 B 分支做 rebase，以便将B分支合入到当前分支 16. 将 A 分支基于 B 分支做 rebase，以便将 B 分支合入到 A 分支 四、变更历史 1. 当前分支各个 commit 用一行显示 2. 显示就近的 n 个 commit 3. 用图示显示所有分支的历史 4. 查看涉及到某文件变更的所有 commit 5. 某文件各行最后修改对应的 commit 以及作者 五、标签操作 1. 查看已有标签 2. 新建标签 3. 新建带备注标签 4. 给指定的 commit 打标签 5. 推送一个本地标签 6. 推送全部未推送过的本地标签 7. 删除一个本地标签 8. 删除一个远端标签 六、远端交互 1. 查看所有远端仓库 2. 添加远端仓库 3. 删除远端仓库 4. 重命名远端仓库 5. 将远端所有分支和标签的变更都拉到本地 6. 把远端分支的变更拉到本地，且 merge 到本地分支 7. 将本地分支 push 到远端 8. 删除远端分支","head":[["meta",{"property":"og:url","content":"https://www.icu-web.tk/vuepress-doc/guide/markdown/Java%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%EF%BC%8863%E6%9D%A1%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:description","content":"目录 一、配置操作 1. 全局配置 2. 当前仓库配置 3.查看 global 配置 4. 查看当前仓库配置 5. 删除 global 配置 6. 删除当前仓库配置 二、本地操作 1. 查看变更情况 2. 将当前目录及其子目录下所有变更都加入到暂存区 3. 将仓库内所有变更都加入到暂存区 4. 将指定文件添加到暂存区 5. 比较工作区和暂存区的所有差异 6. 比较某文件工作区和暂存区的差异 7. 比较暂存区和 HEAD 的所有差异 8. 比较某文件暂存区和 HEAD 的差异 9. 比较某文件工作区和 HEAD 的差异 10. 创建 commit 11. 将工作区指定文件恢复成和暂存区一致 12. 将暂存区指定文件恢复成和 HEAD 一致 13. 将暂存区和工作区所有文件恢复成和 HEAD 一样 14. 用 difftool 比较任意两个 commit 的差异 15. 查看哪些文件没被 Git 管控 16. 将未处理完的变更先保存到 stash 中 17. 临时任务处理完后继续之前的工作 18. 查看所有 stash 19. 取回某次 stash 的变更 20. 优雅修改最后一次 commit 三、分支操作 1. 查看当前工作分支及本地分支 2. 查看本地和远端分支 3. 查看远端分支 4. 切换到指定分支 5. 基于当前分支创建新分支 6. 基于指定分支创建新分支 7. 基于某个 commit 创建分支 8. 创建并切换到该分支 9. 安全删除本地某分支 10. 强行删除本地某分支 11. 删除已合并到 master 分支的所有本地分支 12. 删除远端 origin 已不存在的所有本地分支 13. 将 A 分支合入到当前分支中且为 merge 创建 commit 14. 将 A 分支合入到 B 分支中且为 merge 创建 commit 15. 将当前分支基于 B 分支做 rebase，以便将B分支合入到当前分支 16. 将 A 分支基于 B 分支做 rebase，以便将 B 分支合入到 A 分支 四、变更历史 1. 当前分支各个 commit 用一行显示 2. 显示就近的 n 个 commit 3. 用图示显示所有分支的历史 4. 查看涉及到某文件变更的所有 commit 5. 某文件各行最后修改对应的 commit 以及作者 五、标签操作 1. 查看已有标签 2. 新建标签 3. 新建带备注标签 4. 给指定的 commit 打标签 5. 推送一个本地标签 6. 推送全部未推送过的本地标签 7. 删除一个本地标签 8. 删除一个远端标签 六、远端交互 1. 查看所有远端仓库 2. 添加远端仓库 3. 删除远端仓库 4. 重命名远端仓库 5. 将远端所有分支和标签的变更都拉到本地 6. 把远端分支的变更拉到本地，且 merge 到本地分支 7. 将本地分支 push 到远端 8. 删除远端分支"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-05T14:04:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-05T14:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-05T14:04:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"一、配置操作","slug":"一、配置操作","link":"#一、配置操作","children":[]},{"level":2,"title":"1. 全局配置","slug":"_1-全局配置","link":"#_1-全局配置","children":[]},{"level":2,"title":"2. 当前仓库配置","slug":"_2-当前仓库配置","link":"#_2-当前仓库配置","children":[]},{"level":2,"title":"3.查看 global 配置","slug":"_3-查看-global-配置","link":"#_3-查看-global-配置","children":[]},{"level":2,"title":"4. 查看当前仓库配置","slug":"_4-查看当前仓库配置","link":"#_4-查看当前仓库配置","children":[]},{"level":2,"title":"5. 删除 global 配置","slug":"_5-删除-global-配置","link":"#_5-删除-global-配置","children":[]},{"level":2,"title":"6. 删除当前仓库配置","slug":"_6-删除当前仓库配置","link":"#_6-删除当前仓库配置","children":[]},{"level":2,"title":"二、本地操作","slug":"二、本地操作","link":"#二、本地操作","children":[]},{"level":2,"title":"1. 查看变更情况","slug":"_1-查看变更情况","link":"#_1-查看变更情况","children":[]},{"level":2,"title":"2. 将当前目录及其子目录下所有变更都加入到暂存区","slug":"_2-将当前目录及其子目录下所有变更都加入到暂存区","link":"#_2-将当前目录及其子目录下所有变更都加入到暂存区","children":[]},{"level":2,"title":"3. 将仓库内所有变更都加入到暂存区","slug":"_3-将仓库内所有变更都加入到暂存区","link":"#_3-将仓库内所有变更都加入到暂存区","children":[]},{"level":2,"title":"4. 将指定文件添加到暂存区","slug":"_4-将指定文件添加到暂存区","link":"#_4-将指定文件添加到暂存区","children":[]},{"level":2,"title":"5. 比较工作区和暂存区的所有差异","slug":"_5-比较工作区和暂存区的所有差异","link":"#_5-比较工作区和暂存区的所有差异","children":[]},{"level":2,"title":"6. 比较某文件工作区和暂存区的差异","slug":"_6-比较某文件工作区和暂存区的差异","link":"#_6-比较某文件工作区和暂存区的差异","children":[]},{"level":2,"title":"7. 比较暂存区和 HEAD 的所有差异","slug":"_7-比较暂存区和-head-的所有差异","link":"#_7-比较暂存区和-head-的所有差异","children":[]},{"level":2,"title":"8. 比较某文件暂存区和 HEAD 的差异","slug":"_8-比较某文件暂存区和-head-的差异","link":"#_8-比较某文件暂存区和-head-的差异","children":[]},{"level":2,"title":"9. 比较某文件工作区和 HEAD 的差异","slug":"_9-比较某文件工作区和-head-的差异","link":"#_9-比较某文件工作区和-head-的差异","children":[]},{"level":2,"title":"10. 创建 commit","slug":"_10-创建-commit","link":"#_10-创建-commit","children":[]},{"level":2,"title":"11. 将工作区指定文件恢复成和暂存区一致","slug":"_11-将工作区指定文件恢复成和暂存区一致","link":"#_11-将工作区指定文件恢复成和暂存区一致","children":[]},{"level":2,"title":"12. 将暂存区指定文件恢复成和 HEAD 一致","slug":"_12-将暂存区指定文件恢复成和-head-一致","link":"#_12-将暂存区指定文件恢复成和-head-一致","children":[]},{"level":2,"title":"13. 将暂存区和工作区所有文件恢复成和 HEAD 一样","slug":"_13-将暂存区和工作区所有文件恢复成和-head-一样","link":"#_13-将暂存区和工作区所有文件恢复成和-head-一样","children":[]},{"level":2,"title":"14. 用 difftool 比较任意两个 commit 的差异","slug":"_14-用-difftool-比较任意两个-commit-的差异","link":"#_14-用-difftool-比较任意两个-commit-的差异","children":[]},{"level":2,"title":"15. 查看哪些文件没被 Git 管控","slug":"_15-查看哪些文件没被-git-管控","link":"#_15-查看哪些文件没被-git-管控","children":[]},{"level":2,"title":"16. 将未处理完的变更先保存到 stash 中","slug":"_16-将未处理完的变更先保存到-stash-中","link":"#_16-将未处理完的变更先保存到-stash-中","children":[]},{"level":2,"title":"17. 临时任务处理完后继续之前的工作","slug":"_17-临时任务处理完后继续之前的工作","link":"#_17-临时任务处理完后继续之前的工作","children":[]},{"level":2,"title":"18. 查看所有 stash","slug":"_18-查看所有-stash","link":"#_18-查看所有-stash","children":[]},{"level":2,"title":"19. 取回某次 stash 的变更","slug":"_19-取回某次-stash-的变更","link":"#_19-取回某次-stash-的变更","children":[]},{"level":2,"title":"20. 优雅修改最后一次 commit","slug":"_20-优雅修改最后一次-commit","link":"#_20-优雅修改最后一次-commit","children":[]},{"level":2,"title":"三、分支操作","slug":"三、分支操作","link":"#三、分支操作","children":[]},{"level":2,"title":"1. 查看当前工作分支及本地分支","slug":"_1-查看当前工作分支及本地分支","link":"#_1-查看当前工作分支及本地分支","children":[]},{"level":2,"title":"2. 查看本地和远端分支","slug":"_2-查看本地和远端分支","link":"#_2-查看本地和远端分支","children":[]},{"level":2,"title":"3. 查看远端分支","slug":"_3-查看远端分支","link":"#_3-查看远端分支","children":[]},{"level":2,"title":"4. 切换到指定分支","slug":"_4-切换到指定分支","link":"#_4-切换到指定分支","children":[]},{"level":2,"title":"5. 基于当前分支创建新分支","slug":"_5-基于当前分支创建新分支","link":"#_5-基于当前分支创建新分支","children":[]},{"level":2,"title":"6. 基于指定分支创建新分支","slug":"_6-基于指定分支创建新分支","link":"#_6-基于指定分支创建新分支","children":[]},{"level":2,"title":"7. 基于某个 commit 创建分支","slug":"_7-基于某个-commit-创建分支","link":"#_7-基于某个-commit-创建分支","children":[]},{"level":2,"title":"8. 创建并切换到该分支","slug":"_8-创建并切换到该分支","link":"#_8-创建并切换到该分支","children":[]},{"level":2,"title":"9. 安全删除本地某分支","slug":"_9-安全删除本地某分支","link":"#_9-安全删除本地某分支","children":[]},{"level":2,"title":"10. 强行删除本地某分支","slug":"_10-强行删除本地某分支","link":"#_10-强行删除本地某分支","children":[]},{"level":2,"title":"11. 删除已合并到 master 分支的所有本地分支","slug":"_11-删除已合并到-master-分支的所有本地分支","link":"#_11-删除已合并到-master-分支的所有本地分支","children":[]},{"level":2,"title":"12. 删除远端 origin 已不存在的所有本地分支","slug":"_12-删除远端-origin-已不存在的所有本地分支","link":"#_12-删除远端-origin-已不存在的所有本地分支","children":[]},{"level":2,"title":"13. 将 A 分支合入到当前分支中且为 merge 创建 commit","slug":"_13-将-a-分支合入到当前分支中且为-merge-创建-commit","link":"#_13-将-a-分支合入到当前分支中且为-merge-创建-commit","children":[]},{"level":2,"title":"14. 将 A 分支合入到 B 分支中且为 merge 创建 commit","slug":"_14-将-a-分支合入到-b-分支中且为-merge-创建-commit","link":"#_14-将-a-分支合入到-b-分支中且为-merge-创建-commit","children":[]},{"level":2,"title":"15. 将当前分支基于 B 分支做 rebase，以便将B分支合入到当前分支","slug":"_15-将当前分支基于-b-分支做-rebase-以便将b分支合入到当前分支","link":"#_15-将当前分支基于-b-分支做-rebase-以便将b分支合入到当前分支","children":[]},{"level":2,"title":"16. 将 A 分支基于 B 分支做 rebase，以便将 B 分支合入到 A 分支","slug":"_16-将-a-分支基于-b-分支做-rebase-以便将-b-分支合入到-a-分支","link":"#_16-将-a-分支基于-b-分支做-rebase-以便将-b-分支合入到-a-分支","children":[]},{"level":2,"title":"四、变更历史","slug":"四、变更历史","link":"#四、变更历史","children":[]},{"level":2,"title":"1. 当前分支各个 commit 用一行显示","slug":"_1-当前分支各个-commit-用一行显示","link":"#_1-当前分支各个-commit-用一行显示","children":[]},{"level":2,"title":"2. 显示就近的 n 个 commit","slug":"_2-显示就近的-n-个-commit","link":"#_2-显示就近的-n-个-commit","children":[]},{"level":2,"title":"3. 用图示显示所有分支的历史","slug":"_3-用图示显示所有分支的历史","link":"#_3-用图示显示所有分支的历史","children":[]},{"level":2,"title":"4. 查看涉及到某文件变更的所有 commit","slug":"_4-查看涉及到某文件变更的所有-commit","link":"#_4-查看涉及到某文件变更的所有-commit","children":[]},{"level":2,"title":"5. 某文件各行最后修改对应的 commit 以及作者","slug":"_5-某文件各行最后修改对应的-commit-以及作者","link":"#_5-某文件各行最后修改对应的-commit-以及作者","children":[]},{"level":2,"title":"五、标签操作","slug":"五、标签操作","link":"#五、标签操作","children":[]},{"level":2,"title":"1. 查看已有标签","slug":"_1-查看已有标签","link":"#_1-查看已有标签","children":[]},{"level":2,"title":"2. 新建标签","slug":"_2-新建标签","link":"#_2-新建标签","children":[]},{"level":2,"title":"3. 新建带备注标签","slug":"_3-新建带备注标签","link":"#_3-新建带备注标签","children":[]},{"level":2,"title":"4. 给指定的 commit 打标签","slug":"_4-给指定的-commit-打标签","link":"#_4-给指定的-commit-打标签","children":[]},{"level":2,"title":"5. 推送一个本地标签","slug":"_5-推送一个本地标签","link":"#_5-推送一个本地标签","children":[]},{"level":2,"title":"6. 推送全部未推送过的本地标签","slug":"_6-推送全部未推送过的本地标签","link":"#_6-推送全部未推送过的本地标签","children":[]},{"level":2,"title":"7. 删除一个本地标签","slug":"_7-删除一个本地标签","link":"#_7-删除一个本地标签","children":[]},{"level":2,"title":"8. 删除一个远端标签","slug":"_8-删除一个远端标签","link":"#_8-删除一个远端标签","children":[]},{"level":2,"title":"六、远端交互","slug":"六、远端交互","link":"#六、远端交互","children":[]},{"level":2,"title":"1. 查看所有远端仓库","slug":"_1-查看所有远端仓库","link":"#_1-查看所有远端仓库","children":[]},{"level":2,"title":"2. 添加远端仓库","slug":"_2-添加远端仓库","link":"#_2-添加远端仓库","children":[]},{"level":2,"title":"3. 删除远端仓库","slug":"_3-删除远端仓库","link":"#_3-删除远端仓库","children":[]},{"level":2,"title":"4. 重命名远端仓库","slug":"_4-重命名远端仓库","link":"#_4-重命名远端仓库","children":[]},{"level":2,"title":"5. 将远端所有分支和标签的变更都拉到本地","slug":"_5-将远端所有分支和标签的变更都拉到本地","link":"#_5-将远端所有分支和标签的变更都拉到本地","children":[]},{"level":2,"title":"6. 把远端分支的变更拉到本地，且 merge 到本地分支","slug":"_6-把远端分支的变更拉到本地-且-merge-到本地分支","link":"#_6-把远端分支的变更拉到本地-且-merge-到本地分支","children":[]},{"level":2,"title":"7. 将本地分支 push 到远端","slug":"_7-将本地分支-push-到远端","link":"#_7-将本地分支-push-到远端","children":[]},{"level":2,"title":"8. 删除远端分支","slug":"_8-删除远端分支","link":"#_8-删除远端分支","children":[]}],"git":{"createdTime":1693922657000,"updatedTime":1693922657000,"contributors":[{"name":"bincooo","email":"admin@bincooodeiMac.local","commits":1}]},"readingTime":{"minutes":7.42,"words":2225},"filePathRelative":"guide/markdown/Java面试宝典/Git常用命令（63条）.md","localizedDate":"2023年9月5日","excerpt":"<h3> 目录</h3>\\n<ul>\\n<li><a href=\\"#_2\\">一、配置操作</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__3\\">1. 全局配置</a></li>\\n<li><a href=\\"#2__9\\">2. 当前仓库配置</a></li>\\n<li><a href=\\"#3_global__15\\">3.查看 global 配置</a></li>\\n<li><a href=\\"#4__20\\">4. 查看当前仓库配置</a></li>\\n<li><a href=\\"#5__global__26\\">5. 删除 global 配置</a></li>\\n<li><a href=\\"#6__32\\">6. 删除当前仓库配置</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_40\\">二、本地操作</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__41\\">1. 查看变更情况</a></li>\\n<li><a href=\\"#2__47\\">2. 将当前目录及其子目录下所有变更都加入到暂存区</a></li>\\n<li><a href=\\"#3__53\\">3. 将仓库内所有变更都加入到暂存区</a></li>\\n<li><a href=\\"#4__59\\">4. 将指定文件添加到暂存区</a></li>\\n<li><a href=\\"#5__65\\">5. 比较工作区和暂存区的所有差异</a></li>\\n<li><a href=\\"#6__71\\">6. 比较某文件工作区和暂存区的差异</a></li>\\n<li><a href=\\"#7__HEAD__77\\">7. 比较暂存区和 HEAD 的所有差异</a></li>\\n<li><a href=\\"#8__HEAD__83\\">8. 比较某文件暂存区和 HEAD 的差异</a></li>\\n<li><a href=\\"#9__HEAD__89\\">9. 比较某文件工作区和 HEAD 的差异</a></li>\\n<li><a href=\\"#10__commit_95\\">10. 创建 commit</a></li>\\n<li><a href=\\"#11__101\\">11. 将工作区指定文件恢复成和暂存区一致</a></li>\\n<li><a href=\\"#12__HEAD__107\\">12. 将暂存区指定文件恢复成和 HEAD 一致</a></li>\\n<li><a href=\\"#13__HEAD__113\\">13. 将暂存区和工作区所有文件恢复成和 HEAD 一样</a></li>\\n<li><a href=\\"#14__difftool__commit__119\\">14. 用 difftool 比较任意两个 commit 的差异</a></li>\\n<li><a href=\\"#15__Git__125\\">15. 查看哪些文件没被 Git 管控</a></li>\\n<li><a href=\\"#16__stash__131\\">16. 将未处理完的变更先保存到 stash 中</a></li>\\n<li><a href=\\"#17__137\\">17. 临时任务处理完后继续之前的工作</a></li>\\n<li><a href=\\"#18__stash_146\\">18. 查看所有 stash</a></li>\\n<li><a href=\\"#19__stash__152\\">19. 取回某次 stash 的变更</a></li>\\n<li><a href=\\"#20__commit_158\\">20. 优雅修改最后一次 commit</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_167\\">三、分支操作</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__168\\">1. 查看当前工作分支及本地分支</a></li>\\n<li><a href=\\"#2__174\\">2. 查看本地和远端分支</a></li>\\n<li><a href=\\"#3__180\\">3. 查看远端分支</a></li>\\n<li><a href=\\"#4__186\\">4. 切换到指定分支</a></li>\\n<li><a href=\\"#5__192\\">5. 基于当前分支创建新分支</a></li>\\n<li><a href=\\"#6__198\\">6. 基于指定分支创建新分支</a></li>\\n<li><a href=\\"#7__commit__204\\">7. 基于某个 commit 创建分支</a></li>\\n<li><a href=\\"#8__210\\">8. 创建并切换到该分支</a></li>\\n<li><a href=\\"#9__216\\">9. 安全删除本地某分支</a></li>\\n<li><a href=\\"#10__222\\">10. 强行删除本地某分支</a></li>\\n<li><a href=\\"#11__master__228\\">11. 删除已合并到 master 分支的所有本地分支</a></li>\\n<li><a href=\\"#12__origin__234\\">12. 删除远端 origin 已不存在的所有本地分支</a></li>\\n<li><a href=\\"#13__A__merge__commit_240\\">13. 将 A 分支合入到当前分支中且为 merge 创建 commit</a></li>\\n<li><a href=\\"#14__A__B__merge__commit_246\\">14. 将 A 分支合入到 B 分支中且为 merge 创建 commit</a></li>\\n<li><a href=\\"#15__B__rebaseB_252\\">15. 将当前分支基于 B 分支做 rebase，以便将B分支合入到当前分支</a></li>\\n<li><a href=\\"#16__A__B__rebase_B__A__258\\">16. 将 A 分支基于 B 分支做 rebase，以便将 B 分支合入到 A 分支</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_267\\">四、变更历史</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__commit__268\\">1. 当前分支各个 commit 用一行显示</a></li>\\n<li><a href=\\"#2__n__commit_274\\">2. 显示就近的 n 个 commit</a></li>\\n<li><a href=\\"#3__280\\">3. 用图示显示所有分支的历史</a></li>\\n<li><a href=\\"#4__commit_286\\">4. 查看涉及到某文件变更的所有 commit</a></li>\\n<li><a href=\\"#5__commit__292\\">5. 某文件各行最后修改对应的 commit 以及作者</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_301\\">五、标签操作</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__302\\">1. 查看已有标签</a></li>\\n<li><a href=\\"#2__308\\">2. 新建标签</a></li>\\n<li><a href=\\"#3__314\\">3. 新建带备注标签</a></li>\\n<li><a href=\\"#4__commit__320\\">4. 给指定的 commit 打标签</a></li>\\n<li><a href=\\"#5__326\\">5. 推送一个本地标签</a></li>\\n<li><a href=\\"#6__332\\">6. 推送全部未推送过的本地标签</a></li>\\n<li><a href=\\"#7__338\\">7. 删除一个本地标签</a></li>\\n<li><a href=\\"#8__344\\">8. 删除一个远端标签</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#_353\\">六、远端交互</a></li>\\n<li>\\n<ul>\\n<li><a href=\\"#1__354\\">1. 查看所有远端仓库</a></li>\\n<li><a href=\\"#2__360\\">2. 添加远端仓库</a></li>\\n<li><a href=\\"#3__366\\">3. 删除远端仓库</a></li>\\n<li><a href=\\"#4__372\\">4. 重命名远端仓库</a></li>\\n<li><a href=\\"#5__378\\">5. 将远端所有分支和标签的变更都拉到本地</a></li>\\n<li><a href=\\"#6__merge__384\\">6. 把远端分支的变更拉到本地，且 merge 到本地分支</a></li>\\n<li><a href=\\"#7__push__390\\">7. 将本地分支 push 到远端</a></li>\\n<li><a href=\\"#8__396\\">8. 删除远端分支</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
