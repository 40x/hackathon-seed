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
            self.token = "BQC-fm1BVaeybPhC51qJQ6NWg9LpxK8Ty7bThYjol6aO3redEWVLZixHTHJBM1EbpCA8awpgkkSS7ZPH0otoB_ja3qEuTe-vD7WpuW26zNvk0c8bvbm6aoe1zc3vrpCEnCa8RSg7GPs";
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
