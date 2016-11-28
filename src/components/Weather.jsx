import React from "react"
import WeatherForm from "./form/WeatherForm"
import WeatherMessage from "./form/WeatherMessage"
import openWeatherApp from "../api/openWeatherApp"

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this;
		this.setState({isLoading:true})

		openWeatherApp.getTemp(location).then(function(data){
			that.setState({
				location:location,
				temp: data.temp,
				isLoading: false
			});
		}, function(error){
			that.setState({
				isLoading: false
			});
			alert(error);
		})
		
	},
	render: function(){
		var {isLoading, temp, location} = this.state;
		var message;

		if (isLoading) {
			message = <h3 className="text-center">Getting the Weather...</h3>
		} else if (temp !== undefined && location) {
			message = (
				<WeatherMessage temp={temp} location={location}/>
			)
		}
		return (
			<div>
				<h1 className="text-center">Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{message}
			</div>
		);
	}
});

module.exports = Weather