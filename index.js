var express =  require('express');
var cors = require('cors');
var uuid = require('uuid');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('A test API of artwork')
});

app.get('/art', function(req, res) {
  // hard coding api data
  res.json([
    {
      "id": uuid(),
      "year": 1486,
      "title": "The Birth of Venus by Sandro Botticelli",
      "lat": 43.7677856,
      "lon": 11.2553108,
      "location": "Uffizi Gallery"
    },
    {
      "id": uuid(),
      "year": 1498,
      "title": "The Last Supper by Leonardo da Vinci",
      "lat": 45.465963,
      "lon": 9.1709621,
      "location": "Santa Maria delle Grazie"
    },
    {
      "id": uuid(),
      "year": 1506,
      "title": "Mona Lisa by Leonardo da Vinci",
      "lat": 48.8606111,
      "lon": 2.3354553,
      "location": "Louvre Museum"
    },
    {
      "id": uuid(),
      "year": 1642,
      "title": "The Night Watch by Rembrandt",
      "lat": 52.3699874,
      "lon": 4.889974,
      "location": "Amsterdam Museum"
    },
    {
      "id": uuid(),
      "year": 1665,
      "title": "Girl with a Pearl Earring by Johannes Vermeer",
      "lat": 52.0804205,
      "lon": 4.3143013,
      "location": "Mauritshuis"
    },
    {
      "id": uuid(),
      "year": 1886,
      "title": "A Sunday Afternoon on the Island of La Grande Jatte by Georges Seurat",
      "lat": 41.8795845,
      "lon": -87.625902,
      "location": "The Art Institute of Chicago"
    },
    {
      "id": uuid(),
      "year": 1889,
      "title": "The Starry Night by Vincent van Gogh",
      "lat": 40.7614327,
      "lon": -73.9798103,
      "location": "The Museum of Modern Art"
    },
    {
      "id": uuid(),
      "year": 1893,
      "title": "The Scream by Edvard Munch",
      "lat": 59.9169514,
      "lon": 10.7723093,
      "location": "Munchmuseet"
    },
    {
      "id": uuid(),
      "year": 1908,
      "title": "The Kiss by Gustav Klimt",
      "lat": 48.1915308,
      "lon": 16.380914,
      "location": "Austrian Gallery Belvederes"
    },
    {
      "id": uuid(),
      "year": 1937,
      "title": "The Persistence of Memory by Salvador Dali",
      "lat": 40.7614327,
      "lon": -73.9798103,
      "location": "The Museum of Modern Art"
    },
    {
      "id": uuid(),
      "year": 1937,
      "title": "Guernica by Pablo Picasso",
      "lat": 40.4079123,
      "lon": -3.6945569,
      "location": "Museo Nacional Centro de Arte Reina Sofía"
    }
  ])
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
