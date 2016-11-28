import React from "react"

var WeatherMessage = ({temp, location})=>{
	return (
		<h3 className="text-center">It's {temp}&#8451; in {location}</h3>
	)
}

module.exports = WeatherMessage;