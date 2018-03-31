/**
 * 受保护路由就是指如果当前用户未登录，则不能访问被保护的路由，如果已经登录，则可以访问被保护的路由
 **/
import React from 'react';
import {Route,Redirect} from 'react-router-dom';
//rest={path:"/profile"}
/**
 * 路由的组件渲染有三种写法
 * component = 组件
 * render 是一个函数，返回值是一个组件
 * 如果当前用户已登录，则直接渲染受保护的页面，如果未登录，则重定向到登录页，并传递过去当前路径
 * 路由渲染出来的组件三个属性
 * history Router给他的 context
 * location
 * match
 */
export default function({component:Component,...rest}){
  return (
    <Route {...rest} render={({history,location,match})=>(
      localStorage.getItem('login')?<Component />:<Redirect to={{pathname:'/login',state:{from:location.pathname}}}/>
    )} />
  )
}