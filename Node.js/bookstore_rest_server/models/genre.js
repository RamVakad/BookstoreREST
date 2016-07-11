var mongoose = require("mongoose");

var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },

  create_date: {
    type: Date,
    default: Date.now
  }
});

var Genres = module.exports = mongoose.model('Genre', genreSchema);

//getGenres
module.exports.getGenres = function(callback, limit) {
  Genres.find(callback).limit(limit);
}

//addGenre
module.exports.addGenre = function(genre, callback) {
  Genres.create(genre, callback);
  console.log("Added genre!")
}

//updateGenre
module.exports.updateGenre = function(id, genre, options, callback) {
  var find = {_id: id};
  var update = {
    name: genre.name
  };
  Genres.findOneAndUpdate(find, update, options, callback);
  console.log("Updated genre with ID: " + id)
}

//deleteGenreById
module.exports.deleteGenreById = function(id, callback) {
  var find = {_id: id};
  Genres.remove(find, callback);
  console.log("Deleted genre with ID: " + id)
}
