(function () {
  'use strict';

  var mainHeader = function() {
    return {
      restricted: 'E',
      templateUrl: '/app/shared/mainHeader/mainHeaderTemplate.html'
    };
  };

  angular.module('galharufa').directive('mainHeader', [
    mainHeader
  ]);

})();
