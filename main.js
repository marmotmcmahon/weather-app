window.onload = function what(){
	var cities = ["New York", "Philadelphia", "Austin", "Portland", "Beacon"];
	var i = 1;
	cities.forEach(function(city) {
		var request = new XMLHttpRequest();
		request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ad2f4ea29134ad456296567cc7fbb4ba", false);
		request.send(null);
		var data = JSON.parse(request.responseText);
		console.log(data);
		var temp = Math.round((data.main.temp - 273.15) * 9/5 + 32);
		document.getElementById("temp" + i).innerHTML = temp + "&deg;";
		document.getElementById("city" + i).innerHTML = city;
		// document.getElementById("description" + i).innerHTML = data.weather[0].main;
		document.getElementById("icon" + i).innerHTML = "<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>";
		i += 1;
	});
}