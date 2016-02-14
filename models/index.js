var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_app2');

var Album = require('./album');
var Song = require('./song');

module.exports.Album = Album;
module.exports.Song = Song;
