module.exports = {
  theme:"",
  title: "文档中心",
  description: "这是一段关于云通讯文档中心的描述",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/icon.ico" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    // repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
    sidebarDepth: 3, // 侧边栏显示2级
  },
};
