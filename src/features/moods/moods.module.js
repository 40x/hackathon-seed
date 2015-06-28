(function(){

    angular.module('genre', ['ui.router', 'ui.bootstrap']).config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {



        $stateProvider
            .state('app.genre', {
                url: '/genre',
                templateUrl: 'src/features/moods/moods.html',
                controller: 'GenreController',
                controllerAs: 'genreVm',
                resolve : {
                    genre : function(beatsService) {
                        return  beatsService.getAllGenre();
                    }
                }
            })
            .state('app.playlists', {
                url: '/playlists',
                templateUrl: 'src/features/moods/partials/playlists.html',
                controller: 'playListController',
                controllerAs: 'plVm'
            })
    }

})();