var utilsModule = angular.module("utilsModule", []);

utilsModule.factory("Utils", function($q) {
  var SERVICES = {};
  SERVICES.isImage = function(src) {
        var deferred = $q.defer();
        var image = new Image();
        image.onerror = function() {
            deferred.resolve(false);
        };
        image.onload = function() {
            deferred.resolve(true);
        };
        image.src = src;
        return deferred.promise;
    }
  return SERVICES;
})
