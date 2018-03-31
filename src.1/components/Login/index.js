import React, {Component} from 'react';
export default class Login extends Component {
  handleClick = ()=>{
    localStorage.setItem('login','true');
    this.props.history.push(this.props.location.state?this.props.location.state.from:'/');
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>登录</button>
      </div>
    )
  }
}