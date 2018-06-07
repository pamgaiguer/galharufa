angular.module('galharufa.controllers.adm-casting-show', [])

.controller('AdminCastingShowCtrl', function($scope, $sce, $rootScope, $routeParams, CastingServices) {

    $scope.vm = {
        'isLoading':false,
        'casting': {}
    }


    $scope.init = function () {
        console.log("startou o adm Casting show");
        $rootScope.headerId = 2;
        $rootScope.hold = false;
        $rootScope.session_title = "Visualizar";
        $rootScope.nome_casting = "FAKE-ATOR";
        
        CastingServices.getCasting($routeParams.id).then(function(r){
            console.log('casting', r); 
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