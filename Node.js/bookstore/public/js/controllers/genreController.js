var genreModule = angular.module("genreModule", ['genreService']);
// create the controller and inject Angular's $scope

genreModule.controller('manageCtrl', function($scope, GenreService) {

  $scope.reloadGenres = function() {
      GenreService.getAllGenres().then(function(response) {
        $scope.GENRES = response;
      })
  }
  $scope.reloadGenres();

  $scope.delete = function(genre) {
    GenreService.deleteGenreById(genre._id).then(function(response) {
      $scope.reloadGenres();
    });
  }

  $scope.add = function() {
    var toAdd = {
      name: $scope.addTitle
    }

    GenreService.addGenre(toAdd).then(function(response) {
      $scope.addTitle = "";
      $scope.reloadGenres();
    });
  }

});
