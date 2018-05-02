angular.module('galharufa.controllers.servicos', [])

.controller('ServicosCtrl', function($scope, $rootScope, $q, $timeout, $location, SimpleServices) {

  console.log("ServicosCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    servicos: []
  }

  $scope.init = function () {
    console.log("startou o servicos");
    $rootScope.headerId = 1;
    $rootScope.hold = false;

    SimpleServices
      .getServicos()
      .then(function (result) {
        console.log(result);
        $scope.vm.servicos = result.data;
        setTimeout(function () {
          $('ul.tabs').tabs();
        }, 200)
      })
  }

});
