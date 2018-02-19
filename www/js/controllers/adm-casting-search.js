angular.module('galharufa.controllers.adm-casting-search', [])

.controller('AdminCastingSearchCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices, CastingServices) {

  $scope.vm = {
    'isLoading':false,
    'casting': []
  }

  $scope.init = function () {
    console.log("startou o adm Casting");
    $rootScope.headerId = 2;
    $rootScope.hold = false;
    $rootScope.session_title= 'Galharufa Dashboard - Pesquisa Casting';
    //if (UserServices.currentUser.usu_id == undefined) $location.path('/login');
    CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
  }

  $scope.alterar = function(c){
    CastingServices.casting = c;
    $rootScope.path("/adm-casting-register");
  }

  $scope.excluir = function(c){
    CastingServices.deleteCasting(c.cas_id).then(function(r){
      CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
    });

  }

  $scope.visualizar = function(c){
    CastingServices.casting = c;
    $location.path('/adm-casting-show');
  }

  $scope.buscar = function(){
    CastingServices.getCastingsPorBusca($scope.vm.tipo, $scope.vm.busca).then(function(r){ $scope.vm.casting = r; });
  }

});
