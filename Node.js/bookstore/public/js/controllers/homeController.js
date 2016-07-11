var homeModule = angular.module("homeModule", ['bookService', 'bookDirectives']);
// create the controller and inject Angular's $scope

homeModule.controller('homeCtrl', function($scope, BookService) {
    BookService.getAllBooks().then(function(data) {
      $scope.BOOKS = data;
    });
});
