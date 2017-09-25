angular.module('galharufa.controllers.adm-casting-search', [])

.controller('AdminCastingSearchCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices, CastingServices) {

  console.log("AdminCastingSearchCtrl :: Iniciado");

  $scope.vm = {    
    'isLoading':false,
    'casting': []
  }

  $scope.init = function () {
    console.log("startou o adm Casting");
    $rootScope.headerId = 2;
    $rootScope.session_title= 'Admin - Pesquisa Casting';
    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');


    CastingServices.getCastings().then(function(r){
      console.log(r);
      $scope.vm.casting = r;
    });
  }


  $scope.alterar = function(c){
    console.log(c);
  }

  $scope.excluir = function(c){
    console.log(c);
  }

  $scope.visualizar = function(c){
    console.log(c);
  }



});
