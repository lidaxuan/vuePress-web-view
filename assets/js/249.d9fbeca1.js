(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{657:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"axios-函数重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-函数重载"}},[t._v("#")]),t._v(" axios 函数重载")]),t._v(" "),a("h2",{attrs:{id:"需求分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[t._v("#")]),t._v(" 需求分析")]),t._v(" "),a("p",[t._v("目前我们的 axios 函数只支持传入 1 个参数，如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/extend/post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们希望该函数也能支持传入 2 个参数，如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/extend/post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("第一个参数是 "),a("code",[t._v("url")]),t._v("，第二个参数是 "),a("code",[t._v("config")]),t._v("，这个函数有点类似 "),a("code",[t._v("axios.get")]),t._v(" 方法支持的参数类型，不同的是如果我们想要指定 HTTP 方法类型，仍然需要在 "),a("code",[t._v("config")]),t._v(" 传入 "),a("code",[t._v("method")]),t._v("。")]),t._v(" "),a("p",[t._v("这就用到我们之前所学的函数重载知识点了，接下来我们来实现它。")]),t._v(" "),a("h2",{attrs:{id:"重载实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重载实现"}},[t._v("#")]),t._v(" 重载实现")]),t._v(" "),a("p",[t._v("首先我们要修改 "),a("code",[t._v("AxiosInstance")]),t._v(" 的类型定义。")]),t._v(" "),a("p",[a("code",[t._v("types/index.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AxiosInstance")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Axios")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AxiosRequestConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AxiosPromise")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AxiosRequestConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AxiosPromise\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们增加一种函数的定义，它支持 2 个参数，其中 "),a("code",[t._v("url")]),t._v(" 是必选参数，"),a("code",[t._v("config")]),t._v(" 是可选参数。")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("axios")]),t._v(" 函数实际上指向的是 "),a("code",[t._v("request")]),t._v(" 函数，所以我们来修改 "),a("code",[t._v("request")]),t._v(" 函数的实现。")]),t._v(" "),a("p",[a("code",[t._v("core/Axios.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AxiosPromise "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们把 "),a("code",[t._v("request")]),t._v(" 函数的参数改成 2 个，"),a("code",[t._v("url")]),t._v(" 和 "),a("code",[t._v("config")]),t._v(" 都是 "),a("code",[t._v("any")]),t._v(" 类型，"),a("code",[t._v("config")]),t._v(" 还是可选参数。")]),t._v(" "),a("p",[t._v("接着在函数体我们判断 "),a("code",[t._v("url")]),t._v(" 是否为字符串类型，一旦它为字符串类型，则继续对 "),a("code",[t._v("config")]),t._v(" 判断，因为它可能不传，如果为空则构造一个空对象，然后把 "),a("code",[t._v("url")]),t._v(" 添加到 "),a("code",[t._v("config.url")]),t._v(" 中。如果 "),a("code",[t._v("url")]),t._v(" 不是字符串类型，则说明我们传入的就是单个参数，且 "),a("code",[t._v("url")]),t._v(" 就是 "),a("code",[t._v("config")]),t._v("，因此把 "),a("code",[t._v("url")]),t._v(" 赋值给 "),a("code",[t._v("config")]),t._v("。")]),t._v(" "),a("p",[t._v("这里要注意的是，我们虽然修改了 "),a("code",[t._v("request")]),t._v(" 的实现，支持了 2 种参数，但是我们对外提供的 "),a("code",[t._v("request")]),t._v(" 接口仍然不变，可以理解为这仅仅是内部的实现的修改，与对外接口不必一致，只要保留实现兼容接口即可。")]),t._v(" "),a("h2",{attrs:{id:"编写-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-demo"}},[t._v("#")]),t._v(" 编写 demo")]),t._v(" "),a("p",[a("code",[t._v("examples/extend/app.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/extend/post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/extend/post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们使用了 "),a("code",[t._v("axios")]),t._v(" 2 种请求方式，打开页面运行 "),a("code",[t._v("demo")]),t._v("，通过 network 我们可以看到 2 种请求都是运行正常的。")]),t._v(" "),a("p",[t._v("至此我们实现了 "),a("code",[t._v("axios")]),t._v(" 函数的重载。官方 axios 支持了一种能力，我们可以去定义返回数据的类型，并在请求的时候指定该类型，然后在响应数据中我们就可以获取到该数据类型。下一节课我们就来实现这个 feature。")])])}),[],!1,null,null,null);s.default=e.exports}}]);