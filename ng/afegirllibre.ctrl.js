angular.module('app')
  .controller('afegirllibre', function($scope, LlibresFactory, $location, AutorsFactory) {
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

          // for(var i = 0; i < $scope.selected.length; i++) {
          //   console.log($scope.selected[i]._id);
          //   $scope.llibre.autors.push($scope.selected[i]._id);
          // };
          $scope.llibre.autors = $scope.selected;
          console.log($scope.llibre);
          LlibresFactory.save($scope.llibre, function() {
            console.log("s'ha guardat");
            // console.log($scope.llibre);
            //$scope.netejarCamps();
            $location.path("/");
          }, function(error) {
            console.log("Error" + error);
          });
        }
      }
    }

    $scope.netejarCamps = function() {
      $scope.llibre = null;
    }

    AutorsFactory.query(function(entries) {
      $scope.Autors = entries;
    });
  })
