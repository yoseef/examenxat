angular.module('app')
  .factory('AutorsFactory', function($resource) {
    return $resource("/api/autors/:id", null, {
      'update': {
        method: 'PUT'
      }
    });
  });
