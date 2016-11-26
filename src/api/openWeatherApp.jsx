import axios from 'axios'

const API_KEY = 'cf512e21806b0ccd581ea793d8936fb7';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;


module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location)
		var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`

		return axios.get(requestUrl).then(function(res){
			if (res.data.cod !== 200){
				throw new Error(res.data.message);
			}
			var data = {
				temp: res.data.main.temp
			}
			return data;
		}, function(res){
			throw new Error(res.data.message)
		});
	}
}