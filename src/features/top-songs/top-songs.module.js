(function(angular){
    'use strict';
    angular.module('app.topSongs', [
        'ui.bootstrap',
        'ui.router'
    ]).config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        $stateProvider
            .state('app.topSongs', {
                url: '/top-songs',
                templateUrl: 'src/features/top-songs/top-songs.html',
                controller: 'TopSongsListController',
                controllerAs: 'sl',
                resolve:{
                    topSongs : function(topSongsListService){
                        return topSongsListService.getTopSongs();
                    }
                }
            })
            .state('app.artist', {
                url: '/:artist',
                templateUrl: 'src/features/top-songs/artist.html',
                controller: 'ArtistController',
                controllerAs: 'ac'
            });
    }
})(angular);