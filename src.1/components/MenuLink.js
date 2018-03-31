import React from 'react';
import {Route,Link} from 'react-router-dom';
//children 孩子们，也是一个函数
//render   路径匹配则渲染，不匹配则不渲染
//children 路径匹配则渲染，不匹配则渲染,不管匹配不匹配都渲染
//match 匹配上则有值，匹配不上则为null
export default function({to,children}){
  return (
    <Route exact path={to} children={({match})=>(
      <li className={match?"active":""}><Link to={to}>{children}</Link></li>
    )}/>
  )
}