
## demo.tsx

```javascript
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setPageTitle, setInfoList } from '../../store/actions';


class ReduxDemo extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0,
      pageTitle: ''
    };
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    let { setPageTitle, setInfoList, pageTitle } = this.props;
    this.props.setPageTitleFn(this.state.num);
    this.setState({
      pageTitle
    })
  }
  add() {
    const num = this.state.num + 1;
    this.setState({
      num
    }, () => {
      this.props.setPageTitleFn(num);
      let { pageTitle } = this.props;
      console.log(this.props);
      this.setState({
        pageTitle
      })
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.add}>加一</Button>
        <br/>
        {this.state.num}
        <hr/>
        {this.state.pageTitle}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitleFn (data) {
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setPageTitle(data))
      
    },
    setInfoList (data) {
      dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
```

## main.ts

```javascript
// <Provider store={store}></Provider> <br />意思是这个组件内 被包装的所有组件 都可以使用store  
import React from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// 项目路由
import Routers from 'src/routers/index';
import store from '../store/index';
import { Provider } from 'react-redux';

import('./config');

export default class Main extends React.Component {
  render(): React.ReactElement {
    // 配置 antd 中文模式
    return (
      <ConfigProvider locale={zhCN}>
        // 这里是重点 
        <Provider store={store}>
          <Routers></Routers>
        </Provider>
      </ConfigProvider>
    );
  }
}
```



## index.ts

```javascript
import { applyMiddleware, createStore } from 'redux';
 
/**
 * 中间件
 * 作用:如果不使用该中间件,当我们dispatch一个action时,需要给dispatch函数传入action对象；
 * 但如果我们使用了这个中间件,那么就可以传入一个函数,这个函数接收两个参数:dispatch和getState。
 * 这个dispatch可以在将来的异步请求完成后使用,对于异步action很有用
 */
import thunk from 'redux-thunk';
 
// 引入reducer
import reducers from './reducers';
 
// 创建store实例
let store = createStore(
  reducers,
  applyMiddleware(thunk)
)
 
export default store
```

## actions.ts


```javascript
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_PAGE_TITLE',
      data: data
    });
  }
}
 
export function setInfoList (data) {
  return (dispatch, getState) => {
    // 测试接口
    let url = 'http://localhost:8000/user';
    // 使用fetch实现异步请求
    window.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json()
    }).then(res => {
      let { code, data } = res
      if(code === 0){
        dispatch({
          type: 'SET_INFO_LIST',
          data: data
        })
      }
    })
  }
}
```

## reducers.ts
```javascript
import { combineReducers } from 'redux';
import defaultState from './state';
 
// 一个reducer就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}
 // 一个reducer就是一个函数
function infoList (state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
      return state
  }
}
 
// 导出所有reducer
export default combineReducers({
  pageTitle,
  infoList
})

```

## state.ts
```javascript
export default {
  pageTitle: '你看这个玩',
  infoList: []
} as {
  pageTitle: String,
  infoList: Array<any>
}
```
