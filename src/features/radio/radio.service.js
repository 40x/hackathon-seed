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
            self.token = "BQCFMyO0APhmbumzUBJyfhYQUSezdbrMrkVGEWOyRMHm0uNHSkuExgK4enAf0ng6wbEIWP3UjlGW2d1jOGcH8lfHU5gPEmSpqp6fzppwDwQXQ-sZm7e6xJ_m1K-zKqi8vB1Co7MmgJH7NLjIkbmd38crecSZSsnrA5SPQk4R3RQ3V5fzuVnNAsdADKbvosAEzZuaE6HqHMOjIB6wEimnJ8KQjvVxlJSbyeBtRk-hZ8QAtUncUre0GR2g_sPoHiBk8EnlIJxpUThtKbNzVapYajZderqSgGBub0IkmC596A";
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
