angular.module('galharufa.controllers.adm-ator', [])

.controller('AdminAtorCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminAtorCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o adm ator");
    $rootScope.header_login = false;
    $rootScope.header_menu = true;
    $rootScope.session_title= 'Admin - Ator';

    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
  }

});
