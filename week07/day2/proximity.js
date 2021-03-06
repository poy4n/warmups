console.log('proximity')

var startPoint = {
    name: "General Assembly", 
    location: {lat: -37.818555, long: 144.959076}
}

var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]

var collectData = function (startPoint, results) {

    distances = []

    results.forEach(function(result) {
        distance = Math.sqrt(Math.pow((startPoint.location.lat - result.location.lat), 2) +
        Math.pow((startPoint.location.long - result.location.long), 2));

        distances.push({name: result.name, distance: distance});
    });
    distances.sort(function(a, b) {
        return a.distance - b.distance
    });
   return distances
}

console.log(collectData(startPoint, results))