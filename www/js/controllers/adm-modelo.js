angular.module('galharufa.controllers.adm-modelo', [])

.controller('AdminModeloCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminModeloCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o admin");
    $rootScope.header_login = false;
    $rootScope.header_menu = true;
    $rootScope.session_title= 'Admin - Modelo';

    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
  }

});
