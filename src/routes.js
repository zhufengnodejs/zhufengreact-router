import React,{Component} from 'react';
import {HashRouter as Router,Route,Link,Redirect,Switch} from './react-router-dom';
let Home=(props) => {
  return <div>Home</div>
}
let User=() => <div>User</div>
let Profile=() => <div>Profile</div>
let UserDetail=(props) => {
  console.log(props);
  return <div>User:{props.match.params.id}</div>;
}
class Login extends Component{
  handleClick=() => {
    localStorage.setItem('logined',true);
   
    this.props.history.push(this.props.location.state?this.props.location.state.from:'/');
  }
  render() {
    console.log(this.props.location);
    return (
      <div>
        <button onClick={this.handleClick}>登陆</button>
      </div>
    )
  }
}
function Protected({component: Component,...rest}) {
  return <Route {...rest} render={
    (props) => localStorage.getItem('logined')? <Component {...props} />:<Redirect to={{pathname: '/login',state:{from: props.location}}}/>
  }/>
}    
const MenuLink = ({ label, to, exact }) => (
  <Route path={to} exact={exact} children={({ match }) => (
      <li className={match ? 'active' : ''}>
          <Link to={to}>{label}</Link>
      </li>
  )}/>
)
export default (
  <Router>
    <div>
      <ul>
        <MenuLink label="Home" to="/home" exact={true} />
        <MenuLink label="User" to="/user" exact={true} />
        <MenuLink label="detail/1" to="/detail/1" exact={true} />
        <MenuLink label="Profile" to="/profile" exact={true} />
      </ul>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/detail/:id" component={UserDetail} />
        <Route path="/login" component={Login} />
        <Protected path="/profile" component={Profile}/>
      </Switch>

    </div>
  </Router>
)