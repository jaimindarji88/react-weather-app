import React from 'react'

var ErrorModal = React.createClass({
	propTypes:{
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	getDefaultProps: function(){
		return {
			title: 'Error'
		}
	},
	render: function(){
		var {title, message} = this.props
		return (
			<div id="error-modal" className="text-center">
				<h4>{title}</h4>
				<p>{message}</p>
			</div>
		)
	}
});

module.exports = ErrorModal;