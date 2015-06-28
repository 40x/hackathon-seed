(function(angular){
    angular.module('app')
        .factory('trackTransfer',trackTransferFn);

    function trackTransferFn(){
        var tt=this;
        tt.setTracks = function(tracks){
            tt.tracks = tracks;
        };
        tt.getTracks = function(){
            return tt.tracks;
        };

        tt.setPlayList = function(pl){
            tt.pl = pl;
        };
        tt.getPlayList = function(){
            return tt.pl;
        };

        return tt;
    }
}(angular));