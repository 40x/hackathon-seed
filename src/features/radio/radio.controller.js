(function(angular) {
    var RadioController = ['$http', 'radioService','playerService', function($http, radioService, playerService) {
        var vm = this;

        vm.radioMgr = new RadioManager;
        vm.radioMgr.loadArtistsOnStart();
        vm.previews = [
            'https://p.scdn.co/mp3-preview/fa7061f7112d69c2352ee904b5425f2d068153c6',
            'https://p.scdn.co/mp3-preview/3742af306537513a4f446d7c8f9cdb1cea6e36d1'
        ];


        function RadioPageManager() {
            var self = this;
            var defaultArtistImgUrl = '/resources/img/admin.png';
            self.tracksLoadFailed = true;
            self.artistList = [];
            self.artistTrackList = [];
            self.setThumbNailsForArtistsOnStart = function() {
                self.artistList.forEach(function(el) {
                    if (el.images.length === 0) {
                        el.images[0] = {
                            url: 'http://www.cs.colostate.edu/~plquinon/ct310/project3/Images/admin.png'
                        }
                    }
                });
            };
            self.getTrackForArtist = function(artist) {
                var onOK = function(response) {
                    self.tracksLoadFailed = false;
                    self.artistTrackList = response.data.tracks;
                    playerService.playTrackList(self.artistTrackList);
                };
                var onFail = function(response) {
                    self.tracksLoadFailed = true;
                };
                radioService.getTracksForArtist(artist.id, "US").then(onOK, onFail);
            };
        }


        function RadioManager() {
            var self = this;
            self.artistLoadFail = true;

            self.pgMgr = new RadioPageManager();

            self.loadArtistsOnStart = function() {
                var onOK = function(response) {
                    self.artistLoadFail = false;
                    self.pgMgr.artistList = response.data.artists.items;
                    self.pgMgr.setThumbNailsForArtistsOnStart();

                }
                var onFail = function(response) {
                    self.artistLoadFail = true;
                };
                radioService.getSomeArtists('tania*')
                    .then(onOK);
            };
        }
    }];

    angular.module('app.radio')
        .controller('radioController', RadioController)
}(angular));
