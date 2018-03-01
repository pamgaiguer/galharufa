angular.module('galharufa.controllers.casting', [])

.controller('CastingCtrl', function($scope, $rootScope, $q, $timeout, $location) {

  console.log("CastingCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o contato");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    // $('body, html').animate({ scrollTop: 250 });
  }

});