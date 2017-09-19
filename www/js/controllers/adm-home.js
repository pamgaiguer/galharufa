angular.module('galharufa.controllers.adm-home', [])

.controller('AdminHomeCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminHomeCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o admin");
    $rootScope.header_login = false;
    $rootScope.header_menu = true;
    $rootScope.session_title= 'Admin';

    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
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
