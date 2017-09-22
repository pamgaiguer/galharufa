var app = angular.module('galharufa', [
  'ngRoute',
  'galharufa.controllers.home',
  'galharufa.controllers.login',
  'galharufa.controllers.adm-home',
  'galharufa.controllers.adm-casting-register',
  'galharufa.controllers.adm-casting-search',
  'galharufa.controllers.adm-usuario',
  'galharufa.services.UserServices']);

app.run(function($rootScope, $timeout, UserServices, $location) {

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    $dialogs.error("Something went wrong!", error);
    console.error("$stateChangeError: ", toState, error);
  });

  $rootScope.header_menu = false;
  $rootScope.header_login = true;
  $rootScope.header_admin = false;

  $rootScope.logout = function(){
    UserServices.deleteUserLocalStorage();
    $location.path('/login');
  }
})

app.constant('Configs', {
  appToken:'',
  apiUrl:'http://localhost:3000/'
});

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeCtrl'
  })
  .when('/login', {
    templateUrl: '/templates/login.html',
    controller: 'LoginCtrl'
  })
  .when('/adm-home', {
    templateUrl: '/templates/adm-home.html',
    controller: 'AdminHomeCtrl'
  })
  .when('/adm-casting-register', {
    templateUrl: '/templates/adm-casting-register.html',
    controller: 'AdminCastingRegCtrl'
  })
  .when('/adm-casting-search', {
    templateUrl: '/templates/adm-casting-search.html',
    controller: 'AdminCastingSearchCtrl'
  })
  .when('/adm-usuario', {
    templateUrl: '/templates/adm-usuario.html',
    controller: 'AdminUsuarioCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);