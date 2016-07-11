var express = require('express');

//Model
Genres = require('../models/genre.js')

var genresRouter = express.Router();

genresRouter.get('/', function(req, res) {
  Genres.getGenres(function (err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

genresRouter.post('', function(req, res) {
  var genre = req.body;
  Genres.addGenre(genre, function (err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

genresRouter.put('/:_id', function(req, res) {
  var id = req.params._id;
  var genre = req.body;
  Genres.updateGenre(id, genre, { }, function (err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

genresRouter.delete('/:_id', function(req, res) {
  var id = req.params._id;
  Genres.deleteGenreById(id, function (err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

module.exports = genresRouter;
