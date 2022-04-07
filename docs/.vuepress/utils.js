/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-04-07 17:28:16
 * @FilePath: /vuePress-web-view/docs/.vuepress/utils.js
 */
let filesObj = {};
const files = require.context('../', true, /\.(vue|js|md)$/);
console.log(files);
// 根据文件名组织模块对象
files.keys().map(src => {
  const match = src.match(/\/(.+)\./);
  if (match && match.length >= 1) {
    console.log(match);
    // const name = match[1];
    // const moduleValue = files(src);
    // if (moduleValue.default) {
    //   filesObj[name] = moduleValue.default;
    // }
  }
});
function isObjArr(value) {
  if (Object.prototype.toString.call(value) === "[object Array]") {
    return 'Array';
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    return 'Object';
  }
  return false;
}

function getFiles(type) {
  if (isObjArr(type) == 'Array') {
    return Object.values(filesObj)
  } else if (isObjArr(type) == 'Object') {
    return filesObj;
  }
  return {}
}

export default getFiles