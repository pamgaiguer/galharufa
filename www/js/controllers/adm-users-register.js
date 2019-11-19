angular.module('galharufa.controllers.adm-users-register', [])

.controller('AdminUsersRegisterCtrl', function($scope, $rootScope, $q, $timeout, UserServices) {

  console.log("AdminUsersRegisterCtrl :: Iniciado");

  $scope.vm = {
    'user': {
      'usu_nome': '',
      'usu_login': '',
      'usu_senha': ''
    },
    'users': [],
    'isLoading':false
  }

  $scope.init = function () {
    $rootScope.headerId = 2;
    $rootScope.hold = false;

    UserServices.getUsers().then(function(r){ $scope.vm.users = r; });
  }


  $scope.addUser = function(){
    UserServices.addUser($scope.vm.user.usu_nome, $scope.vm.user.usu_login, $scope.vm.user.usu_senha).then(function(r){
      $scope.vm.user.usu_nome = '';
      $scope.vm.user.usu_login = '';
      $scope.vm.user.usu_senha = '';

      UserServices.getUsers().then(function(r){ $scope.vm.users = r; });
    });
  }

  $scope.deleteUser = function(usu_id){
    UserServices.deleteUser(usu_id).then(function(r){
      UserServices.getUsers().then(function(r){ $scope.vm.users = r; });
    });
  }

});
