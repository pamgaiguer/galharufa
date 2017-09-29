angular.module('galharufa.controllers.home', [])

.controller('HomeCtrl', function($scope, $rootScope, $q, $timeout, $location) {

  console.log("HomeCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o login");    
    $rootScope.hold = $location.path() != "/teste";
  }

  $scope.login = function(form) {
    console.log('Form Valid!');
    $scope.formData.isLoading = true;
    UserServices.login($scope.vm.login,$scope.vm.pwd)
    .then(function(success){

      if (success == 0) {
        $scope.vm.isLoading = false;
        $scope.vm.ready = true;
        return;
      }

      UserServices.deleteUserLocalStorage();
      UserServices.saveUserLocalStorage();
    });

  }


  $scope.esqueceuSenha = function(){}

});
