module.exports = [
      {
        title: "产品简介",
        collapsable: true,
        children: [
          { title: "产品概述", path: "/docs/article-1/test1.md" },
          { title: "常用概念", path: "/docs/article-1/test2.md" },
        ],
      },
      {
        title: "API文档",
        collapsable: true,
        children: [
          { title: "子标题一", path: "/docs/api/api1.md" },
          { title: "子标题二",
            collapsable: true,
            children: [
              { title: "子API文档", path: "/docs/api/subApi/api2.md" },
            ],
          }
        ],
      },
]
