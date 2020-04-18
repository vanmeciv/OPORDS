var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g'
}).addTo(mymap);


// // replace "toner" here with "terrain" or "watercolor"
// var layer = new L.StamenTileLayer("terrain");
// var map = new L.Map("element_id", {
//     center: new L.LatLng(37.7, -122.4),
//     zoom: 12
// });
// map.addLayer(layer);
//
//
// var marker = L.marker([51.5, -0.09]).addTo(map);
//
// var circle = L.circle([51.508, -0.11], {
// 	color: 'red',
// 	fillColor: '#f03',
// 	fillOpacity: 0.5,
// 	radius: 750
// }).addTo(map);
//
// var polygon = L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(map);
//
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a Haunted polygon.");
