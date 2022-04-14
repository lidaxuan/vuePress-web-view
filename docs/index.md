---
home: true
# heroImage: /img/web.png
heroText: 李大玄 blog
tagline: Web前端技术博客，积跬步以至千里，致敬每个爱学习的你。
actionText: 进入学习 →
actionLink: /01.前端/25.JavaScript文章/01.33个非常实用的JavaScript一行代码/
# bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

# features: # 可选的
#   - title: 前端
#     details: JavaScript、ES6、Vue框架等前端技术
#     link: /web/ # 可选
#     imgUrl: /img/1.jpg # 可选
#   - title: 页面
#     details: html(5)/css(3)，前端页面相关技术
#     link: /ui/
#     imgUrl: /img/ui.png
#   - title: 技术
#     details: 技术文档、教程、技巧、总结等文章
#     link: /technology/
#     imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---

::: tip
基于本仓库可快速创建你自己的文档网站。
[高亮语法支持列表](https://prismjs.com/#supported-languages)
[PrismJS](https://github.com/PrismJS)[Shiki](https://github.com/shikijs/shiki)
:::
::: tip
编译时自动帮你配置菜单栏和侧边栏，最多三层目录结构。
:::
::: tip
非常多的热心开发者开源主题[vuepress-theme](https://github.com/search?q=vuepress-theme)
:::

::: tip
如果觉得使用[VuePress](https://v2.vuepress.vuejs.org)[vitepress](https://vitepress.vuejs.org)不便，
可使用静态博客写作客户端[gridea](https://github.com/getgridea/gridea)
:::

## 目录结构

* [官方标准目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

```
.
│  .gitignore           git忽略文件
│  package-lock.json    NPM依赖配置文件
│  yarn.lock            yarn依赖配置文件
│  package.json         项目配置文件
│  README.md            首页md文件
│  
├─.github               GitHub配置目录
│  └─workflows          Actions工作流目录
│          deloy.yml    项目的Actions部署配置
│          
├─.vuepress             用于存放VuePress的配置、组件、静态资源等。
│  │  config.js         VuePress配置
│  │  nav.js            除创建的目录之外，自定义添加的导航栏
│  │  push.js           自定义推送脚本
│  │  utils.js          侧边栏和菜单栏自动配置工具
│  │  
│  ├─styles             用于存放样式相关的文件
│  │  │  
│  │  └─index.styl      自定义全局样式文件
│  │  
│  ├─public             静态资源目录
│  │  │  CNAME          CNAME文件指定域名，防止发布时被清空
│  │  │  manifest.json  5+App（HTML5 Plus移动App）的配置文件
│  │  │  static.json    heroku使用buildpack静态部署配置文件
│  │  │  
│  │  ├─assets          css/img/js等默认的存放路径
│  │  │   │  
│  │  │   └─js          自定义js文件存放目录
│  │  │  
│  │  ├─files           可直接访问并下载的文件存放目录
│  │  │      
│  │  └─images          存放所有文档的图片目录
│  │      │  
│  │      └─icons       存放图标目录
│  │              
│  └─theme              主题存放目录
│              
├─docs                  编译后的静态资源文件输出目录
│
│
......其他自己的md文档或文件夹，都会打包到docs文件夹下，md文件会编译成html
```
**也就是你只需要遵从以上目录结构来修改你自己的文档即可使用。**
::: warning 注意
配置文件中的注释文字部分，请结合[VuePress官方文档](https://vuepress.vuejs.org/zh/config)一定理解其意义再修改配置！
:::

## 命令

[![](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/bajins/notes-vuepress)

``` bash
# 先克隆本仓库
git clone https://github.com/bajins/notes-vuepress.git

# 保留上面目录结构列出的文件和文件夹，其他的全部删除

# 使用前请自行安装Node.js环境

# 安装项目的全部依赖
npm install

# 这时创建并书写你自己的md文档

# 开始运行开发环境，然后访问窗口中的路径
npm run dev

# 修改.vuepress/public/CNAME中的域名

# 如果发布到GitHub请见：项目的Actions部署配置
# Actions教程：https://www.bajins.com/IDE/Git%E6%9C%8D%E5%8A%A1.html#actions

```

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。

npm i vuepress-plugin-toolbar  适用于 vuepress 插件的插件, 提供的功能：可以在页面右侧区域出现自定义展示功能

npm i vuepress-plugin-auto-sidebar   自动生成侧边栏
:::



<!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->

<!-- 
## 关于





</br> -->


## 特色功能
博客部分特色功能介绍

#### 一站式技术搜索

   博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 `在XXX中搜索“xxx”` 快速到达你想要找的内容。

#### 深色模式与阅读模式
关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~

#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。**示例**：

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;
}
</style>
```
:::
