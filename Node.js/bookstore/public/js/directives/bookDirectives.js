var bookDirectives = angular.module("bookDirectives", []);

bookDirectives.directive('bookSmallGrid', function() {
  return {
    restrict: 'E',
    scope: {
      book: "="
    },
    templateUrl: "partials/directives/bookSMGrid.html",
    controller: function($scope) {
      //console.log('fired.');
    }
  };
});
