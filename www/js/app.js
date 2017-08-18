var app = angular.module('doismaisdois', [
  'ngRoute',
  'doismaisdois.controllers.home',
  'doismaisdois.controllers.login',
  'doismaisdois.controllers.admin',
  'doismaisdois.services.UserServices']);

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
    .when('/admin', {
        templateUrl: '/templates/admin.html',
        controller: 'AdminCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);