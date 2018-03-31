import React, {Component} from 'react';
export default class UserDetail extends Component {
  render() {
    //如果转跳转的时候带来了就有，如果跳转的没带过来就没有
    let user;
    if (this.props.location.state && this.props.location.state.user) {
      user = this.props.location.state.user;
    } else {
//如果状态 对象没有用户对象，可能是用户直接刷新了浏览器
      let {params: {id}} = this.props.match;
      let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
      user = users.find(item => item.id == id);
    }
    return (
      <div>
        {user.id}
        {user.username}
        {user.password}
      </div>
    )
  }
}