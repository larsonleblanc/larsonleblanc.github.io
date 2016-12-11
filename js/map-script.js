
'use strict';

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function(){
    is_windowresize = true;
});


//INITIALIZE MAP
function initialize() {

    //DEFINE MAP OPTIONS
    //=======================================================================================
    var mapCeremonyOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(28.021682, -82.789510),
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        //scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true,
        //rotateControl:true,

    };

    //CREATE NEW MAP
    //=======================================================================================
    var mapCeremony = new google.maps.Map(document.getElementById('map-canvas-ceremony'), mapCeremonyOptions);

    //MARKER ICON
    //=======================================================================================
    //var image = 'facebook30.svg';

    //ADD NEW MARKER
    //=======================================================================================
    /*var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom',
      icon: image
      });

      var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(-12.042559, -77.027426),
      map: map,
      title: 'Click to zoom'
      });*/


    //ADD NEW MARKER WITH LABEL
    //=======================================================================================
    var marker1 = new MarkerWithLabel({
        position: new google.maps.LatLng(28.020401, -82.789965),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: mapCeremony,
        labelContent: '<div class="de-icon circle medium-size" style="background-color:#f0394d; border:1px solid #FFF"><i class="de-icon-bell-alt" style="color:#FFF"></i></div>',
        labelAnchor: new google.maps.Point(29, 28),
        labelClass: "labels" // the CSS class for the label
    });

    var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(28.019160, -82.789643),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: mapCeremony,
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-taxi"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});

    var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(28.023995, -82.790722),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: mapCeremony,
         	labelContent: '<div class="de-icon circle small-medium" style="background-color:#67a80e"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(29, 28),
       		labelClass: "labels" // the CSS class for the label
     		});

    // var marker4 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.046617, -77.030567	),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
    //
    // var marker5 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.045857, -77.032538),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
    //
    // var marker6 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.046053, -77.028732),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
    //
    // var marker7 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.045363, -77.029939),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
    //marker.setMap( map );


    //INFO WINDOWS
    //=======================================================================================
    var contentString1 = '<div>'+
        '<a href="https://goo.gl/maps/XFg9c3BBYz32">WEDDING CEREMONY</a>' +
    '</div>';

    // var contentString2 = '<div>'+
    //     'CEREMONY PARKING' +
    // '</div>';

    var contentString3 = '<div>'+
        '<a href="https://goo.gl/maps/Uc8JdGXXMqz">RECEPTION</a>' +
    '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    // var infowindow2 = new google.maps.InfoWindow({
    //     content: contentString2
    // });

    var infowindow3 = new google.maps.InfoWindow({
      		content: contentString3
    	});



    //OPEN INFO WINDOWS ON LOAD
    //=======================================================================================
    infowindow1.open(mapCeremony,marker1);
    // infowindow2.open(mapCeremony,marker2);
    infowindow3.open(mapCeremony,marker3);

    //ON CLICK MARKER, OPEN INFO WINDOWS
    //=======================================================================================
    google.maps.event.addListener(marker1, 'click', function() {
        infowindow.open(mapCeremony,marker1);
    });

    // google.maps.event.addListener(marker2, 'click', function() {
    //     infowindow.open(mapCeremony,marker2);
    // });

    google.maps.event.addListener(marker3, 'click', function() {
        infowindow.open(mapCeremony,marker3);
    });

    //ON MARKER CLICK EVENTS
    //=======================================================================================
    /*google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(17);
      map.setCenter(marker.getPosition());
      infowindow.open(map,marker);
      });

      google.maps.event.addListener(marker1, 'click', function() {
      map.setZoom(17);
      map.setCenter(marker.getPosition());
      infowindow1.open(map,marker1);
      });

      google.maps.event.addListener(marker2, 'click', function() {
      map.setZoom(17);
      map.setCenter(marker.getPosition());
      infowindow1.open(map,marker2);
      });*/

    //ON BOUND EVENTS AND WINDOW RESIZE
    //=======================================================================================
    google.maps.event.addListener(mapCeremony, 'bounds_changed', function() {
        if (is_windowresize)
        {
            mapCeremony.setCenter(marker1.getPosition());
            window.setTimeout(function() {
                mapCeremony.panTo(marker1.getPosition());
            }, 500);
        }
        is_windowresize=false;
    });

    //DEFINE MAP OPTIONS
    //=======================================================================================
    var mapReceptionOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(28.021682, -82.789510),
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        //scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true,
        //rotateControl:true,

    };

    //CREATE NEW MAP
    //=======================================================================================
    var mapReception = new google.maps.Map(document.getElementById('map-canvas-reception'), mapReceptionOptions);

    //MARKER ICON
    //=======================================================================================
    //var image = 'facebook30.svg';

    //ADD NEW MARKER
    //=======================================================================================
    /*var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom',
      icon: image
      });

      var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(-12.042559, -77.027426),
      map: map,
      title: 'Click to zoom'
      });*/


      //ADD NEW MARKER WITH LABEL
      //=======================================================================================
      var marker1 = new MarkerWithLabel({
          position: new google.maps.LatLng(28.020401, -82.789965),
          draggable: false,
          raiseOnDrag: false,
          icon: ' ',
          map: mapReception,
          labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-bell-alt" style="color:#FFF"></i></div>',
          labelAnchor: new google.maps.Point(20, 29),
          labelClass: "labels" // the CSS class for the label
      });

      // var marker2 = new MarkerWithLabel({
      //    		position: new google.maps.LatLng(28.019160, -82.789643),
      //    		draggable: false,
      //    		raiseOnDrag: false,
      //    		icon: ' ',
      //    		map: mapReception,
      //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-taxi"></i></div>',
      //    		labelAnchor: new google.maps.Point(0, 0),
      //    		labelClass: "labels" // the CSS class for the label
      //  		});

      var marker3 = new MarkerWithLabel({
         		position: new google.maps.LatLng(28.023995, -82.790722),
         		draggable: false,
         		raiseOnDrag: false,
         		icon: ' ',
         		map: mapReception,
           	labelContent: '<div class="de-icon circle medium-size" style="background-color:#67a80e; border:1px solid #FFF"><i class="de-icon-food"></i></div>',
         		labelAnchor: new google.maps.Point(29, 28),
         		labelClass: "labels" // the CSS class for the label
       		});

      // var marker4 = new MarkerWithLabel({
      //    		position: new google.maps.LatLng(-12.046617, -77.030567	),
      //    		draggable: false,
      //    		raiseOnDrag: false,
      //    		icon: ' ',
      //    		map: mapReception,
      //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
      //    		labelAnchor: new google.maps.Point(0, 0),
      //    		labelClass: "labels" // the CSS class for the label
      //  		});
      //
      // var marker5 = new MarkerWithLabel({
      //    		position: new google.maps.LatLng(-12.045857, -77.032538),
      //    		draggable: false,
      //    		raiseOnDrag: false,
      //    		icon: ' ',
      //    		map: mapReception,
      //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
      //    		labelAnchor: new google.maps.Point(0, 0),
      //    		labelClass: "labels" // the CSS class for the label
      //  		});
      //
      // var marker6 = new MarkerWithLabel({
      //    		position: new google.maps.LatLng(-12.046053, -77.028732),
      //    		draggable: false,
      //    		raiseOnDrag: false,
      //    		icon: ' ',
      //    		map: mapReception,
      //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
      //    		labelAnchor: new google.maps.Point(0, 0),
      //    		labelClass: "labels" // the CSS class for the label
      //  		});
      //
      // var marker7 = new MarkerWithLabel({
      //    		position: new google.maps.LatLng(-12.045363, -77.029939),
      //    		draggable: false,
      //    		raiseOnDrag: false,
      //    		icon: ' ',
      //    		map: mapReception,
      //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
      //    		labelAnchor: new google.maps.Point(0, 0),
      //    		labelClass: "labels" // the CSS class for the label
      //  		});
      //marker.setMap( map );


      //INFO WINDOWS
      //=======================================================================================
      var contentString1 = '<div>'+
          '<a href="https://goo.gl/maps/XFg9c3BBYz32">WEDDING CEREMONY</a>' +
      '</div>';

      // var contentString2 = '<div>'+
      //     'CEREMONY PARKING' +
      // '</div>';

      var contentString3 = '<div>'+
          '<a href="https://goo.gl/maps/Uc8JdGXXMqz">RECEPTION</a>' +
      '</div>';

      var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
      });

      // var infowindow2 = new google.maps.InfoWindow({
      //     content: contentString2
      // });

      var infowindow3 = new google.maps.InfoWindow({
        		content: contentString3
      	});



      //OPEN INFO WINDOWS ON LOAD
      //=======================================================================================
      infowindow1.open(mapReception,marker1);
      // infowindow2.open(mapReception,marker2);
      infowindow3.open(mapReception,marker3);

      //ON CLICK MARKER, OPEN INFO WINDOWS
      //=======================================================================================
      google.maps.event.addListener(marker1, 'click', function() {
          infowindow1.open(mapReception,marker1);
      });

      // google.maps.event.addListener(marker2, 'click', function() {
      //     infowindow2.open(mapReception,marker2);
      // });

      google.maps.event.addListener(marker3, 'click', function() {
          infowindow3.open(mapReception,marker3);
      });

    //ON MARKER CLICK EVENTS
    //=======================================================================================
    /*google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(17);
      map.setCenter(marker.getPosition());
      infowindow.open(map,marker);
      });

      google.maps.event.addListener(marker1, 'click', function() {
      map.setZoom(17);
      map.setCenter(marker.getPosition());
      infowindow1.open(map,marker1);
      });

      google.maps.event.addListener(marker2, 'click', function() {
      map.setZoom(17);
      map.setCenter(marker.getPosition());
      infowindow1.open(map,marker2);
      });*/

    //ON BOUND EVENTS AND WINDOW RESIZE
    //=======================================================================================
    google.maps.event.addListener(mapReception, 'bounds_changed', function() {
        if (is_windowresize)
        {
            map.setCenter(marker1.getPosition());
            window.setTimeout(function() {
                mapReception.panTo(marker1.getPosition());
            }, 500);
        }
        is_windowresize=false;
    });
}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);
