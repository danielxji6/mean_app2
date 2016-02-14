// SERVER

// Require packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_app2');


/*********
ROUTES
**********/

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to dan's API index",
    github: "",
    endpoints: [
      {method: "GET", path: "", desc: ""}
    ]
  });
});

app.get('/api/albums', function api_get_albums() {
  db.Album.find({}, function(err, albums) {
    if(err) { return console.log("ERROR: ", err);}
    res.json(albums);
  });
});

app.post('/api/albums');

app.get('/api/albums/:id');

app.delete("/api/albums/:id");

app.get('/api/albums/:album_id/songs');

app.post('/api/albums/:album_id/songs');

app.get('/api/albums/:album_id/songs/:id');

app.delete("/api/albums/:album_id/songs/:id");





// Listen
app.listen(3000, function() {
  console.log('server started');
});
