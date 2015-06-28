(function() {
    'use strict';

    angular.module('app').controller('playListController', playListControllerFn);
    playListControllerFn.$inject = [ 'trackTransfer', '$state'];

    function playListControllerFn( trackTransfer, $state) {
        var plVm = this;

        plVm.playLists = trackTransfer.getPlayList();

        if(!plVm.playLists) $state.go('app.genre');

        plVm.loadSongs = loadSongs;

        ///

        function loadSongs(list){
            trackTransfer.setTracks(list.refs.tracks);
            $state.go('app.artist', {artist : list.name});
        }

        $(document).ready(function(){
            $("html, body").animate({ scrollTop: $(".playlist-anchor").offset().top }, 500);
        })

    }
})();