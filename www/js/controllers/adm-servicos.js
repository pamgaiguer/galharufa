angular.module('galharufa.controllers.adm-servicos', [])

.controller('AdminServicosCtrl', function($scope, $rootScope, $q, $timeout, UserServices) {

  console.log("AdminServicosCtrl :: Iniciado");

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
    console.log("startou o adm-servicos");
    $rootScope.headerId = 2;
    $rootScope.hold = false;
    $rootScope.session_title= 'Galharufa Dashboard - Serviços';

  }

});
