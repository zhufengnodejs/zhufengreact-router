import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
//如果想让个不是由路由渲染出来的组件拥有这三个属性，则需要用withRouter包裹一下
class Profile extends Component {
  render() {
    return (
      <div>
        个人页面
        <button
          onClick={()=>{
            localStorage.removeItem('login');
            this.props.history.push('/');
          }}
          className="btn btn-default">退出登录</button>
      </div>
    )
  }
}
export default withRouter(Profile);