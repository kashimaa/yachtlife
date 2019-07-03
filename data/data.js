var route1 =  {
    "id": "route1",
    "type": "line",
    "source":
    {
        "type": "geojson",
        "data": route1_geojson

      },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#1a237e",
        "line-width": 4

    }
};


var route2 =  {
    "id": "route2",
    "type": "line",
    "source":
    {
        "type": "geojson",
        "data": route2_geojson

    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#7f0000",
        "line-width": 4
    }
};


var route3 =  {
    "id": "route3",
    "type": "line",
    "source":
    {
        "type": "geojson",
        "data": route3_geojson

    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#1b5e20",
        "line-width": 4
    }
};






var route1pts =  {
    "id": "route1pts",
    "type": "circle",
    "source":
    {
        "type": "geojson",
        "data": route1pts_geojson,
        // "circle-color": "#000000"
    },
    "paint": {
"circle-radius": 7,
"circle-color": "#1a237e"
},

};


var route2pts =  {
    "id": "route2pts",
    "type": "circle",
    "source":
    {
        "type": "geojson",
        "data": route2pts_geojson
      },
      "paint": {
  "circle-radius": 7,
  "circle-color": "#7f0000"
  },

  };



var route3pts =  {
    "id": "route3pts",
    "type": "circle",
    "source":
    {
        "type": "geojson",
        "data": route3pts_geojson
      },
      "paint": {
  "circle-radius": 7,
  "circle-color": "#1b5e20"
  },

  };
