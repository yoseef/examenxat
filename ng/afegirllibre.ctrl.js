angular.module('app')
  .controller('afegirllibre', function($scope, LlibresFactory, $location) {
    var llibre = {
      titol: "",
      isbn: "",
      autors: [],
      date: new Date()
    }
    $scope.llibre = Object.create(llibre);

    $scope.addLlibre = function() {
      if ($scope.llibre) {
        if ($scope.llibre.titol != "" && $scope.llibre.isbn != "") {
          LlibresFactory.save($scope.llibre, function() {
            console.log("s'ha guardat");
            //$scope.netejarCamps();
            $location.path( "/" );
          }, function(error) {
            console.log("Error" + error);
          })
        }
      }
    }

    $scope.netejarCamps = function() {
      $scope.llibre = null;
    }
  })
