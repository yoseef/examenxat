angular.module('app')
  .controller('RegistrarCtrl', function($scope , UserSvc , $location) {
    var dadesRegistre = {
      username : "",
      password : "",
      password2: ""
    };


    $scope.dadesRegistre = Object.create(dadesRegistre);
    $scope.sonIguals = function () {
      // console.log($scope.Register.$valid);
      if ($scope.dadesRegistre.password === $scope.dadesRegistre.password2) {
          return true;
      }else{
        $scope.Register.$valid = false;
        console.log($scope.Register.$valid);
        return false;
      }
    }

    $scope.registrar = function () {
      if (!$scope.dadesRegistre.password || !$scope.dadesRegistre.password2 || !$scope.dadesRegistre.username) {
        $scope.error = "Has d'emplenar tots els camps";
      } else if ($scope.dadesRegistre.password === $scope.dadesRegistre.password2) {
        console.log($scope.dadesRegistre);

        UserSvc.registre($scope.dadesRegistre.username, $scope.dadesRegistre.password)
          .success(function(user) {
            $location.path('/login');
          })
          .error(function(error, status) {
            if (status == 409)
              $scope.error = error.missatge;
              $scope.dadesRegistre.username = "";
          });
      } else {
        $scope.error = "Les contrasenyes no són iguals";
      }
    }

  })
