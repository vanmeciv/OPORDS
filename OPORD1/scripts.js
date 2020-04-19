var mymap = L.map('mapid').setView([46.881, -123.2014], 10.45);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g'
}).addTo(mymap);


// FOB Spartan
var spartan = L.divIcon({className: 'spartan',iconAnchor: [150,27]});
// you can set .my-div-icon styles in CSS
L.marker([ 46.8472339, -123.2177278 ], {icon: spartan}).addTo(mymap);
// var spartan = L.marker([	46.8472339, -123.2177278]).addTo(mymap);

// Arianan HQ
var hostileInst = L.divIcon({className: 'hostileInst',iconAnchor: [110,27]});
L.marker([	46.8795426, -123.0599767 ], {icon: hostileInst}).addTo(mymap);

// OBJ Blackjack
var blackjack = L.divIcon({className: 'blackjack',iconAnchor: [110,27]});
L.marker([	46.8579105, -123.1792019 ], {icon: blackjack}).addTo(mymap);

// OBJ Chestnut
var chestnut = L.divIcon({className: 'chestnut',iconAnchor: [110,27]});
L.marker([	46.8793401, -123.2235009 ], {icon: chestnut}).addTo(mymap);

// OBJ Dragoon
var thirdPLT = L.divIcon({className: 'thirdPLT',iconAnchor: [110,27]});
L.marker([ 46.8501359, -123.2154047 ], {icon: thirdPLT}).addTo(mymap);

// var dragoon = L.marker([	46.8721964, -123.1930277]).addTo(mymap);
var objective_dragoon = L.divIcon({className: 'objective_dragoon',iconAnchor: [60,30]});
L.marker([ 46.8721964, -123.1930277 ], {icon: objective_dragoon}).addTo(mymap).bindPopup('<img src="obj_dragoon_overhead.PNG" height="150px" width="150px"/>');

//Ambush Symbol
var ambush = L.divIcon({className: 'ambush',iconAnchor: [0,0]});
// you can set .my-div-icon styles in CSS
L.marker([ 46.87109, -123.19171 ], {icon: ambush}).addTo(mymap);

// var popup = L.popup();
//
// var photoImg = '<img src="obj_dragoon_overhead.PNG" height="150px" width="150px"/>';
//
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("<center>OBJ Dragoon</center>" + "</br>"+ photoImg)
//         .openOn(mymap);
// }
//
// mymap.on('click', onMapClick);


// var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'leaf-shadow.png',
//         iconSize:     [38, 95],
//         shadowSize:   [50, 64],
//         iconAnchor:   [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor:  [-3, -76]
//     }
// });
//
// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
//     redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
//     orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});
//
//
//     L.icon = function (options) {
//         return new L.Icon(options);
//     };
//
// L.marker([46.8721964, -123.1930277], {icon: greenIcon}).addTo(my).bindPopup("I am a green leaf.");
// L.marker([51.495, -0.083], {icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");
// L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(mymap).bindPopup("I am an orange leaf.");


// var circle = L.circle([	46.8721964, -123.1930277], {
// 	color: 'red',
// 	fillColor: '#f03',
// 	fillOpacity: 0.5,
// 	radius: 1200
// }).addTo(mymap);

// var polygon = L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(map);
//
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a Haunted polygon.");

// L.marker([46.8721964, -123.1930277], {icon: greenIcon}).addTo(mymap);
//
// var greenIcon = L.icon({
//     iconUrl: 'leaf-green.png',
//     shadowUrl: 'leaf-shadow.png',
//
//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
