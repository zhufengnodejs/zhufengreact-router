import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import Home from "./components/Home/index";
import User from "./components/User/index";
import Profile from "./components/Profile/index";
import ProtectedRoute from './components/ProtectedRoute';
import MenuLink from './components/MenuLink';
import Login from "./components/Login/index";
function NoMatch() {
  return <h1>未找到页面</h1>
}
export default  (
  <Router>
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">用户管理系统</a>
          </div>
          <ul className="nav navbar-nav">
            <MenuLink to="/">首页</MenuLink>
            <MenuLink to="/user">用户管理</MenuLink>
            <MenuLink to="/profile">个人设置</MenuLink>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <ProtectedRoute path="/profile" component={Profile}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </div>
  </Router>
)
//如果希望最多只显示一个组件的话则把若干个路由由Switch包裹起来
//Switch