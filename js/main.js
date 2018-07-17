/***********************************************
* Loading gif
***********************************************/
$(window).load(function() {
  setTimeout(function () {
    $(".loading").fadeOut("slow");
  }, 1000);
});

/***********************************************
* Slideshow Gallery
***********************************************/
jQuery('#intro-slides').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  captions: false, // Position: overlay, below, custom, false

  // pager
  pager: false,

  // controls
  controls: false,
  autoHover: false,

  // transitions
  transition: 'kenburns', // fade, horizontal, kenburns, false
  kenZoom: 0,
  speed: 6500 // time the transition takes (ms)
});

/***********************************************
* Google maps
***********************************************/
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-14.8604842, -40.8395472), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}],

        // Disable scrolling
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('maps');
    var encontrosCoordinates = [
    {lat: -14.864104, lng: -40.834029},//FTC
    {lat: -14.892335, lng: -40.845176},//Shopping
    {lat: -14.848931, lng: -40.838189}//TRANQ
    ];

    var passCoordinates = [
      {lat: -14.866557, lng: -40.855270},//FTC
      {lat: -14.859317, lng: -40.858679},
      {lat: -14.858690, lng: -40.841450},
      {lat: -14.859640, lng: -40.786706}
    ];
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var encontros = new google.maps.Polyline({
        path: encontrosCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      encontros.setMap(map);

      var pass = new google.maps.Polyline({
          path: passCoordinates,
          geodesic: true,
          strokeColor: '#4CAF50',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        pass.setMap(map);

    // Let's also add a marker while we're at it
    var markerFtc = new google.maps.Marker({
        position: new google.maps.LatLng(-14.864104, -40.834029),
        map: map,
        title: 'FTC'
    });
    var ftcContent = '<h5><b>FTC</b></h5><p><b>Início de tudo</b><p><a href="#ftc" class="smooth-scroll btn btn-light">+Detalhes</a></p>'

    var infowindowFtc = new google.maps.InfoWindow({
        content: ftcContent
    });
    markerFtc.addListener('click', function() {
        infowindowFtc.open(map, markerFtc);
      //  var u = new SpeechSynthesisUtterance('Jean');
        //speechSynthesis.speak(u);
    });

    var markerShopping = new google.maps.Marker({
        position: new google.maps.LatLng(-14.892335, -40.845176),
        map: map,
        title: ''
    });
    var infowindowShopping = new google.maps.InfoWindow({
        content: '<h5><b>Shopping</b></h5><p><b>Encontros no estacionamento</b><p class="text-center"><a href="#shopping" class="smooth-scroll btn btn-light">+Detalhes</a></p>'
    });
    markerShopping.addListener('click', function() {
        infowindowShopping.open(map, markerShopping);
    });

    var markerTranq = new google.maps.Marker({
        position: new google.maps.LatLng(-14.848931, -40.838189),
        map: map,
        title: ''
    });
    var infowindowTranq = new google.maps.InfoWindow({
        content: '<h5><b>Praça Tranquedo</b></h5><p><b>The best date</b><p class="text-center"><a href="#tranq" class="smooth-scroll btn btn-light">+Detalhes</a></p>'
    });
    markerTranq.addListener('click', function() {
        infowindowTranq.open(map, markerTranq);
    });

    var markerCond = new google.maps.Marker({
        position: new google.maps.LatLng(-14.859640, -40.786706),
        map: map,
        icon: 'img/star.png',
        title: ''
    });

    var markerPT = new google.maps.Marker({
        position: new google.maps.LatLng(-14.866557, -40.855270),
        map: map,
        icon: 'img/star.png',
        title: ''
    });

    var markerIgreja = new google.maps.Marker({
        position: new google.maps.LatLng(-14.859317, -40.858679),
        map: map,
        icon: 'img/star.png',
        title: ''
    });

    var markerClinica = new google.maps.Marker({
        position: new google.maps.LatLng(-14.858690, -40.841450),
        map: map,
        icon: 'img/star.png',
        title: ''
    });
}

/***********************************************
* Intense - Image zooming
***********************************************/
window.onload = function() {
  var elements = document.querySelectorAll( '.zoom, .portfolio-item' );
  Intense( elements );
}

/***********************************************
* Hamburger menu behaviour
***********************************************/
$(window).scroll(function() {
  if($(document).scrollTop() > 1){
    $('#hamburger').removeClass('dark');
  }
  else {
    $('#hamburger').addClass('dark');
  }
});

// Animate icon on click
$(document).ready(function(){
  $('#hamburger').click(function(){
    $(this).toggleClass('open');
    $('.navbar-abel').toggleClass('open');
  });
});

// Set hamburger icon color depending on background (light or dark)
document.addEventListener('DOMContentLoaded', function () {
  BackgroundCheck.init({
    targets: '.bg-check',
    images: '.bg'
  });
});


/***********************************************
* Smooth scrolling
***********************************************/
$('a').click(function(e){

  // If internal link
  if (/#/.test(this.href)) {
    e.preventDefault();

    var target = $( $.attr(this, 'href') );
    $('body,html').animate({'scrollTop': target.offset().top}, 1000, function(){ animating = false; });
  }

});


/***********************************************
* Amalytics
***********************************************/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','../../../www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-69023838-3', 'auto');
ga('send', 'pageview');
