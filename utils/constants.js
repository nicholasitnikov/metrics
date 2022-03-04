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
		mapStyle: "mapbox://styles/asitnikov/ckwt1c9b01b3914pb0i3479bl",
		mapboxApiAccessToken: "pk.eyJ1IjoiYXNpdG5pa292IiwiYSI6ImNrbmUyaWdidTJneHcycXA5c2Q3a201aGsifQ.k6nUY_ib-JKfuhiKnzeAIg"
	},
	COVID_SOURCE: {
		"id": "covid_data",
		"type": "vector",
    "url": 'mapbox://asitnikov.5a4ffo4c'
	},
	COVID_LAYER: {
    "id": "covid_layer",
    "type": "circle",
    "source-layer": "spb-7m2bfp",
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