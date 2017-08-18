(function() {
        'use strict';

        var mainFooter = function() {
            return {
                restricted: 'E',
                templateUrl: '/shared/mainFooter/mainFooterTemplate.html',
                controller: 'mainFooterController as footerCtrl'
            };
        };

        var mainFooterController = function() {
            var self = this;
            var init = function() {

            }
            init();

            self.channelWarn = function() {
                Materialize.toast('Canal no youtube ainda em desenvolvimento!', 4000);
            }

        };

    angular.module('doismaisdois')
    .controller('mainFooterController', [
        mainFooterController
    ])
    .directive('mainFooter', [
        mainFooter
    ]);
})();
