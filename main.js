var attribution = new ol.control.Attribution({
    collapsible: false
});

var map = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([-95.7129,37.0902]),
        maxZoom: 18,
        zoom: 4
    })
});

//locationsInfo = locationsSource.getFeatures
const addReport = () => {
	const report = new ol.layer.Vector({
		title: 'report',
		source: new ol.source.Vector({
      url: 'https://raw.githubusercontent.com/EFisher828/National-Foliage-map/main/10-11-21%20Report.kml',
      format: new ol.format.KML()
    }),
      //style: SFLStyle,
	  	zIndex: 1,
	  	name: 'report'
  })
  map.addLayer(report)
}
addReport()

const addStates = () => {
	const states = new ol.layer.Vector({
		title: 'states',
		source: new ol.source.Vector({
      url: 'https://raw.githubusercontent.com/EFisher828/National-Foliage-map/main/CONUS%20States.kml',
      format: new ol.format.KML()
    }),
      //style: SFLStyle,
	  	zIndex: 2,
	  	name: 'states'
  })
  map.addLayer(states)
}
addStates()
