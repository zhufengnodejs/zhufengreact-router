import React, {Component} from 'react';
import {Link,Route,Prompt} from 'react-router-dom';
export default class UserAdd extends Component {
  constructor(){
    super();
    this.state = {isEditing:false};
  }
  handleSubmit = (event)=>{
    event.preventDefault(); //阻止默认事件
    let username = this.username.value;//取得用户名这个真实DOM的value值
    let password = this.password.value;//取得密码这个真实DOM的value值
    //先从localStorage里取得老的数组，如果有则转成JSON对象,如果没有则为空数组
    let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    //把取得老数组加上新的用户对象构建成一个新的数组，并转成字符串重新写入localStorage
    localStorage.setItem('users',JSON.stringify([...users,{id:Date.now(),username,password}]));
    this.setState({isEditing:false},()=>{
      //跳转到用户列表页
      this.props.history.push('/user/list');
    });
  }
  handleChange = ()=>{
    console.log(!!(this.username.value || this.password.value));
    let isEditing = !!(this.username.value||this.password.value);
    this.setState({isEditing});
  }
  render() {
    return (
      <div>
        <Prompt
          when={this.state.isEditing}
          message={location=>`你真要切换到${location.pathname}地址吗?`}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input
              onChange={this.handleChange}
              ref={input=>this.username = input} type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              onChange={this.handleChange}
              ref={input=>this.password = input} type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}

/**
 history 是用来操作历史
   goBack 返回上一个路径
   push 跳转路径
 location 路径
   pathname 路径名
   state路径状态
 match 只有当匹配上的时候才会
   isExact 是否精确匹配
    params 路径参数
    path 来自于路由里的path属性
    url 来自于url地址中的#
    当有路径参数的时候path和url不一样的
 **/