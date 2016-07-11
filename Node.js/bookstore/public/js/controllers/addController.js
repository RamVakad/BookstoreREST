var addModule = angular.module("addModule", ['bookService', 'genreService']);
// create the controller and inject Angular's $scope

addModule.controller('addBkCtrl', function($scope, $location, BookService, GenreService) {
  $scope.BOOK = {};
  GenreService.getAllGenres().then(function(data) {
    $scope.GENRES = data;
  });
  $scope.addBook = function() {
      BookService.addBook($scope.BOOK).then(function(response) {
        $location.path('/home');
      });
  };
});
