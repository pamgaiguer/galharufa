var app = angular.module('galharufa', [
  'ngRoute',
  'galharufa.controllers.home'
  ]);

app.run(function($rootScope, $timeout) {

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
    .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
