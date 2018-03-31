import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
export default class UserList extends Component {
  constructor(){
    super();
    this.state = {users:[]};
  }
  componentDidMount(){
    let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    this.setState({users});
  }
  delete = (id)=>{
    let index = this.state.users.findIndex(item=>item.id == id);
    let users = [...this.state.users.slice(0,index),...this.state.users.slice(index+1)];
    this.setState({users},()=>{
      localStorage.setItem('users',JSON.stringify(users));
    });
  }
  // pop push shift splice
  render() {
    return (
      <ul className="list-group">
        {
          this.state.users.map(user=>(
              <li key={user.id} className="list-group-item">
                <Link to={{pathname:`/user/detail/${user.id}`,state:{user}}} >{user.username} </Link><button className="btn btn-xs btn-danger pull-right" onClick={()=>this.delete(user.id)}>删除</button>
              </li>
          ))
        }
      </ul>
    )
  }
}