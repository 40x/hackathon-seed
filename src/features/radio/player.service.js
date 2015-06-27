(function(angular) {
    angular.module('app.radio')
        .service('playerService', ['$timeout', '$sce', function($timeout, $sce) {
            var self = this;
            self.playTrackList = function(tracks) {
                var trackUrlList = [];
                tracks.forEach(function(el) {
                    trackUrlList.push(el.preview_url);
                });
                var audioContainer = $("#audioContainer");
                var player = playerSrc = null;
                var duration = 0;
                var totalSongs = tracks.length;
                var playATrack = function(index) {
                    audioContainer.empty();
                    audioContainer.append("<audio id='player' controls><source id='playerSrc' src='' type='audio/mpeg'></audio>");
                    player = $('#player');
                    playerSrc = $('#playerSrc');
                    playerSrc.attr('src', trackUrlList[index]).detach().appendTo(player);
                    player.currentSrc = trackUrlList[index];
                    player.bind('ended', function() {
                        if(index!==totalSongs-1){
                            playATrack(index+1);
                        }
                    });
                    player[0].play();
                };
                playATrack(0);
            };
        }]);
}(angular));
