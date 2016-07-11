var editModule = angular.module("editModule", ['bookService']);
// create the controller and inject Angular's $scope

editModule.controller('editBkCtrl', function($scope, $location, $routeParams, BookService) {
  var bookid = $routeParams._id;
  BookService.getBookById(bookid).then(function(data) {
    $scope.BOOK = data;
  });
  $scope.updateBook = function() {
    BookService.updateBook($scope.BOOK).then(function(data) {
      $location.path('/home');
    });
  }
  $scope.goHome = function() {
    $location.path('/home');
  }
});
