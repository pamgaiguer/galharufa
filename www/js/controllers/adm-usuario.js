angular.module('galharufa.controllers.adm-usuario', [])

.controller('AdminUsuarioCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminUsuarioCtrl :: Iniciado");

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
});
