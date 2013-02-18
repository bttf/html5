var latitude;
var longitude;
function get_location() {
	if (navigator.geolocation) {
		// passing in a handler function
		navigator.geolocation.getCurrentPosition(displayLocation);
	}
	else {
		alert("Sorry bro, no geolocation support on whatever crap browser you're using.");
	}
}

function displayLocation(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;

	var div = document.getElementById("locations");
	div.innerHTML = "your coords are as follows: " + latitude + ", " + longitude;
	var map;
	var position = new google.maps.LatLng(latitude, longitude);
	var mapOptions = {
		zoom: 8,
		center: position,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var infoWindow = new google.maps.InfoWindow({
		map: map,
		position: position,
		content: "i found you"
	});
}
