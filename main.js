mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zc2Jlcm5ldCIsImEiOiJRLTh3WEVNIn0.7S-AEC6jsZUhih6bsJ39nA';

// Basemap
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-80.094068, 26.128869],
zoom: 5
});

// Switching basemap
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}

// Data
function addDataLayers() {
  map.addLayer(route1);
  map.addLayer(route2);
  map.addLayer(route1pts);
}

map.on('load', function () {
    addDataLayers();
});

map.on('style.load', function () {
  // NOT SURE WHATS HAPPENING HERE!
  // Triggered when `setStyle` is called.
  // if (!route1) {
  // map.addLayer(route1);
  addDataLayers();
// }
});


// Pop up

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});


// for mouse over
map.on('mouseenter', 'route1pts', function(e) {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';

var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});

map.on('mouseleave', 'route1pts', function() {
map.getCanvas().style.cursor = '';
popup.remove();
});


// popup image on click

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'route1pts', function (e) {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.place;
var photo = "<img src=" + e.features[0].properties.photo + ` class="zoom" `+">";
console.log(e.features[0].properties.place)

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(photo)
.addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'route1pts', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'route1pts', function () {
map.getCanvas().style.cursor = '';
});



// Fly to a locations
document.getElementById('bahamas').addEventListener('click', function () {
map.flyTo({
center: [-77.81, 26.1],
zoom: 6
}); 
});

document.getElementById('maine').addEventListener('click', function () {
map.flyTo({
center: [-68.2, 44.2],
zoom: 7
});
});
