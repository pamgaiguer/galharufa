angular.module('galharufa.controllers.adm-home', [])

.controller('AdminHomeCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  // console.log("AdminHomeCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    $rootScope.hold = false;
    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
  }

  $scope.login = function(form) {
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
