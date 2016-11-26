import React from 'react'
import Nav from './Nav'

var Main = (props)=>{
	var a = (
		<div>
			<Nav />
			<h2>Main Component</h2>
			{props.children}
		</div>
	)
	return a
}

module.exports = Main;