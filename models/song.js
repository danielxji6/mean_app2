var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  name: String,
  trackNum: Number,
});

var Song = mongoose.model('Song', SongSchema);
module.exports = Song;
