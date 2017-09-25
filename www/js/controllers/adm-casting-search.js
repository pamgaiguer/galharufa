angular.module('galharufa.controllers.adm-casting-search', [])

.controller('AdminCastingSearchCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices) {

  console.log("AdminCastingSearchCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o adm Casting");
    $rootScope.headerId = 2;
    $rootScope.session_title= 'Admin - Pesquisa Casting';
    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
  }
});
