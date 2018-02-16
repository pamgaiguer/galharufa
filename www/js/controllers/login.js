angular.module('galharufa.controllers.login', [])
.controller('LoginCtrl', function($scope, $rootScope, $q, $location, UserServices) {

  console.log("LoginCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o login");
    $rootScope.headerId = 0;

    $('body').css('background-color', '#212121');


    if (UserServices.currentUser.usu_id != undefined) { 
      $('body').css('background-color', '#fff');
      $location.path('/adm-home');
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
        $('body').css('background-color', '#fff');
        $location.path('/adm-home');
      });
    }
    $scope.esqueceuSenha = function(){}
  }
});