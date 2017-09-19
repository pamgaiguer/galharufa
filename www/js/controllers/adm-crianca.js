angular.module('galharufa.controllers.adm-crianca', [])

.controller('AdminCriancaCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminCriancaCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o admin");
    $rootScope.header_login = false;
    $rootScope.header_menu = true;
    $rootScope.session_title= 'Admin - Crianças';
    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
  }
});