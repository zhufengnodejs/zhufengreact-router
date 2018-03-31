import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//Router 路由的容器
//Route 路由规则 path路由 component是组件名称
function Home(){
  return <h1>Home</h1>
}
function User(){
  return <h1>User</h1>
}
function Profile(){
  return <h1>Profile</h1>
}
//因为匹配路径默认是只匹配前缀,只要当前URL路径和path的前缀相同就表示能匹配上，则渲染对应的组件
// exact表示精确匹配
//Hash history cannot PUSH the same path; a new entry will not be added to the history stack
//哈希历史栈不能推入相同的路径，一个新的条目将不会被添加到历史栈中
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/user">用户管理</Link></li>
        <li><Link to="/profile">个人设置</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>,document.querySelector('#root')
);

