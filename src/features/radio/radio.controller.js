(function(angular) {
    var RadioController = ['$http', 'radioService','playerService', function($http, radioService, playerService) {
        var vm = this;
        vm.isSelected=function(id){
            return id === vm.radioMgr.pgMgr.selectedArtist.id;
        };
        vm.radioMgr = new RadioManager;
        vm.radioMgr.loadArtists('tania*');
        vm.searchText = "";
        vm.searchEntry=function(){
            vm.radioMgr.loadArtists(vm.searchText + '*');
        };

        function RadioPageManager() {
            var self = this;
            playerService.registerAudioElement("player");
            self.selectedArtist = {};
            self.artistSelected = false;
            self.tracksLoadFailed = true;
            self.artistList = [];
            self.artistTrackList = [];
            self.setThumbNailsForArtistsOnStart = function() {
                self.artistList.forEach(function(el) {
                    if (el.images.length === 0) {
                        el.images.push({
                            url: 'http://www.cs.colostate.edu/~plquinon/ct310/project3/Images/admin.png'
                        });
                    }
                });
            };
            self.getTrackForArtist = function(artist) {
                var onOK = function(response) {
                    self.tracksLoadFailed = false;
                    self.artistTrackList = response.data.tracks;
                    self.selectedArtist = artist;
                    self.artistSelected = true;
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
            self.searchForArtists = function(queryString){
                return radioService.getSomeArtists(queryString+'*')
                    .then(function(response){
                        return response.data.artists.items;
                    });
            };
            self.loadArtists = function(queryString) {
                var onOK = function(response) {
                    self.artistLoadFail = false;
                    self.pgMgr.artistList = response.data.artists.items;
                    self.pgMgr.setThumbNailsForArtistsOnStart();

                }
                var onFail = function(response) {
                    self.artistLoadFail = true;
                };
                radioService.getSomeArtists(queryString)
                    .then(onOK);
            };
        }
    }];

    angular.module('app.radio')
        .controller('radioController', RadioController)
}(angular));
