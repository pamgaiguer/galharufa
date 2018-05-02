var app = angular.module('galharufa.services.SimpleServices', []);

function SimpleServices(Configs, $http) {
  var api = {
    editQuemSomos: function (newText) {
      return $http.post(Configs.apiUrl + 'quemsomos/', { newText: newText });
    },

    getQuemSomos: function () {
      return $http.get(Configs.apiUrl + 'quemsomos/');
    }
  }

  return api;
}

SimpleServices.$inject = ['Configs', '$http'];

app.service('SimpleServices', SimpleServices);
