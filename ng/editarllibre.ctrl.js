angular.module('app')
  .controller('editarllibre', function($scope, LlibresFactory, $rootScope , $location) {

    if ($rootScope.llibreToEdit) {
      $scope.llibre = $rootScope.llibreToEdit;
    }
    $scope.updateLlibre = function() {
      if($scope.llibre){

        if ($scope.llibre.titol != "" && $scope.llibre.isbn != "") {
          $scope.llibre.autors = $scope.selected;
          console.log($scope.llibre);
          LlibresFactory.update($scope.llibre, function() {
            console.log('updated')
            //$scope.netejarCamps();
            $location.path( "/" );
          })
        }
      }
    }
    $scope.netejarCamps = function() {
      if($scope.llibre){
        $scope.llibre = null;
        $rootScope.llibreToEdit = null;
      }
    }
  })
