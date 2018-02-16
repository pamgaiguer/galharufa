angular.module('galharufa.controllers.adm-casting-show', [])

.controller('AdminCastingShowCtrl', function($scope, $rootScope) {

    $scope.vm = {
        'isLoading':false,
        'casting': []
    }


    $scope.init = function () {
        console.log("startou o adm Casting show");
        $rootScope.headerId = 2;
        $rootScope.hold = false;
        $('body').css('background-color', '#eee');
        $rootScope.session_title= 'Galharufa Dashboard - Casting Visualizar';
    }

});