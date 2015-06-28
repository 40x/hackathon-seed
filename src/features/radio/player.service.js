(function(angular) {
    angular.module('app.radio')
        .service('playerService', ['$timeout', '$sce', function($timeout, $sce) {
            var self = this;
            var shuffle = function(array) {
                //from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
                var currentIndex = array.length,
                    temporaryValue, randomIndex;
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }
            self.elementId = "";
            self.registerAudioElement = function(id) {
                self.elementId = id;
            }
            self.playTrackList = function(tracks) {
                var trackUrlList = [];
                tracks.forEach(function(el) {
                    trackUrlList.push(el.preview_url);
                });
                var audioContainer = $("#" + self.elementId + "-container");
                var player = playerSrc = null;
                var duration = 0;
                var totalSongs = tracks.length;
                var playATrack = function(index) {
                    audioContainer.empty();
                    audioContainer.append("<audio id='" + self.elementId + "' controls><source id='" + self.elementId + "-src' src='' type='audio/mpeg'></audio>");
                    player = $('#' + self.elementId);
                    playerSrc = $('#' + self.elementId + '-src');
                    playerSrc.attr('src', trackUrlList[index]).detach().appendTo(player);
                    player.currentSrc = trackUrlList[index];
                    player.bind('ended', function() {
                        if (index !== totalSongs - 1) {
                            playATrack(index + 1);
                        } else {
                            shuffle(trackUrlList);
                            playATrack(0);
                        }
                    });
                    player[0].play();
                };
                playATrack(0);
            };
        }]);
}(angular));
