angular.module('galharufa.controllers.servicos', [])

.controller('ServicosCtrl', function($scope, $rootScope, $q, $timeout, $location, SimpleServices) {


  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    servicos: 'Carregando...'
  }

  $scope.init = function () {
  console.log("ServicosCtrl :: Iniciado");

    $rootScope.hold = false;

    SimpleServices
      .getServicos()
      .then(function (result) {
        $scope.vm.servicos = result.data;
        setTimeout(function () {
          $('ul.tabs').tabs();
        }, 200)
      })
  }

});
