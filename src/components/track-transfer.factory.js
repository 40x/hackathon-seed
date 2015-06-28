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

        return tt;
    }
}(angular));