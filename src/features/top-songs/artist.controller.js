/**
 * Created by Sandeep J on 6/27/2015.
 */

(function(angular){
    'use strict';

    angular.module('app.topSongs').controller('ArtistController',ArtistControllerFn);

    ArtistControllerFn.$inject = ['trackTransfer', 'spotifyService', '$scope', '$state'];

    function ArtistControllerFn(trackTransfer, spotifyService, $scope, $state){
        var ac = this;
        ac.topSongs = trackTransfer.getTracks();
        if(!ac.topSongs) {
            $state.go('app.topSongs');
        }
        ac.playSong = playSong;
        ac.playSuccess = playSuccess;
        ac.error = error;
        ac.playing = false;
        ac.index = 0;

        function playSong(index, query) {
            ac.index = index;
            spotifyService.getMeTheSong(query).then(ac.playSuccess, ac.error);
        }

        function playSuccess(res) {

            var player = $('#playMe');

            if( ac.topSongs[ac.index].playing) {
                player[0].pause();
            }
            else {
                ac.url = res.tracks.items[0] ? res.tracks.items[0].preview_url : "";
                player.attr('src', ac.url);
                player[0].play();
                player.bind('ended', function() {
                    ac.topSongs[ac.index].playing = false;
                    $scope.$apply();
                });
            }

            (ac.topSongs).forEach(function(e, i){
                if( i === ac.index )e.playing = !e.playing;
                else e.playing = false;
            });


        }

        function error(res) {
            console.log(res);
        }

        (ac.topSongs).forEach(function(e, i){
            e.playing = false;
        });

    }
})(angular);