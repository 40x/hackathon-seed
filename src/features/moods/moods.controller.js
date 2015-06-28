(function() {
    'use strict';

    angular.module('app').controller('GenreController', GenreControllerFn );
    GenreControllerFn.$inject = ['beatsService', 'genre'];

    function GenreControllerFn (beatsService, genre) {
        var genreVm = this;

        genreVm.content = genre.data;
        genreVm.startIndex = 0;
        genreVm.endIndex = 3;
        genreVm.error = error;
        genreVm.getGenreById = getGenreById;
        genreVm.onSuccessId = onSuccessId;
        genreVm.showNext = showNext;
        genreVm.showPrevious = showPrevious;

        genreVm.getCurrentGenre = getCurrentGenre;

        genreVm.getCurrentGenre( genreVm.startIndex,genreVm.endIndex);

        ////

        function getGenreById(id){
            beatsService.getMusicByGenre(id).then(onSuccessId,error);
        }


        function error(error) {
            console.log(error);
        }

        function onSuccessId(result) {
            genreVm.dataByIdList = result.data;
            console.log(genreVm.dataByIdList);
        }

        function onErrorId(error) {
            console.log(error);
        }

        function getCurrentGenre(start, end){
            genreVm.displayGenre = angular.copy(genreVm.content.slice(start,end));
            console.log(genreVm.displayGenre, start, end);
        }

        function showNext() {
            genreVm.startIndex = genreVm.startIndex + 1;
            genreVm.endIndex = genreVm.endIndex + 1 ;
            genreVm.getCurrentGenre(genreVm.startIndex, genreVm.endIndex);
        }

        function showPrevious() {
            genreVm.startIndex = genreVm.startIndex - 1;
            genreVm.endIndex = genreVm.endIndex - 1 ;
            genreVm.getCurrentGenre(genreVm.startIndex, genreVm.endIndex);
        }
    }

})();