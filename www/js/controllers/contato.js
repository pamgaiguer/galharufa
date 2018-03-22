angular.module('galharufa.controllers.contato', [])

.controller('ContatoCtrl', function($scope, $rootScope, $q, $timeout, $location) {

  console.log("ContatoCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o contato");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    // $('body, html').animate({ scrollTop: 350 });
  }

  $scope.enviar = function () {
    console.log("teste contato");
  }

});
