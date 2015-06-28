(function() {
    'use strict';

    angular.module('app').controller('GenreController', GenreControllerFn);
    GenreControllerFn.$inject = [ 'beatsService', 'genre', '$state', 'trackTransfer'];

    function GenreControllerFn( beatsService, genre, $state, trackTransfer) {
        var genreVm = this;

        genreVm.content = genre.data;
        genreVm.error = error;
        genreVm.getGenreById = getGenreById;
        genreVm.onSuccessId = onSuccessId;
        genreVm.getCurrentGenre = getCurrentGenre;

        genreVm.getCurrentGenre();

        ////

        function getGenreById(id) {
            beatsService.getMusicByGenre(id).then(onSuccessId, error);
        }


        function error(error) {
            console.log(error);
        }

        function onSuccessId(result) {
            genreVm.dataByIdList = result.data;
            trackTransfer.setPlayList(genreVm.dataByIdList);
            $state.go('app.playlists');
        }

        function onErrorId(error) {
            console.log(error);
        }

        function getCurrentGenre() {
            genreVm.displayGenre = angular.copy(genreVm.content);
        }


    }
})();