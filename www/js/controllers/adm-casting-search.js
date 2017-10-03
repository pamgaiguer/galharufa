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
    console.log(c);
  }


  $scope.buscarPorNome = function(){
    CastingServices.getCastingsPorNome($scope.vm.buscanome).then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscarPorNacionalidade = function(){
    console.log($scope.vm.buscanac);
    CastingServices.getCastingsPorNacionalidade($scope.vm.buscanac).then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscarPorAno = function(){
    CastingServices.getCastingsPorAno($scope.vm.buscaano).then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscarPorAltura = function(){
    CastingServices.getCastingsPorAltura($scope.vm.buscaaltura).then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscarPorManequim = function(){
    CastingServices.getCastingsPorManequim($scope.vm.buscamanequim).then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscarPorEtnia = function(){
    CastingServices.getCastingsPorEtnia($scope.vm.buscaetnia).then(function(r){ $scope.vm.casting = r; });
  }



});
