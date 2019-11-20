angular.module('galharufa.controllers.adm-casting-show', [])

.controller('AdminCastingShowCtrl', function($scope, $sce, $rootScope, $routeParams, $location, CastingServices) {

    $scope.vm = {
        'isLoading':false,
        'casting': {},
    }
    $scope.init = function () {
        $rootScope.headerId = 2;
        $rootScope.hold = false;

        $scope.mainUrl = $location.host();
        
        CastingServices.getCasting($routeParams.id).then(function(r){
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