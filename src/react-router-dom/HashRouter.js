import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class HashRouter extends Component{
	static childContextTypes={
		location: PropTypes.object,
		history:PropTypes.object
	}
	
	constructor() {
		super();
		this.state={
			location: {pathname:window.location.hash.slice(1)||"/"}
	   }
	}

	getChildContext() {
		let self=this;
		return {
			...self.state,
			history: {
				push(path) {
					if (typeof path=='object') {
						let {pathname,state}=path;
						self.setState({
							location: {...self.state.location,state}
						},() => {
							window.location.hash=pathname;
						});
					} else {
						window.location.hash=path;
					}
				}
			}
		};
	} 

	componentWillMount() {
		window.location.hash=window.location.hash||'/';
		let render=() => {
			this.setState({location:{...this.state.location,pathname:window.location.hash.slice(1)||"/"}});
		}
		window.addEventListener('hashchange',render);
		render();
	}

	render() {
		return this.props.children;
	}
}