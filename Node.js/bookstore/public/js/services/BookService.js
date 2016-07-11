var bookService = angular.module("bookService", []);

bookService.factory("BookService", function($http) {
  var services = {};

  services.getAllBooks = function() {
    return $http.get('http://localhost:8081/api/books').then(function(response) {
        return response.data;
    });
  };

  services.getBookById = function(id) {
    return $http.get('http://localhost:8081/api/books/'+id).then(function(response) {
        return response.data;
    });
  }

  services.deleteBookById = function(id) {
    return $http.delete('http://localhost:8081/api/books/'+id).then(function(response) {
        return response.data;
    });
  }

  services.addBook = function(book) {
    return $http.post('http://localhost:8081/api/books/', book).then(function(response) {
        return response.data;
    })
  }

  services.updateBook = function(book) {
    return $http.put('http://localhost:8081/api/books/' + book._id, book).then(function(response) {
        return response.data;
    })
  }

  return services;
});
