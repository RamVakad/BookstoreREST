var detailModule = angular.module("detailModule", ['bookService']);
// create the controller and inject Angular's $scope

detailModule.controller('bkDetailCtrl', function($scope, $location, $routeParams, BookService) {
    var bookid = $routeParams._id;
    BookService.getBookById(bookid).then(function(data) {
      $scope.BOOK = data;
    });

    $scope.deleteBook = function() {
      BookService.deleteBookById(bookid).then(function(data) {
        $location.path('/home');
      });
    }

    $scope.updateBook = function() {
        $location.path('/books/edit/' + bookid);
    }
});
