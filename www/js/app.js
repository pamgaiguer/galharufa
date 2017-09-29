var app = angular.module('galharufa', [
  'ngRoute',
  'ngFileUpload',
  'galharufa.controllers.home',
  'galharufa.controllers.login',
  'galharufa.controllers.adm-home',
  'galharufa.controllers.adm-casting-register',
  'galharufa.controllers.adm-casting-search',
  'galharufa.controllers.adm-users',
  'galharufa.services.UserServices',
  'galharufa.services.CastingServices']);

app.run(function($rootScope, $timeout, UserServices, $location, $route) {

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    $dialogs.error("Something went wrong!", error);
    console.error("$stateChangeError: ", toState, error);
  });

  $rootScope.headerId = 1;  
  $rootScope.hold = false;
  UserServices.loadUserLocalStorage();


  $rootScope.path = function(p){
    console.log("path: " + p);
    $location.path(p);
    $route.reload();
  }

  $rootScope.logout = function(){
    UserServices.deleteUserLocalStorage();
    $location.path('/login');
  }
})

app.constant('Configs', {
  appToken:'',
  //apiUrl:'http://localhost:3000/'
  //apiUrl:'http://agenciagalharufa.com.br/'
  apiUrl:'https://agenciagalharufa.com.br/'
});

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeCtrl'
  })
  .when('/teste', {
    templateUrl: '/templates/home.html',
    controller: 'HomeCtrl'
  })
  .when('/login/', {
    templateUrl: '/templates/login.html',
    controller: 'LoginCtrl'
  })
  .when('/adm-home/', {
    templateUrl: '/templates/adm-home.html',
    controller: 'AdminHomeCtrl'
  })
  .when('/adm-casting-register/', {
    templateUrl: '/templates/adm-casting-register.html',
    controller: 'AdminCastingRegCtrl'
  })
  .when('/adm-casting-search/', {
    templateUrl: '/templates/adm-casting-search.html',
    controller: 'AdminCastingSearchCtrl'
  })
  .when('/adm-users/', {
    templateUrl: '/templates/adm-users.html',
    controller: 'AdminUsersCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);