(function () {
  'use strict';

  var appHeader = function() {
    return {
      restricted: 'E',
      templateUrl: '/shared/appHeader/appHeaderTemplate.html'
    };
  };

  angular.module('doismaisdois').directive('appHeader', [
    appHeader
  ]);

})();
