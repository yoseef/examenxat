angular.module('app')
  .controller('afegirAutor', function($scope, AutorsFactory, $location) {
    var d = new Date();
    var autor = {
      nom: "",
      cognom: "",
      cognom2: [],
      any: d.getFullYear()
    }
    $scope.autor = Object.create(autor);

    $scope.addAutor = function() {
      if ($scope.autor) {
        if ($scope.autor.nom != "" && $scope.autor.cognom != "") {
          AutorsFactory.save($scope.autor, function() {
            console.log("s'ha guardat");
            //$scope.netejarCamps();
            $location.path( "/autors" );
          }, function(error) {
            console.log("Error" + error);
          })
        }
      }
    }

    $scope.netejarCamps = function() {
      $scope.autor = null;
    }
  })
