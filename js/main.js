mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zc2Jlcm5ldCIsImEiOiJRLTh3WEVNIn0.7S-AEC6jsZUhih6bsJ39nA';

// Basemap
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-80, 35],
  zoom: 4.1
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
  map.addLayer(route3);
  map.addLayer(route1pts);
  map.addLayer(route2pts);
  map.addLayer(route3pts);
}


// we could have a function that adds layer if needed, and that could live
// inside the addDataLayer function



map.on('load', function() {
  addDataLayers();
});

map.on('style.load', function() {
  // NOT SURE WHATS HAPPENING HERE!
  // terence's advice...check not if !route1 exists, but rather,
  // check to see if that layer is on the map
  // alternatively we could try always removing, and always adding back.
  // Triggered when `setStyle` is called.
  // if (!route1) {
  // map.addLayer(route1);
  addDataLayers();
  // }
});


// Pop up

// Create a popup, but don't add it to the map yet.




// Fly to a locations
document.getElementById('bahamas').addEventListener('click', function() {
  map.flyTo({
    center: [-80, 26.1],
    zoom: 6
  });
});

document.getElementById('maine').addEventListener('click', function() {
  map.flyTo({
    center: [-70, 43.3],
    zoom: 7.3
  });
});


document.getElementById('newyork').addEventListener('click', function() {
  map.flyTo({
    center: [-79.45, 36.5],
    zoom: 5.41
  });
});
