var request = require("request"),
    fs = require('fs');

var args = process.argv.slice(2);

var sourceFile = args[0];
var source = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

var sourceTransform = require(source.source_transform);

var sourceGeoJson = undefined;
var osmGeoJson = undefined;
request({
    url: source.source,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
});

request({
    url: source.overpass,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
});