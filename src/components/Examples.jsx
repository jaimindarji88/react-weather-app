import React from "react"
import {Link} from "react-router"
//import {Column, Row, Menu, MenuItem} from 'react-foundation'

var Examples = (props)=>{
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few examples locations to try out.</p>
			<ol>
				<li>
					<Link to='/?location=Ottawa'>Ottawa, Ontario</Link>
				</li>
				<li>
					<Link to='/?location=Toronto'>Toronto, Ontario</Link>
				</li>
				<li>
					<Link to='/?location=Florida'>Miami, Florida</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples