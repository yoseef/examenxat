angular.module('app')
  .controller('llistallibre', function($scope, LlibresFactory, $rootScope, $location, LlibresSrv) {
    $scope.llibres = [];
    $scope.loading = true;

    function carregarElsLlibres(){
      LlibresFactory.query(function(entries) {
        $scope.llibres = entries;
        $scope.loading = false;
      });
    }
    carregarElsLlibres();
    LlibresSrv.actualitzar(carregarElsLlibres);

    $scope.removeLlibre = function(index) {
      console.log($scope.currentUser);
      if ($scope.currentUser) {
        if (index) {
          LlibresFactory.delete({
            id: $scope.llibres[index].isbn
          }, function() {
            $scope.llibres.splice(index, 1);
          })
        }

      }else{
        $location.path("/login");

      }

    }
    $scope.editarLlibre = function(index) {
      $rootScope.llibreToEdit = $scope.llibres[index];
      $location.path("/editarllibre");
    }
  })
