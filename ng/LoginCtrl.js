angular.module('app')
  .controller('LoginCtrl', function($scope , UserSvc , $location) {
    // console.log('Login!!!');
    var user = {
      username: "",
      password: ""
    }
    $scope.user = Object.create(user);
    $scope.login = function() {
      //fa falta comprovar-ho ???
      if ($scope.user) {
        if ($scope.user.username != "" && $scope.user.password != "") {
          console.log($scope.user);
          UserSvc.login($scope.user.username, $scope.user.password,
            function(error, status) {
              /*
                  Funció que s'executarà si hi ha un error en el login
              */
              if (status == 401) {
                $scope.error = error.missatge;
              }
            }).success(function() {
            UserSvc.getUser().then(function(user) {
              /*
                  Si tot va bé, anem a la pàgina principal
                  i emeten un missatge de "login" per avisar
                  a la nostra app que l'usuari ha fet login
                  correctament.
              */
              $scope.$emit('login', user.data);
              $location.path('/');
            });
          });
        }
      }
    }

  })
