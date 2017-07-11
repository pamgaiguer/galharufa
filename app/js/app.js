var app = angular.module('galharufa', [
  'ngRoute',
  'galharufa.controllers.login',
  'galharufa.services.UserServices']);

app.run(function($rootScope, $timeout, UserServices) {

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $dialogs.error("Something went wrong!", error);
      console.error("$stateChangeError: ", toState, error);
    });

    $rootScope.header_menu = false;
})

app.constant('Configs', {
    appToken:'au1br2',
    apiUrl:'http://localhost/api/'
});


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
        templateUrl: '/app/templates/login.html',
        controller: 'LoginCtrl'
    })
    .otherwise({
        redirectTo: 'login'
    });
}]);
