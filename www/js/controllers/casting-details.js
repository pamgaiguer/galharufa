angular.module('galharufa.controllers.casting-details', [])

.controller('CastingDetailsCtrl', function($scope, $rootScope, $location, CastingServices, $routeParams) {

  console.log("CastingDetailsCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    'cast': null,
  }

  $scope.init = function () {
    console.log("startou o casting details");
    $rootScope.headerId = 1;
    $rootScope.hold = false;

    $scope.mainUrl = $location.host();
    console.log($scope.mainUrl);

    // $('body, html').animate({ scrollTop: 250 });
    CastingServices.getCasting($routeParams.id).then(function(r){
      $scope.vm.casting = r[0];
    });
  }

});
