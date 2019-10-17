angular.module('galharufa.controllers.casting', [])

.controller('CastingCtrl', function($scope, $rootScope, $q, $timeout, $location, CastingServices) {

  console.log("CastingCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    casting: [],
    busca: ''
  };
  const cas_tipo = $location.search().cas_tipo;
  $scope.title = cas_tipo;

  $scope.init = function () {

    $scope.mainUrl = $location.host();
    console.log($scope.mainUrl);

    $rootScope.headerId = 1;
    $rootScope.hold = false;
    CastingServices.getCastings({cas_tipo}).then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscar = function(){
    if ($scope.vm.busca.length === 0)
      CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
    else
      CastingServices.getCastingsPorBusca($scope.vm.tipo, $scope.vm.busca).then(function(r){ $scope.vm.casting = r; });
  }

});
