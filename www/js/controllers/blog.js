angular.module('galharufa.controllers.blog', [])

.controller('BlogCtrl', function($scope, $rootScope, $q, $timeout, $location) {


  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    $rootScope.headerId = 1;
    $rootScope.hold = false;
  }

});
