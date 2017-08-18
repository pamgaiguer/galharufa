(function() {
        'use strict';

    var appFooter = function() {
        return {
            restricted: 'E',
            templateUrl: '/shared/appFooter/appFooterTemplate.html',
            controller: 'appFooterController as footerCtrl'
        };
    };

    var appFooterController = function() {
        var self = this;
        var init = function() {

        }
        init();

        self.channelWarn = function() {
            Materialize.toast('Canal no youtube ainda em desenvolvimento!', 4000);
        }

    };    

    angular.module('doismaisdois')
    .controller('appFooterController', [
        appFooterController
    ])
    .directive('appFooter', [
        appFooter
    ]);
})();
