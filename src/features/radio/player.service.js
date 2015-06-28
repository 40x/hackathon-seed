(function(angular) {
    angular.module('app.radio')
        .service('playerService', ['$timeout', '$sce', function($timeout, $sce) {
            var self = this;
            self.elementId = "";
            self.registerAudioElement = function(id){
                self.elementId = id;
            }
            self.playTrackList = function(tracks) {
                var trackUrlList = [];
                tracks.forEach(function(el) {
                    trackUrlList.push(el.preview_url);
                });
                var audioContainer = $("#"+self.elementId+"-container");
                var player = playerSrc = null;
                var duration = 0;
                var totalSongs = tracks.length;
                var playATrack = function(index) {
                    audioContainer.empty();
                    audioContainer.append("<audio id='"+self.elementId+"' controls><source id='"+self.elementId+"-src' src='' type='audio/mpeg'></audio>");
                    player = $('#'+self.elementId);
                    playerSrc = $('#'+self.elementId+'-src');
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
