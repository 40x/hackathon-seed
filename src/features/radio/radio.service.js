(function(angular) {
    angular.module('app.radio')
        .service('radioService', ['$http', '$q', function($http, $q) {
            var self = this;
            var getTemplateFactory = function(request) {
                return function(query) {
                    var prom = $q.defer();
                    var onOK = function(response) {
                        prom.resolve(response);
                    };
                    var onFail = function(response) {
                        prom.resolve(response);
                    };
                    $http(request).then(onOK, onFail);
                    return prom.promise;
                };
            }
            self.token = "BQD0CMM-7UplS4VBsjVNAYt7DKSfXbdQIM_l0ud7BvbGi3o_M_PAFPNqfx5VtHxHah3mIt-GoA2vjdLBellexCAx6EluhvHPswpMGu9rrRN5U9h5pRbB8zGPHK6aGiljHskKi4_sZuI";
            self.getSomeArtists = function(query) {
                var request = {
                    url: 'https://api.spotify.com/v1/search',
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + self.token
                    },
                    params: {
                        q: query,
                        type: 'artist'
                    }
                };
                var getOp = getTemplateFactory(request);
                return getOp(query);               
            };
            self.getTracksForArtist = function(artistId,country){
                var request = {
                    url: 'https://api.spotify.com/v1/artists/'+artistId+'/top-tracks',
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + self.token
                    },
                    params: {
                        country: country,
                    }
                };
                var getOp = getTemplateFactory(request);
                return getOp();   
            };
        }]);
}(angular));
