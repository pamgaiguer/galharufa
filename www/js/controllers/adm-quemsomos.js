angular.module('galharufa.controllers.adm-quemsomos', [])

.controller('AdminQuemsomosCtrl', function($scope, $rootScope, $q, $timeout, UserServices) {

  $scope.vm = {
    'user': {
      'usu_nome': '',
      'usu_login': '',
      'usu_senha': ''
    },
    'users': [],
    'isLoading':false
  }

  $scope.init = function () {
    console.log("startou o adm-quemsomos");
    $rootScope.headerId = 2;
    $rootScope.hold = false;
    $rootScope.session_title= 'Dash - Quem Somos';
  }

});
