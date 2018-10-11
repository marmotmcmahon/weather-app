window.onload = function what(){
	var cities = ["New York", "Philadelphia", "Austin", "Portland", "Beacon"];
	var i = 1;
	cities.forEach(function(city) {
		var request = new XMLHttpRequest();
		request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ad2f4ea29134ad456296567cc7fbb4ba", false);
		request.send(null);
		var data = JSON.parse(request.responseText);
		//convert K to F
		var temp = Math.round((data.main.temp - 273.15) * 9/5 + 32);
		$('#temp' + i).html(temp + '&deg;');
		$('#city' + i).html(city);
		$('#icon' + i).html("<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>");
		i += 1;
	});

	//toggle details section
	$('.details').click(function(){
	    $(this).find('.hider').toggle();
	});
}