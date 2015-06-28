(function() {
    'use strict';

    angular.module('app').service('spotifyService', spotifyServiceFn );
    spotifyServiceFn.$inject = ['$http','$q'];

    function spotifyServiceFn ($http, $q) {

        var spotifyServiceFnVm = this;
        spotifyServiceFnVm.getMeTheSong = getMeTheSong;
        spotifyServiceFnVm.getNewReleases = getNewReleases;
        spotifyServiceFnVm.token = "BQCFMyO0APhmbumzUBJyfhYQUSezdbrMrkVGEWOyRMHm0uNHSkuExgK4enAf0ng6wbEIWP3UjlGW2d1jOGcH8lfHU5gPEmSpqp6fzppwDwQXQ-sZm7e6xJ_m1K-zKqi8vB1Co7MmgJH7NLjIkbmd38crecSZSsnrA5SPQk4R3RQ3V5fzuVnNAsdADKbvosAEzZuaE6HqHMOjIB6wEimnJ8KQjvVxlJSbyeBtRk-hZ8QAtUncUre0GR2g_sPoHiBk8EnlIJxpUThtKbNzVapYajZderqSgGBub0IkmC596A";

        function getMeTheSong(query)  {

            var deferred = $q.defer();
            var request = {
                url: 'https://api.spotify.com/v1/search',
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + spotifyServiceFnVm.token
                },
                params: {
                    q: query,
                    type: 'track'
                }
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                }).error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function getNewReleases()  {

            var deferred = $q.defer();
            var request = {
                url: 'https://api.spotify.com/v1/browse/new-releases',
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + spotifyServiceFnVm.token
                }
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                }).error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

    }

})();