(function(){

    angular.module('app.home', [
        'ui.router',
        'ui.bootstrap'
    ]).config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        $stateProvider
            .state('app.home', {
                url: '/home',
                templateUrl: 'src/features/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeVm'
            });
    }

})();