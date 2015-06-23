(function(){

    angular.module('app', [

            //external
            'ui.router',
            'ui.bootstrap',

            //internal modules
            'home'

    ]).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/app'); //base

        $urlRouterProvider.when('/app', '/app/home'); //default

        $stateProvider
            .state('app', {
                url: '^/app',
                abstract: true,
                template: '<div ui-view></div>'
            });
    }

})();