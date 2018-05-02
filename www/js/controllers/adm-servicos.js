angular.module('galharufa.controllers.adm-servicos', [])

.controller('AdminServicosCtrl', function($scope, $rootScope, $q, $timeout, UserServices, SimpleServices) {

  console.log("AdminServicosCtrl :: Iniciado");

  $scope.vm = {
    'user': {
      'usu_nome': '',
      'usu_login': '',
      'usu_senha': ''
    },
    'users': [],
    'isLoading':false,
    servicos: [],
    textoAtual: '',
    servicoAtual: 0
  }

  $scope.init = function () {
    console.log("startou o adm-servicos");
    $rootScope.headerId = 2;
    $rootScope.hold = false;
    $rootScope.session_title= 'Galharufa Dashboard - Serviços';

    SimpleServices
      .getServicos()
      .then(function (result) {
        $scope.vm.servicos = result.data;
        setTimeout(function () {
          $('select').material_select();
        }, 200)
      })
  }

  $scope.save = function () {
    var textoAtual = $scope.vm.textoAtual
    var servicoAtual = $scope.vm.servicoAtual

    if (!servicoAtual) return

    SimpleServices
      .editaServico(servicoAtual.svc_id, textoAtual)
      .then(function () {
        console.log('Serviço atualizado com sucesso!')
      })
  }

  $scope.changeServico = function () {
    console.log('Mudando o serviço', $scope.vm.servicoAtual)
    $scope.vm.textoAtual = $scope.vm.servicoAtual.svc_conteudo
    setTimeout(function () {
      Materialize.updateTextFields();
    }, 200)
  }

});
