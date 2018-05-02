angular.module('galharufa.controllers.quemsomos', [])

.controller('QuemsomosCtrl', function($scope, $rootScope, $q, $timeout, $location, SimpleServices) {

  console.log("QuemsomosCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    quemsomos: 'Carregando...'
  }

  $scope.init = function () {
    console.log("startou o quem somos");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    // $('body, html').animate({ scrollTop: 350 });

    SimpleServices
      .getQuemSomos()
      .then(function (result) {
        $scope.vm.quemsomos = result.data.qsm_descricao;
      })
  }

});