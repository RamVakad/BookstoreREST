var bookstoreApp = angular.module('bookstore', ['ngRoute',
 'angular.filter', 'homeModule', 'detailModule', 'addModule',
  'editModule', 'genreModule']);

// configure our routes
bookstoreApp.config(function($routeProvider, $httpProvider) {
  $routeProvider
    // route for the home page
    .when('/', {
      templateUrl : 'partials/home.html',
      controller  : 'homeCtrl'
    })
    .when('/home', {
      templateUrl : 'partials/home.html',
      controller  : 'homeCtrl'
    })
    .when('/books/add', {
      templateUrl : 'partials/book/add_book.html',
      controller  : 'addBkCtrl'
    })
    .when('/books/:_id', {
      templateUrl : 'partials/book/book_details.html',
      controller  : 'bkDetailCtrl'
    })
    .when('/books/edit/:_id', {
      templateUrl : 'partials/book/edit_book.html',
      controller  : 'editBkCtrl'
    })
    .when('/genres/manage', {
      templateUrl : 'partials/genre/manage.html',
      controller  : 'manageCtrl'
    });
});
