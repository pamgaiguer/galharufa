var app = angular.module('galharufa.services.SimpleServices', []);

function SimpleServices(Configs, $http) {
  var api = {
    editQuemSomos: function (newText) {
      return $http.post(Configs.apiUrl + 'quemsomos/', { newText: newText });
    },

    getQuemSomos: function () {
      return $http.get(Configs.apiUrl + 'quemsomos/');
    },

    getServicos: function () {
      return $http.get(Configs.apiUrl + 'servicos/')
    },

    editaServico: function (servicoId, textoAtual) {
      console.log('TODO - Atualizar serviço', servicoId, textoAtual)
    }
  }

  return api;
}

SimpleServices.$inject = ['Configs', '$http'];

app.service('SimpleServices', SimpleServices);
