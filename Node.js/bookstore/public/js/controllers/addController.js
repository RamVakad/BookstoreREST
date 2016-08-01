var addModule = angular.module("addModule", ['bookService', 'genreService']);
// create the controller and inject Angular's $scope

addModule.controller('addBkCtrl', function($scope, $location, BookService, GenreService) {
  $scope.BOOK = {};
  $scope.BOOK.imgUrl = "https://d9qz450atvita.cloudfront.net/assets/redesign/components/newsroom/graphics/media-no-image-c7bd5ac0f6c4b6668284d83eb792a59a6abfc4bec6bbac4ec496645ea54c6333.gif";
  GenreService.getAllGenres().then(function(data) {
    $scope.GENRES = data;
  });
  $scope.addBook = function() {
      BookService.addBook($scope.BOOK).then(function(response) {
        $location.path('/home');
      });
  };
});
