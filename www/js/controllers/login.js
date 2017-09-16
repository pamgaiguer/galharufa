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

<<<<<<< HEAD
    if (UserServices.currentUser.usu_id != undefined) $location.path('/adm-home');
=======
    if (UserServices.currentUser.usu_id != undefined) $location.path('/admin');
  }
>>>>>>> 3420c8f2c081879c1057b6211a5a2763a454c089

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
<<<<<<< HEAD


      $location.path('/adm-home');
=======
      $location.path('/admin');
>>>>>>> 3420c8f2c081879c1057b6211a5a2763a454c089
    });
  }
  $scope.esqueceuSenha = function(){}

});
