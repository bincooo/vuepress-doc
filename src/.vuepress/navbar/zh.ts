import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "指南",
    icon: "diamond-turn-right",
    prefix: "/guide/",
    children: [
      {
        text: "程序猿の烂笔头",
        icon: "creative",
        prefix: "markdown/",
        children: ["cloudflared免实名...", "oracle安装", "nginx", { text: "more...", link: "" }],
      }
    ],
  },
  {
    text: "文档",
    icon: "book-open",
    link: "https://vuepress-theme-hope.gitee.io/v2/zh"
  }
]);
