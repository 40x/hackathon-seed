(function() {
    'use strict';

    angular.module('app').service('spotifyService', spotifyServiceFn );
    spotifyServiceFn.$inject = ['$http','$q'];

    function spotifyServiceFn ($http, $q) {

        var spotifyServiceFnVm = this;
        spotifyServiceFnVm.getMeTheSong = getMeTheSong;
        spotifyServiceFnVm.getNewReleases = getNewReleases;
        spotifyServiceFnVm.token = "BQA_ZbOQu0GlM4CpV8t_wWLZDgYqWuTPaSLOZjSOcKmkXselh-y3yldJaBJyT_l9S-rvpyFW-zs3NUbVEm53acZjLuRKYDcE7ik30BjqnX9h24cg6NNaEckjJqKiZLvm8R8A04SjYhKDqpnosgFl44dmen7tuKUoMvHqiuaUDkdf5qr5SbAgiXNvuLkhkssPsszCI23lNGetzkFPWHienuOECL8BxtAb4KISeC9QrerSfLqDLH5gfar4HAf3zMf4Oj-3eED7lAjR1cUgNOMmKQTx1gT_xjmcueh_-DBsaWko";

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