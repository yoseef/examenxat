angular.module('app')
  .controller('llistallibre', function($scope, LlibresFactory , $rootScope , $location) {
    $scope.llibres = [];
    $scope.loading = true;
    $scope.llibres = LlibresFactory.query(function(entries) {
      $scope.llibres = entries;
      $scope.loading = false;
    });

    $scope.removeLlibre = function(index) {
      if (index) {
        LlibresFactory.delete({
          id: $scope.llibres[index].isbn
        }, function() {
          $scope.llibres.splice(index,1);
        })
      }
    }
    $scope.editarLlibre = function (index){
      $rootScope.llibreToEdit = $scope.llibres[index];
      $location.path( "/editarllibre" );
    }
  })
