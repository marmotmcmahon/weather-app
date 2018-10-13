window.onload = function populateForecasts() {

	cities = ["New York", "Philadelphia", "Austin", "Moscow", "Beacon", "Zagreb"].sort();

	i = 1; // Counter

	// API request and JSON insertion for default cities
	// Idea: figure out how to request all cities in one go
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	cities.forEach(function(city) {

		apiRequest(city); // Make API request
		
		toFahrenheit(data.main.temp); // Convert K to F

		if (!$('#temp' + i )) { return; } // Exit early if .indexOf(city) > 4

		forecastInsertions(data, city); // JSON insertions for forecast previews

		modalInsertions(data, city); // JSON insertions for modals
		
		i += 1; // Increase counter
	});

	loadPage();

} // end Onload

// Custom city form input & API call
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function customCity() {

	city = document.getElementById('customCityInput').value; // Get user input

	apiRequest(city); // Make API request

	if (data.message == 'city not found') {
		$('#customCityError').html("City not found 🤢");
		return;
	}

	$('#customCityForm').hide(); // Hide form
	
	toFahrenheit(data.main.temp); // convert K to F

	i = "Custom";
	forecastInsertions(data, city); // JSON insertions for forecast preview

	// JSON insertions for modals
	// $(modalCustomCity + ' > h2').html(city + " Weather");
	// $(modalCustomCity + ' > p:nth-child(2)').html(temp + '&deg;' + " with " + data.weather[0].description);
	// $(modalCustomCity + ' > p:nth-child(3)').html(data.wind.speed + " mph winds");
	// $(modalCustomCity + ' > p:nth-child(4)').html(data.main.humidity + "% humidity");

	console.log(data);
}