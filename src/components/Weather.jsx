import React from "react"
import WeatherForm from "./form/WeatherForm"
import WeatherMessage from "./form/WeatherMessage"
import openWeatherApp from "../api/openWeatherApp"
import ErrorModal from "./form/ErrorModal"

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this;
		this.setState({
			isLoading:true, 
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		})

		openWeatherApp.getTemp(location).then(function(data){
			that.setState({
				location:location,
				temp: data.temp,
				isLoading: false
			});
		}, function(e){
			that.setState({
				isLoading: false,
				errorMessage: "City can't be found"
			});
		})
		
	},
	componentDidMount: function(){
		var location = this.props.location.query.location;
		if (location && location.length > 0){
			this.handleSearch(location)
			window.location.hash = '#/'
		}
	},
	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;
		if (location && location.length > 0){
			this.handleSearch(location)
			window.location.hash = '#/'
		}
	},
	render: function(){
		var {isLoading, temp, location, errorMessage} = this.state;
		var message;

		if (isLoading) {
			message = <h3 className="text-center">Getting the Weather...</h3>
		} else if (temp !== undefined && location) {
			message = (
				<WeatherMessage temp={temp} location={location}/>
			)
		}

		function renderError(){
			if (typeof errorMessage === 'string'){
				return <ErrorModal message={errorMessage}/>
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{message}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather