(function () {
    'use strict';

    var appConfig = function ($httpProvider, $stateProvider, $urlRouterProvider, $provide, $locationProvider) {

        // $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        // $httpProvider.interceptors.push('httpInterceptor');

        $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('/404');

        // $locationProvider.html5Mode({
        //     enabled: appConfig.html5Mode,
        //     requireBase: false
        // }).hashPrefix('*');
        // $locationProvider.hashPrefix('!');

        $locationProvider.hashPrefix('');

    };

    angular.module('mogitur').config([
        '$httpProvider',
        '$stateProvider',
        '$urlRouterProvider',
        '$provide',
        '$locationProvider',
        appConfig
    ]);
})();
