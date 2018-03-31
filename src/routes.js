import React from 'react';
import {HashRouter as Router,Route,Link} from './react-router-dom';
let Home=(props) => {
  return <div>Home</div>
}
let User=() => <div>User</div>
let Profile=() => <div>Profile</div>
let UserDetail=(props) => {
  console.log(props);
  return <div>User:{props.match.params.id}</div>;
}
export default (
  <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/detail/1">detail/1</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/detail/:id" component={UserDetail} />
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>
)