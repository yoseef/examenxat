angular.module('app')
  .controller('llistaAutors', function($scope, AutorsFactory, $rootScope, $location) {
    $scope.Autors = [];
    $scope.loading = true;
    $scope.Autors = AutorsFactory.query(function(entries) {
      $scope.Autors = entries;
      $scope.loading = false;
    });

    // $scope.removeLlibre = function(index) {
    //   console.log($scope.currentUser);
    //   if ($scope.currentUser) {
    //     if (index) {
    //       LlibresFactory.delete({
    //         id: $scope.llibres[index].isbn
    //       }, function() {
    //         $scope.llibres.splice(index, 1);
    //       })
    //     }
    //
    //   }else{
    //     $location.path("/login");
    //
    //   }
    //
    // }
    // $scope.editarLlibre = function(index) {
    //   $rootScope.llibreToEdit = $scope.llibres[index];
    //   $location.path("/editarllibre");
    // }
  })
