angular.module('galharufa.controllers.contato', [])

.controller('ContatoCtrl', function($scope, $rootScope, $q, 
  $timeout, $location, SimpleServices) {

  console.log("ContatoCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false
  }

  $scope.init = function () {
    $rootScope.headerId = 1;
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
