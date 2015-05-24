angular.module('app')
  .factory('LlibresFactory', function($resource) {
    return $resource("/api/llibres/:id", null, {
      'update': {
        method: 'PUT'
      }
    });
  })
  .factory('LlibresSrv', function($rootScope) {
    var socket = io().connect();
    socket.on('connect', function(s) {
      $rootScope.$broadcast('connected');
      $rootScope.$apply(); //This tells AngularJS that it needs to check the state of the application and update the templates
    });
    return {
      actualitzar: function(callback) {
        socket.on('updateFucker', function() {
          console.log('update');
          callback();
          $rootScope.$apply();
        });
      }
    }
  });
