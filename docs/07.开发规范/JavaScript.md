<a name="c17b66b8"></a>
# JavaScript 规范

<a name="3122bcfd"></a>
## `缩进`

```html
设置4个空格为一个 tab, 或者 2 个，具体视团队商议
```

<a name="2629bdbf"></a>
## 换行

```html
当一行代码逻辑过长时应手动换行，可以拆分当前逻辑，也可以让别人更好理解逻辑
```

<a name="2413f483"></a>
## 空行

```
代码块与代码块之间添加一个空行来区分
```

```javascript
function fun() {
}


function fun() {
}
```

<a name="2f9e6c7c"></a>
## `命名`

- 名称应有意义
- 驼峰模式
- 内置变量(不想对外但必须暴露的变量) 使用下划线开头
- 常量大写开头

```javascript
const Domain = 'http://www.quclouds.com' // 常量
let startTime = '2019-04-18'   // 变量
let _time = '2018-04-18' // 内置变量
```

<a name="2e34d97c"></a>
## `注释`

- 遵循每一个函数上都应有适当的注释
- 对外的函数应对参数做出描述
- 对外的函数且有返回值时应做出描述

<a name="deee6efc"></a>
## `分号`

```javascript
行尾禁止使用分号
提高代码可读性，建议不使用分号，多使用换行符来分割代码，尽可能的拆分代码
编译器会帮我们把行末的分号添加上，开发时不用担心代码在运行时会报错

let name = '张三',
    age = 20
console.log('name: %s, age: %s', name, age)
```

`如果团队中多数人习惯行尾添加分号，该规则可以修改`

<a name="35174531"></a>
## 两个对象比较

```javascript
除以下情况外，必须使用 !== 或 === 进行两个变量的比较
```

- 比较两个字面量的值
- 比较 typeof 的值
- 与 null 进行比较<br />typeof foo == 'undefined'<br />'hello' != 'world'<br />0 == 0<br />true == true<br />foo == null

<a name="e9072381"></a>
## 引号

```
尽可能地使用单引号
养成使用同一种引号的习惯，使代码风格统一
```

<a name="45532cc6"></a>
## 箭头函数参数

```
遵循 ES6 语法，不要求只有一个参数时强制使用小括号
```

<a name="027157e1"></a>
## 箭头函数大括号

```
遵循 ES6 语法，不要求只有一行语句时强制使用大花括号
```

<a name="38f161db"></a>
## generator 函数

```javascript
强制 generator 函数中 *号前有一个空格，*与函数名之间没有空格

function *generator() {
	yield "44"
	yield "55"
}
```


<a name="crlLw"></a>
## 解构

```javascript
取数组元素时视业务逻辑尽可能使用解构

const [fileDIr, ...param] = process.argv;
const [paramXXX, paramXXX] = param;

// 解构变量小于等于三个时建议放在一行
const { argv, config, env } = process;
// 大于三个时建议换行, 因为某些情况下需要进行默认值与重命名处理，换行下模式下结构情绪
const { 
  argv = [], 
  config = "", 
  env = "",
  version = ""
} = process;
```
<a name="XIroE"></a>
## 
<a name="TURgV"></a>
## 文件开头

应对当前文件做出描述<br />应写上署名

```javascript
/*
*  @file: 文件名称
*  @author: 作者
*  @description: 描述
*/
```
