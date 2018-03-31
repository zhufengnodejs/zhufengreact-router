import React,{Component} from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
export default class Route extends Component{
	static contextTypes={
		location: PropTypes.object
	}
	constructor(props) {
		super(props);
		let {path,component}=props;
		this.path=path;
		this.component=component;
		this.keys=[];
		this.regexp=pathToRegexp(path,this.keys);
	}
	render() {
		let self=this;
		let {location}=self.context;//得到路径
		let result=location.pathname.match(self.regexp);
		if (result) {
			let [url,...values]=result;
			let match={
				url,
				path: self.path,
				params: self.keys.reduce((memo,key,index) => {
					memo[key.name]=values[index];
					return memo;
				},{})
			}
			let _component=self.component;
			let props={
				location,
				match
			}
			return <_component {...props}/>;
		}
		return null;
	}
}