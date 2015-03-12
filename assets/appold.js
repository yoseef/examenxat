var app = angular.module('app', ['ngResource']);

app.controller('LlibreCtrl', function ($scope, LlibresFactory) {
    var llibre = {
        titol: "",
        isbn: "",
        autors: []
    }
    $scope.llibre = Object.create(llibre);
    $scope.SelectedLlibre;

    actualitzar();

    $scope.addLlibre = function () {
        LlibresFactory.save($scope.llibre, function () {
            console.log("s'ha guardat");
            actualitzar();
        })
    }
    $scope.updateLlibre = function () {

        $scope.SelectedLlibre = null;
         actualitzar();
    }
    $scope.removeLlibre = function () {
        LlibresFactory.delete($scope.SelectedLlibre);
        $scope.SelectedLlibre = null;
         actualitzar();
    }

    var actualitzar = function () {
        $scope.llibres = LlibresFactory.query(function () {
            console.log(entries);
        });
    }

    $scope.netejarCamps = function () {
        $scope.llibre = Object.create(llibre);
    }
    $scope.llibreSeleccionat = function (inx) {
        $scope.SelectedLlibre = $scope.llibres[inx];
    }
});

app.factory('LlibresFactory', function ($resource) {
    return $resource("/api/llibres/:id", null, {
        'update': {
            method: 'PUT'
        }
    });
});
