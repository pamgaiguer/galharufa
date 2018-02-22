angular.module('galharufa.controllers.servicos', [])

.controller('ServicosCtrl', function($scope, $rootScope, $q, $timeout, $location) {

  console.log("ServicosCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o servicos");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    // $('body, html').animate({ scrollTop: 250 });
  }

});
