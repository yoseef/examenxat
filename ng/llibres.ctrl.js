angular.module('app')
  .controller('LlibreCtrl', function($scope, LlibresFactory) {
    var llibre = {
      titol: "",
      isbn: "",
      autors: [],
      date: new Date()
    }

    $scope.llibres = [];

    var actualitzar = function() {
      $scope.llibres = LlibresFactory.query(function(entries) {
        $scope.llibres = entries;
      });
    }
    $scope.llibre = Object.create(llibre);

    $scope.SelectedLlibre;

    actualitzar();

    $scope.addLlibre = function() {
      if ($scope.llibre.titol != "" && $scope.llibre.isbn != "") {
        LlibresFactory.save($scope.llibre, function() {
          console.log("s'ha guardat");
          actualitzar();
          $scope.netejarCamps();
        }, function(error) {
          console.log("Error" + error);
        })
      }
    }
    $scope.updateLlibre = function() {
      if ($scope.SelectedLlibre.titol != "" && $scope.SelectedLlibre.isbn != "") {
        LlibresFactory.update($scope.SelectedLlibre, function() {
          console.log('updated')
          $scope.SelectedLlibre = Object.create(llibre);
          $scope.SelectedLlibre.autors = [];
          actualitzar();
        })
      }
    }
    $scope.removeLlibre = function() {
      if ($scope.SelectedLlibre.titol != "" && $scope.SelectedLlibre.isbn != "") {
        LlibresFactory.delete({
          id: $scope.SelectedLlibre.isbn
        }, function() {
          $scope.SelectedLlibre = Object.create(llibre);
          $scope.SelectedLlibre.autors = [];
          actualitzar();
        })
      }
    }

    $scope.netejarCamps = function() {
      $scope.llibre = Object.create(llibre);
      $scope.llibre.autors = [];
    }
    $scope.llibreSeleccionat = function(inx) {
      $scope.SelectedLlibre = $scope.llibres[inx];
    }
  });
