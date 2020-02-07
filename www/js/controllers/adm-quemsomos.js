angular.module('galharufa.controllers.adm-quemsomos', [])

.controller('AdminQuemsomosCtrl', function($scope, $rootScope, $q, $timeout, UserServices, SimpleServices) {

  $scope.vm = {
    'user': {
      'usu_nome': '',
      'usu_login': '',
      'usu_senha': ''
    },
    'users': [],
    'isLoading':false,
    quemsomos: ''
  }

  $scope.init = function () {
    console.log("startou o adm-quemsomos");
    $rootScope.hold = false;
    $rootScope.session_title= 'Dash - Quem Somos';

    SimpleServices
      .getQuemSomos()
      .then(function (result) {
        $scope.vm.quemsomos = result.data.qsm_descricao;
      })
  }

  $scope.save = function () {
    console.log('Salvando', $scope.vm.quemsomos)
    SimpleServices
      .editQuemSomos($scope.vm.quemsomos)
      .then(function() {
        $rootScope.path("/adm-home");
      });
  }

});
