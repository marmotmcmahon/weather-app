function toFahrenheit(k) {
	temp = Math.round((k - 273.15) * 9/5 + 32);
}

function apiRequest(city) {
	var request = new XMLHttpRequest();
	request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ad2f4ea29134ad456296567cc7fbb4ba", false);
	request.send(null);
	data = JSON.parse(request.responseText);
}

// JSON insertions for forecast previews
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function forecastInsertions(obj, city) {
	$('#temp' + i).html(temp + '&deg;');
	$('#city' + i).html(city);
	$('#icon' + i).html("<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>");
}

// JSON insertions into modals template
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function modalInsertions(obj, city) {
	modal = "#modal" + i;
	$(modal + ' > h2').html(city + " Weather");
	$(modal + ' > p:nth-child(2)').html(temp + '&deg;' + " with " + data.weather[0].description);
	$(modal + ' > p:nth-child(3)').html(data.wind.speed + " mph winds");
	$(modal + ' > p:nth-child(4)').html(data.main.humidity + "% humidity");
	// $(modal + ' > h2').html();
	// $(modal + ' > h2').html();
}

function loadPage() {
	$('.forecasts, .footer').show(); // Prevents uneven pageload
	$('#year').html((new Date).getFullYear()); // Adds copyright year
}