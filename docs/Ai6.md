<!--
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2020-05-22 13:03:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-30 11:14:22
--> 

模板市场
版本1: 
  .env  VUE_APP_Public_Path = "http://dev-prd19.easyliao.com/eachbot-mgrai6-web/view/20210630"
  .ent.test  VUE_APP_Public_Path = "http://prd19.easyliao.com/eachbot-mgrai6-web/view/20210630"


针对 Ai6 客户版维护的一个工具，包含了 AI6客户版所有功能以及未开放的一些功能，针对机器人对话流程进行一系列配置

##  一、 clone the project
http://git.kinfe.net/el-web-project/textbot-web-view.git
##  二、 使用 npm

#### install dependency

```
npm install
```
####  Compiles and hot-reloads for development
```
npm run serve
```
####  Compiles and minifies for production
```
npm run build
```

## 三、 使用 yarn
#### install dependency
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```
#### 四、项目结构
|-- public

|   |---------------- favicon.ico                  //网站图标

|   |---------------- index.html                   //入口页面

|--src

|   |---------------- api                          // 及所有调用接口的管理。

|   |---------------- assets                       // 静态文件，比如一些图片，json数据等

|   |---------------- components                   // vue公共组件

|   |---------------- mixins                       // vue的混入器 共享方法和数据状态.

|   |---------------- router                       // vue的路由管理

|   |---------------- serve                        // axios二次封装主要针对公共参数、请求方式、请求格式的封装

|   |---------------- store                        // vuex等公共数据管理
|   |---------------- styles                       // 对应组件的css样式.

|   |---------------- utils                        // 项目工具文件，如：格式化日期、xlsx、手机号、密码校验等.

|   |---------------- views                        // 以页面为单位的vue文件、html文件等

|   |---------------- App.vue                      // 页面入口文件

|   |---------------- main.js                      // 程序入口文件，加载各种公共组件

|-- .babelrc                                       // babel  语法转化形式 ES6转ES5  组件按需加载

|--.eslintignore                                   // 隔离不监测语法错误的插件

|-- babel.config.js                                // babel  语法转化形式 

|-- package.json                                   // 项目基本信息,包依赖信息等

|-- README.md                                      // 项目说明|-- 一些配置文件如.gitnore、yarn.lock等

|-- vue.config.js                                  // 各种打包配置
