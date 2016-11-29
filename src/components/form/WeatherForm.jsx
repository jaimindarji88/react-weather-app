import React from 'react'
import {Button, Colors} from 'react-foundation'

var WeatherForm = React.createClass({
	onFormSubmit:function(e){
		e.preventDefault();

		var location = this.refs.location.value;
		if (location.length > 0){
			this.refs.location.value = "";
			this.props.onSearch(location);
		}
	},
	render: function(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type='search' ref='location' placeholder="Enter City Name"/>
					<Button color={Colors.PRIMARY} isHollow isExpanded>Get Weather</Button>
				</form>
			</div>
		)
	}
});

module.exports = WeatherForm