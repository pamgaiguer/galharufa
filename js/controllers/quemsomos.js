angular.module('galharufa.controllers.quemsomos', [])

.controller('QuemSomosCtrl', function($scope, $rootScope, $q, $timeout) {

  console.log("QuemSomosCtrl :: Iniciado");

  $scope.vm = {
    'login':'',
    'pwd':'',
    'isLoading':false      
  } 

  $scope.init = function () {
    console.log("startou o home");
    $rootScope.header_menu = true;


  }  

  $scope.login = function(form) {      
    console.log('Form Valid!');
    $scope.formData.isLoading = true;
    UserServices.login($scope.vm.login,$scope.vm.pwd)
    .then(function(success){

      if (success == 0) {        
        $scope.vm.isLoading = false;
        $scope.vm.ready = true;
        return;
      }

      UserServices.deleteUserLocalStorage();      
      UserServices.saveUserLocalStorage();
    });
  
  }

  
  $scope.esqueceuSenha = function(){}

});
