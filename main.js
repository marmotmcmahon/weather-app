window.onload = function populateForecasts() {

	cities = ["New York", "Philadelphia", "Austin", "Moscow", "Beacon", "Zagreb"].sort();

	i = 1; // Counter

	// API request and JSON insertion for default cities
	// Idea: figure out how to request all cities in one go
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	cities.forEach(function(city) {

		apiRequest(city); // Make API request
		
		if (!$('#temp' + i )) { return; } // Exit early if .indexOf(city) > 4

		forecastInsertions(data, city); // JSON insertions for forecast previews

		modalInsertions(data, city); // JSON insertions for modals
		
		i += 1; // Increase counter
	});
	console.log(data);

	function converter(x) {
		return x + 1;
	}

	test = 1;
	test = converter(test);
	console.log(test);

	loadPage();

} // end Onload

// Custom city form input & API call
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function customCity() {

	zip = document.getElementById('customCityInput').value; // Get user input

	zipRequest(zip); // Make API request

	city = data.name;

	const zipCodeRegex = /^\d{5}$/; // ZIP validator

	if ((data.message == 'city not found') || !zipCodeRegex.test(zip)) {
		$('#customCityError').html("Invalid ZIP code 🤢");
		return;
	}

	$('#customCityForm').hide(); // Hide form
	
	// toFahrenheit(data.main.temp); // convert K to F

	i = "Custom";
	forecastInsertions(data, city); // JSON insertions for forecast preview

	// modalInsertions(data, city);

	// JSON insertions for modals
	$('#bonia').html(city);
	// $(modalCustomCity + ' > h2').html(city + " Weather");
	// $(modalCustomCity + ' > p:nth-child(2)').html(temp + '&deg;' + " with " + data.weather[0].description);
	// $(modalCustomCity + ' > p:nth-child(3)').html(data.wind.speed + " mph winds");
	// $(modalCustomCity + ' > p:nth-child(4)').html(data.main.humidity + "% humidity");
}