(function(angular) {

    angular.module('app.search').controller('searchController', searchControllerFn );

    searchControllerFn.$inject = ['spotifyService', 'results', '$scope'];

    function searchControllerFn(spotifyService, results, $scope) {
        var scVm = this;
        scVm.onSelectList = results.data;
        scVm.playSong = playSong;
        scVm.playSuccess = playSuccess;
        scVm.error = error;
        scVm.playing = false;
        scVm.index = 0;

        (scVm.onSelectList).forEach(function(e, i){
            e.playing = false;
        });

        function playSong(index, query) {
            scVm.index = index;
           spotifyService.getMeTheSong(query).then(scVm.playSuccess, scVm.error);
        }

        function playSuccess(res) {

            var player = $('#playMe');

            if( scVm.onSelectList[scVm.index].playing) {
                player[0].pause();
            }
            else {
                scVm.url = res.tracks.items[0] ? res.tracks.items[0].preview_url : "";
                player.attr('src', scVm.url);
                player[0].play();
                player.bind('ended', function() {
                    scVm.onSelectList[scVm.index].playing = false;
                    $scope.$apply();
                });
            }

            (scVm.onSelectList).forEach(function(e, i){
                if( i === scVm.index )e.playing = !e.playing;
                else e.playing = false;
            });


        }

        function error(res) {
            console.log(res);
        }
    }

}(angular));
