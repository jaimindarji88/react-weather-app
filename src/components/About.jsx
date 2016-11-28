import React from 'react'

var About = (props)=>{
	return (
		<div>
			<h1 className='text-center'>About</h1>
			<p>Weather application made using ReactJS</p>
			<p>Here are some of the tools I used</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">
						ReactJS, Javascript Framework
					</a>
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">
						Open Weather Map Rest API to get the weather data by city name
					</a>
				</li>
			</ul>
		</div>
	)
}

module.exports = About