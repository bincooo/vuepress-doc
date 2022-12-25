import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      prefix: "guide/",
      children: "structure"
    },
    {
      text: "文档",
      icon: "book-open",
      link: "https://vuepress-theme-hope.gitee.io/v2/zh"
    }
  ]
});
