import React from 'react'
import Nav from './Nav'
import {Column, Row} from 'react-foundation'

var Main = (props)=>{
	var a = (
		<div>
			<Nav />
			<Row>
				<Column medium={6} large={4} centerOnSmall>
					{props.children}
				</Column>
			</Row>
		</div>
	)
	return a
}

module.exports = Main;