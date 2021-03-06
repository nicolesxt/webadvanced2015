$.ajax({
	url: 'http://api.wunderground.com/api/b58688e36796854a/conditions/q/NY/New_York.json',
	dataType: 'jsonp',
	success: function (data){
		//this function is called when data is sent from the server.
		// console.log(data);

		var temp = document.querySelector('.weather-temp');
		temp.innerHTML = data.current_observation.feelslike_f;
		// console.log(temp);

		var type = document.querySelector('.weather-type');
		type.innerHTML = data.current_observation.weather;
		// console.log(type);

	},
	error: function (){
		console.log('error drrrrr');
	}
});


$.ajax({
	url:'http://api.wunderground.com/api/b58688e36796854a/forecast10day/q/NY/New_York.json',
	dataType: 'jsonp',
	success: function (data){
		var forecast = data.forecast.txt_forecast.forecastday;
		console.log(forecast);


		for (var i = 0; i < forecast.length; i++){
			console.log(forecast[i].fcttext);

			var forecastDay = document.createElement('div');
			var forecastIcon = document.createElement('img');
			var forecastTitle = document.createElement('h2');
			var forecastDescription = document.createElement('p');

			forecastIcon.src = forecast[i].icon_url;
			forecastTitle.innerHTML = forecast[i].title;
			forecastDescription.innerHTML = forecast[i].fcttext;

			forecastDay.appendChild(forecastTitle);
			forecastDay.appendChild(forecastIcon);
			forecastDay.appendChild(forecastDescription);

			var forecastContainer = document.querySelector('.forecast');
			forecastContainer.appendChild(forecastDay);

		}

	}

});