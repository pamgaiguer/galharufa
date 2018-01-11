angular.module('galharufa.controllers.casting-details', [])

.controller('CastingDetailsCtrl', function($scope, $rootScope, $q, $timeout, $location) {

  console.log("CastingDetailsCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o casting details");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
    $('body, html').animate({ scrollTop: 250 });
  }

});