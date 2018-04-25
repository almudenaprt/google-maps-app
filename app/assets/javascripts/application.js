// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .

function initMap() {
    
    var myCoords = new google.maps.LatLng(36.7069361, -4.4694441000000324);
  
    var mapOptions = {
        zoom: 15,
        center: myCoords,
        scrollwheel: false    
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myCoords,
        map: map,
        title: 'TTS',
        icon: '/assets/pulpo.png',
        animation: google.maps.Animation.DROP,
        draggable: true
    });

    var contentString = '<h2>TTS</h2>' + '<p>Tech Talent South</p>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}


// --------

// SHOW DESTINATION

function initDestinationMap() {

    var myCoords = new google.maps.LatLng(latitude,longitude);

    var mapOptions = {
       zoom: 15,
       scrollwheel: false,   
       center: myCoords
    }

    var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

    var marker = new google.maps.Marker({
      position: myCoords,
      map: map,
      title: address
    });
 
    var contentString = '<h2>'+ address + '</h2>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
}