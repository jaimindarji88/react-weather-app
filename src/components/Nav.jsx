import React from 'react'
import {Link, IndexLink} from 'react-router'

var Nav = (props)=>{
	return(
		<div>
			<h2>Nav Comp</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Get About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Get Examples</Link>
		</div>
	)
}

module.exports = Nav;