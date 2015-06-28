/**
 * Created by Sandeep J on 6/27/2015.
 */

(function(angular){
    'use strict';

    angular.module('app.topSongs').controller('TopSongsListController',TopSongsListCtrlFn);

    TopSongsListCtrlFn.$inject = [ 'topSongs', 'trackTransfer', '$state'];

    function TopSongsListCtrlFn( topSongs, trackTransfer, $state){
        var sl = this;

        sl.currentStatename = $state.current.name;
        sl.topSongs = topSongs.data;

        sl.showTracks = showTracks;


        function showTracks( content){
            trackTransfer.setTracks(content.refs.tracks);
            sl.selectedName = content.name || content.title;
            localStorage.setItem('artist-source', 'top-songs');
            $state.go('app.artist', {artist: sl.selectedName });
        }




    }
})(angular);