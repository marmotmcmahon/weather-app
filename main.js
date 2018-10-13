window.onload = function populateForecasts() {

	var cities = ["New York", "Philadelphia", "Austin", "Moscow", "Beacon", "Zagreb"].sort();

	// Counter
	var i = 1;

	// API request and JSON insertion for default cities
	// Idea: figure out how to request all cities in one go
	cities.forEach(function(city) {
		var request = new XMLHttpRequest();
		request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ad2f4ea29134ad456296567cc7fbb4ba", false);
		request.send(null);
		var data = JSON.parse(request.responseText);
		
		// convert K to F
		toFahrenheit(data.main.temp);

		// Exit early if cities.length exceeds number of HTML display locations (5)
		if (!$('#temp' + i)) { return; }

		// JSON insertions for basic forecasts
		$('#temp' + i).html(temp + '&deg;');
		$('#city' + i).html(city);
		$('#icon' + i).html("<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>");

		// JSON insertions for modals
		var modal = "#modal" + i;
		$(modal + ' > h2').html(city + " Weather");
		$(modal + ' > p:nth-child(2)').html(temp + '&deg;' + " with " + data.weather[0].description);
		$(modal + ' > p:nth-child(3)').html(data.wind.speed + " mph winds");
		$(modal + ' > p:nth-child(4)').html(data.main.humidity + "% humidity");
		// $(modal + ' > h2').html();
		// $(modal + ' > h2').html();
		
		// console.log(data);

		// Increase counter
		i += 1;
	});

	// Prevent load lag by showing section only after API completion
	$('.forecasts').show();

} // end Onload function

// Custom city form input & API call
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function customCity() {

	// Get user input
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	var city = document.getElementById('customCityInput').value;

	// Make API request
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	var request = new XMLHttpRequest();
	request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ad2f4ea29134ad456296567cc7fbb4ba", false);
	request.send(null);
	var data = JSON.parse(request.responseText);
	if (data.message == 'city not found') {
		$('#customCityError').html("City not found 🤢");
		return;
	}

	$('#customCityForm').hide();
	
	// convert K to F
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	toFahrenheit(data.main.temp);

	// JSON insertions for custom city
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	$('#cityCustomCity').html(city);
	$('#tempCustomCity').html(temp + '&deg;');
	$('#iconCustomCity').html("<img src=http://openweathermap.org/img/w/10d.png>");

	// JSON insertions for modals
	// $(modalCustomCity + ' > h2').html(city + " Weather");
	// $(modalCustomCity + ' > p:nth-child(2)').html(temp + '&deg;' + " with " + data.weather[0].description);
	// $(modalCustomCity + ' > p:nth-child(3)').html(data.wind.speed + " mph winds");
	// $(modalCustomCity + ' > p:nth-child(4)').html(data.main.humidity + "% humidity");

	console.log(data);
}



