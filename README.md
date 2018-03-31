# 1. 安装React路由
```js
npm i react-router-dom
```

## 2. 跑通基本路由
```js
import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
let Home=() => <div>Home</div>
let User=() => <div>User</div>
let Profile=() => <div>Profile</div>
export default (
  <Router>
    <React.Fragment>
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile}/>
    </React.Fragment>
  </Router>
)
```

```js
```

### 2.1 
- Route组件上有`path`和`component`属性,如果当前的路径和`Route`的`path`匹配会显示对应的`component`,这里还需注意`HashRouter`必须只能包含一个根元素,所以我们在所有的`Route`外层包了一个`div`标签
- 匹配路径的时候默认是匹配路径前缀

### 2.2 容器组件
- BrowserRouter: 浏览器自带的H5 API,restful风格,需要后台配合
- HashRouter: 使用hash方式进行路由,路径后均有#
> 在开发时我们一般使用HashRouter,上线后我们改用`BrowserRouter`

