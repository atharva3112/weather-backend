var express = require('express')
var app=express()

app.listen('3000')
console.log('Express server is running on port 3000')

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response) {
    response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":39.47,"feels_like":39.47,"temp_min":36.81,"temp_max":47.17,"pressure":1020,"humidity":72},"visibility":10000,"wind":{"speed":2.95,"deg":357,"gust":2.93},"clouds":{"all":99},"dt":1642381311,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642347934,"sunset":1642381185},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}