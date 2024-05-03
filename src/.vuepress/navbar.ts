import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/guide/",
  {
    text: "快捷访问",
    icon: "link",
    prefix: "/guide/",
    children: [
      {
        text: "程序猿の烂笔头",
        icon: "creative",
        prefix: "program/",
        children: [
          {
            text: "cloudflared免实名...",
            link: "cloudflared免实名使用域名"
          },
          "oracle安装",
          "nginx",
          {
            text: "more...",
            link: ""
          }
        ],
      }
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
