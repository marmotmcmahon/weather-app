$.getScript("functions.js");

window.onload = function populateForecasts() {

	// forEach loop will ignore any cities included past 5
	cities = ["New York", "Philadelphia", "Austin", "Moscow", "Beacon", "Zagreb"].sort();

	i = 1; // Counter

	// API request and JSON insertion for default cities
	// Idea for future: figure out how to request all cities in one go
	// ––––––––––––––––––––––––––––––––––––––––––––––––––
	cities.forEach(function(city) {

		apiRequest(city); // Make API request
		
		if (!$('#temp' + i )) { return; } // Exit early if .indexOf(city) > 4

		forecastInsertions(data, city); // JSON insertions for forecast previews

		modalInsertions(data, city); // JSON insertions for modals
		
		i += 1; // Increase counter
	});

	loadPage();

}

// Custom city form input & API call
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function customCity() {

	zip = document.getElementById('customCityInput').value; // Get user input

	zipRequest(zip); // Make API request

	city = data.name;

	// Validation
	const zipCodeRegex = /^\d{5}$/;
	if ((data.message == 'city not found') || !zipCodeRegex.test(zip)) {
		$('#customCityError').html("Invalid ZIP code 🤢");
		return;
	}

	$('#customCityForm').hide(); // Hide form
	
	// toFahrenheit(data.main.temp); // convert K to F

	i = "Custom";
	forecastInsertions(data, city); // JSON insertions for forecast preview

	modalInsertions(data, city);

}