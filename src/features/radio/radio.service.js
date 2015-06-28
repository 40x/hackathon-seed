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
            self.token = "BQA_ZbOQu0GlM4CpV8t_wWLZDgYqWuTPaSLOZjSOcKmkXselh-y3yldJaBJyT_l9S-rvpyFW-zs3NUbVEm53acZjLuRKYDcE7ik30BjqnX9h24cg6NNaEckjJqKiZLvm8R8A04SjYhKDqpnosgFl44dmen7tuKUoMvHqiuaUDkdf5qr5SbAgiXNvuLkhkssPsszCI23lNGetzkFPWHienuOECL8BxtAb4KISeC9QrerSfLqDLH5gfar4HAf3zMf4Oj-3eED7lAjR1cUgNOMmKQTx1gT_xjmcueh_-DBsaWko";
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
