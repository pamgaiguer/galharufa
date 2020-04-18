angular.module('galharufa.controllers.adm-casting-search', [])

.controller('AdminCastingSearchCtrl', function($scope, $rootScope, $q, $timeout, $location, UserServices, CastingServices) {

  $scope.vm = {
    'isLoading':false,
    'casting': []
  }

  $scope.init = function () {
    $rootScope.headerId = 2;
    $rootScope.hold = false;
    CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
  }

  $scope.alterar = function(c){
    CastingServices.casting = c;
    $rootScope.path("/adm-casting-register");
    Materialize.toast('Registro alterado com sucesso!', 4000);
  }

  $scope.excluir = function(id){
    CastingServices.deleteCasting(id).then(function(r){
      CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
      Materialize.toast('Registro excluído com sucesso!', 4000);
    });
  }


  $scope.visualizar = function(c){
    // CastingServices.casting = c;
    $location.path('/adm-casting-show/' + c);
  }

  $scope.buscar = function(){
    console.log($scope.gender, $scope.vm.busca)
    // if ($scope.vm.busca.length === 0)
    //   CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
    // else
    //   CastingServices.getCastingsPorBusca($scope.vm.tipo, $scope.vm.busca).then(function(r){ $scope.vm.casting = r; });
  }
});