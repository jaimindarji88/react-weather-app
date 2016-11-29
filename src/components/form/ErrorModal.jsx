import React from 'react'
import $ from 'jquery'
import {Button, Colors} from 'react-foundation'

var ErrorModal = React.createClass({
	componentDidMount:function(){
		
	},
	render: function(){
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal>
				<h4>Errorrrrr</h4>
				<p>Errorrr message</p>
				<p>
					<Button color={Colors.PRIMARY} isHollow isExpanded data-close>Okay</Button>
				</p>
			</div>
		)
	}
});

module.exports = ErrorModal;