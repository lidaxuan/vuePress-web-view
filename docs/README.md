<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-03-30 11:10:29
 * @FilePath: /vuePress-web-view/docs/README.md
-->
# vuePress-web-view
静态网站生成器
git https://github.com/lidaxuan/vuePress-web-view

官网: https://vuepress.vuejs.org/zh/guide/getting-started.html


├── docs

│   ├── .vuepress (可选的)

│   │   ├── components (可选的)

│   │   ├── theme (可选的)

│   │   │   └── Layout.vue

│   │   ├── public (可选的)

│   │   ├── styles (可选的)

│   │   │   ├── index.styl

│   │   │   └── palette.styl

│   │   ├── templates (可选的, 谨慎配置)

│   │   │   ├── dev.html

│   │   │   └── ssr.html

│   │   ├── config.js (可选的)

│   │   └── enhanceApp.js (可选的)

│   │ 

│   ├── README.md

│   ├── guide

│   │   └── README.md

│   └── config.md

│
└── package.json

docs/.vuepress: 用于存放全局的配置、组件、静态资源等。

docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。

docs/.vuepress/theme: 用于存放本地主题。

docs/.vuepress/styles: 用于存放样式相关的文件。

docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。

docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
docs/.vuepress/public: 静态资源目录。

docs/.vuepress/templates: 存储 HTML 模板文件。

docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。

docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。

docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。

docs/.vuepress/enhanceApp.js: 客户端应用的增强。





---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---


---
home: true
---

::: slot footer
MIT Licensed | Copyright © 2018-present [Evan You](https://github.com/yyx990803)
:::