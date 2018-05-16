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

  $scope.init = function () {
    console.log("startou o contato");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    // $('body, html').animate({ scrollTop: 250 });
    CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
  }

  $scope.buscar = function(){
    if ($scope.vm.busca.length === 0)
      CastingServices.getCastings().then(function(r){ $scope.vm.casting = r; });
    else
      CastingServices.getCastingsPorBusca($scope.vm.tipo, $scope.vm.busca).then(function(r){ $scope.vm.casting = r; });
  }

});