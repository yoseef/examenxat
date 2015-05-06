angular.module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        controller: 'llistallibre',
        templateUrl: 'llista.html',
        autoritzat: false
      })
      .when("/noullibre", {
        controller: "afegirllibre",
        templateUrl: 'afegir.html',
        autoritzat: true
      })
      .when("/editarllibre", {
        controller: "editarllibre",
        templateUrl: 'edicio.html',
        autoritzat: true
      })
      .when("/registrar", {
        controller: "RegistrarCtrl",
        templateUrl: "registrar.html",
        autoritzat: false
      })
      .when("/login", {
        controller: "LoginCtrl",
        templateUrl: "login.html",
        autoritzat: false
      })
      .when("/autors", {
        controller: "llistaAutors",
        templateUrl: "autor/llista.html",
        autoritzat: false
      })
      .when("/NouAutor", {
        controller: "afegirAutor",
        templateUrl: "autor/afegir.html",
        autoritzat: false
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider.html5Mode({
    //               enabled: true,
    //               requireBase: false
    //             });
  })
  .run(function($rootScope, UserSvc, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (next)
        if (!UserSvc.auth & next.autoritzat)
          $location.path("/login");
        // event.preventDefault();

    });
  });
