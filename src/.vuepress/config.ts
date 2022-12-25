import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/md",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "折戟沉沙、丿",
      description: "折戟沉沙、丿の文章与导航",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      hotKeys: ["command", "k"],
      maxSuggestions: 7,
      isSearchable: (page) => page.path !== "/"
    })
  ],
  
  shouldPrefetch: false,
});
