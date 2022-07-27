const getColor = () => {
  return arr[Math.floor(Math.random()*arr.length)];
}

export default {
  INITIAL_VIEWPORT: {
    latitude: 59.9415107,
    longitude: 30.2548343,
    zoom: 12,
    minZoom: 2,
    bearing: 0,
    pitch: 0
  },
	MAP_CONFIG: {
		width: "100%",
		height: "100%",
		mapStyle: "mapbox://styles/nicholasitnikov/cl63pj8nh001g14l78o5ky2cm",
		mapboxApiAccessToken: "pk.eyJ1IjoibmljaG9sYXNpdG5pa292IiwiYSI6ImNrZjJjZHMzNjBidDEyenB3MGR1OTN0ZjQifQ.TfEdGR9agR2qGmcWOAV8wA"
	},
	COVID_SOURCE: {
		"id": "covid_data",
		"type": "vector",
    "url": 'mapbox://nicholasitnikov.5zrjhsts'
	},
	COVID_LAYER: {
    "id": "covid_layer",
    "type": "circle",
    "source": "covid_data",
    "source-layer": "spb-b6oixy",
    "paint": {
        "circle-opacity": 0.6,
        "circle-radius": 5
    },
    "transition": {
        "duration": 300,
        "delay": 0
    }
	},
  COVID_LAYER_HEATMAP: {
    "id": "covid_heatmap_layer",
    "type": "heatmap",
    "source-layer": "spb-2xrq1r",
    "paint": {
        "heatmap-intensity": 0.05
    }
	}
}