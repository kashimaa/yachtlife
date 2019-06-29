var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});


function pointStuff (e) {
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
}



// for mouse over
map.on('mouseenter', 'route1pts', function(e) {
  pointStuff (e);
});


map.on('mouseleave', 'route1pts', function() {
  map.getCanvas().style.cursor = '';
  popup.remove();
});


// for mouse over
map.on('mouseenter', 'route2pts', function(e) {
  pointStuff (e);
});


map.on('mouseleave', 'route2pts', function() {
  map.getCanvas().style.cursor = '';
  popup.remove();
});



// for mouse over
map.on('mouseenter', 'route3pts', function(e) {
  pointStuff (e);
});


map.on('mouseleave', 'route3pts', function() {
  map.getCanvas().style.cursor = '';
  popup.remove();
});






// popup image on click

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.



// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'route1pts', function() {
  map.getCanvas().style.cursor = 'pointer';
});

// popup image on click

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'route1pts', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.place;
  var photo = "<img src=" + e.features[0].properties.photo + ` class="zoom" ` + ">";
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


// Change it back to a pointer when it leaves.
map.on('mouseleave', 'route1pts', function() {
  map.getCanvas().style.cursor = '';
});










// popup image on click

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'route2pts', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.place;
  var photo = "<img src=" + e.features[0].properties.photo + ` class="zoom" ` + ">";
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


// Change it back to a pointer when it leaves.
map.on('mouseleave', 'route2pts', function() {
  map.getCanvas().style.cursor = '';
});














// popup image on click

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'route3pts', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.place;
  var photo = "<img src=" + e.features[0].properties.photo + ` class="zoom" ` + ">";
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


// Change it back to a pointer when it leaves.
map.on('mouseleave', 'route3pts', function() {
  map.getCanvas().style.cursor = '';
});
