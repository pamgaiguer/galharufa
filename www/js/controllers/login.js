angular.module('doismaisdois.controllers.login', [])

.controller('LoginCtrl', function($scope, $rootScope, $q, $location, UserServices) {

  console.log("LoginCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o login");
    $rootScope.header_menu = true;
    $rootScope.header_login = true;

    if (UserServices.currentUser.usu_id != undefined) $location.path('/admin');
  }

  $scope.login = function(form) {
    console.log('Form Valid!');
    $scope.vm.isLoading = true;

    UserServices.deleteUserLocalStorage();

    UserServices.login($scope.vm.login,$scope.vm.pwd)
    .then(function(success){

      if (success == 0) {
        $scope.vm.isLoading = false;
        $scope.vm.ready = true;
        return;
      }
      UserServices.saveUserLocalStorage();
      $location.path('/admin');
    });
  }
  $scope.esqueceuSenha = function(){}

});
