angular.module('galharufa.controllers.casting', [])

.controller('CastingCtrl', function($scope, $rootScope, $q, $timeout, $location, CastingServices) {

  console.log("CastingCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    casting: [],
    busca: ''
  }
  $scope.title = "batata";

  $scope.init = function () {
    console.log("startou o contato");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    const cas_tipo = 'Figuração';
    CastingServices.getCastings({cas_tipo}).then(function(r){ $scope.vm.casting = r; });
    // $rootScope.modelo = false;
    // $rootScope.verificaModelo = function(value){
    //   if

    // };
  }

  $scope.buscar = function(){
    if ($scope.vm.busca.length === 0)
      CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
    else
      CastingServices.getCastingsPorBusca($scope.vm.tipo, $scope.vm.busca).then(function(r){ $scope.vm.casting = r; });
  }

});
