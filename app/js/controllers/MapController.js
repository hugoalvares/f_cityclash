function MapController(ScreenService){

	this.initialize = function(){
		var mapCanvas = document.getElementById('map-canvas');
    	var mapOptions = {
			center: new google.maps.LatLng(44.5403, -78.5463),
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
   		};
    	var map = new google.maps.Map(mapCanvas, mapOptions);
	};

};

Configuration(function(ContextRegister){
	ContextRegister.register('MapController', MapController);
});