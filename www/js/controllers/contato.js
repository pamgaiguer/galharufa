angular.module('galharufa.controllers.contato', [])

.controller('ContatoCtrl', function($scope, $rootScope, $q, $timeout, $location, SimpleServices) {


  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    $rootScope.hold = false;
  }

  $scope.enviar = function () {
    SimpleServices.enviaContato({
      nome: $scope.vm.nome,
      email: $scope.vm.email,
      telefone: $scope.vm.telefone,
      mensagem: $scope.vm.mensagem
    }).then(function () {
      Materialize.toast('Mensagem enviada com sucesso!', 2000)
    })
  }

});
