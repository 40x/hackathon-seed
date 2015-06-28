(function(){

    angular.module('app', [

            //external
            'ui.router',
            'ui.bootstrap',
            'ngSanitize',

            //internal modules
            'app.home',
            'app.radio',
            'app.search',
            'genre',
            'app.topSongs'

    ]).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/app'); //base

        $urlRouterProvider.when('/app', '/app/home'); //default

        $stateProvider
            .state('app', {
                url: '^/app',
                abstract: true,
                views: {
                    'leftNav@' : {templateUrl: 'src/features/left-nav/left-nav.html'},
                    'header@' : {templateUrl: 'src/features/header/header.html',
                                 controller : 'HeaderController',
                                 controllerAs : 'headerVm'},
                    'content@': {template : '<div ui-view></div>'},
                    'footer@':  {templateUrl: 'src/features/footer/footer.html'}
                }
            });


    }

})();