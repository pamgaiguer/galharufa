angular.module('galharufa.controllers.adm-casting-register', [])

.controller('AdminCastingRegCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminCastingRegCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o adm Casting");
    $rootScope.headerId = 2;
    $rootScope.session_title= 'Admin - Casting - Cadastro';
    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
  }
});
