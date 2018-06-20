angular.module('galharufa.controllers.blog', [])

.controller('BlogCtrl', function($scope, $rootScope, $q,
  $timeout, $location, SimpleServices) {

  console.log("BlogCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o blog");
    $rootScope.headerId = 1;
    $rootScope.hold = false;
  }

});
