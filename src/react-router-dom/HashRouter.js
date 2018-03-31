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
		return {
			...this.state,
			history: {
				push(path) {
					window.location.hash=path;
				}
			}
		};
	} 

	componentWillMount() {
		window.location.hash=window.location.hash||'/';
		let render=() => {
			this.setState({location:{pathname:window.location.hash.slice(1)||"/"}});
		}
		window.addEventListener('hashchange',render);
		render();
	}

	render() {
		return this.props.children;
	}
}