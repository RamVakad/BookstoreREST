var genreService = angular.module("genreService", []);

genreService.factory("GenreService", function($http) {
  var services = {};

  services.getAllGenres = function() {
    return $http.get('http://localhost:8081/api/genres').then(function(response) {
        return response.data;
    });
  };

  services.deleteGenreById = function(id) {
    return $http.delete('http://localhost:8081/api/genres/'+id).then(function(response) {
        return response.data;
    });
  }

  services.addGenre = function(genre) {
    return $http.post('http://localhost:8081/api/genres', genre).then(function(response) {
        return response.data;
    })
  }

  services.updateGenre = function(genre) {
    return $http.put('http://localhost:8081/api/genres/' + genre._id, genre).then(function(response) {
        return response.data;
    })
  }

  return services;
});
