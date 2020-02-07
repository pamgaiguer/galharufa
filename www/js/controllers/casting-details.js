angular.module('galharufa.controllers.casting-details', [])

.controller('CastingDetailsCtrl', function($scope, $sce, $rootScope, $location, CastingServices, $routeParams) {


  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false,
    'cast': null,
    casting_details: 'Carregando...'
  }

  $scope.init = function () {
    $rootScope.headerId = 1;
    $rootScope.hold = false;

    $scope.mainUrl = $location.host();
    // console.log($scope.mainUrl);

    CastingServices.getCasting($routeParams.id).then(function(r){
      // $scope.vm.casting = r[0];
      $scope.vm.casting = r[0] || {}; 

      if ($scope.vm.casting.cas_portfolio === '') {
          $scope.vm.embbedVideo = ''
          return
      }
      let embedUrl = $scope.vm.casting.cas_portfolio.replace('watch?v=', 'embed/')
      $scope.vm.embbedVideo = $sce.trustAsResourceUrl(embedUrl)

    });
  }

});
