import React,{Component} from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
export default class Route extends Component{
	static contextTypes={
		location: PropTypes.object,
		history:PropTypes.object
	}
	constructor(props) {
		super(props);
		this.keys=[];
		this.regexp=pathToRegexp(props.path,this.keys);
	}
	render() {
		let self=this;
		let {path,component:Component,render,children}=this.props;
		let {location}=self.context;//得到路径
		let result=location.pathname.match(self.regexp);
		let props={
			location,
			history:this.context.history
		}
		if (result) {
			let [url,...values]=result;
			let match={
				url,
				path,
				params: self.keys.reduce((memo,key,index) => {
					memo[key.name]=values[index];
					return memo;
				},{})
			}
			props.match=match;
			if (render) {
				return render(props);
			} else if (Component) {
				return <Component {...props}/>;
			} else if (children) {
				return children(props);
			}else {
				return null;
			}
			
		} else if (children) {
			return children(props);
		} else {
			return null;
		}
	}
}