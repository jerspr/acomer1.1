$(document).on("pageinit", "#choisir_ville", function(event) {

	$.getJSON( 'http://localhost/restaurante/demo.json', function(data) { 
		$.each( data.markers, function(i, marker) {
			$('#map_canvas').gmap('addMarker', {
				position: new google.maps.LatLng(marker.latitude, marker.longitude), 
				bounds: true 
			}).click(function() {
				$('#map_canvas').gmap('openInfoWindow', { 'content': marker.content }, this);
			});
		});
	});
});