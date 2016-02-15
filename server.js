// SERVER

// Require packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./models');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');


/*********
API ROUTES
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

app.get('/api/albums', function api_get_albums(req, res) {
  db.Album.find({}, function(err, albums) {
    if(err) { return console.log("ERROR: ", err);}
    console.log("to albums");
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

/*********
END POINT
**********/

app.get('/*', function render_index(req, res) {
  res.render('index');
});

// Listen
app.listen(3000, function() {
  console.log('server started', 'http://localhost:3000/');
});
