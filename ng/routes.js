// angular.module('app')
//     .config(function($routeProvider, $locationProvider) {
//         $routeProvider
//             .when("/", {
//                 controller: 'LlibreCtrl',
//                 templateUrl: 'templates/llista.html',
//               //  autoritzat: false
//             })
//             .when("/noullibre", {
//                 controller: "LlibreCtrl",
//                 templateUrl: 'templates/afegir.html',
//               //  autoritzat: true
//             })
//             .when("/editarllibre", {
//                 controller: "LlibreCtrl",
//                 templateUrl: 'templates/edicio.html',
//               //  autoritzat: true
//             })
//             .when("/registrar", {
//                 controller: "RegistrarCtrl",
//                 templateUrl: "templates/registrar.html",
//               //  autoritzat: false
//             })
//             .when("/login", {
//                 controller: "LoginCtrl",
//                 templateUrl: "templates/login.html",
//               //  autoritzat: false
//             })
//             .otherwise({
//                 redirectTo: '/'
//             });
//
//             $locationProvider.html5Mode({
//                           enabled: true,
//                           requireBase: false
//                         });
//     // })
//     // .run(function($rootScope,UserSvc) {
//     //     $rootScope.$on('$routeChangeStart', function(event, next) {
//     //        if (next)
//     //             if (!UserSvc.auth & next.autoritzat)
//     //                 event.preventDefault();
//     //     });
//     });
