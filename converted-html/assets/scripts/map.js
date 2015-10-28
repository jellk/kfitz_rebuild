function initMap() {

	var loc = new google.maps.LatLng(33.8370869,-84.398354);

	var main_color = '#ff0000',
	landscape = '#b8aea5',
	road = '#7c7773',
	saturation_value= -50,
	weight_value = 1.5,
	brightness_value= -10;

	var mapOptions = {
	  center: loc,
	  zoom: 13,
	  draggable: true,
	  scrollwheel: false,
	  panControl: false,
	  streetViewControl: true,
	  zoomControl: false
	};

	var map = new google.maps.Map(document.getElementById('google-map'),
        mapOptions);

	// Google Map Pin Marker

	var image = "/assets/images/map_marker.png";
	var marker = new google.maps.Marker({
    position: loc,
    map: map,
    icon: image
  });
}