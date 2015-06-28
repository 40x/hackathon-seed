(function() {
    'use strict';

    angular.module('app').service('spotifyService', spotifyServiceFn );
    spotifyServiceFn.$inject = ['$http','$q'];

    function spotifyServiceFn ($http, $q) {

        var spotifyServiceFnVm = this;
        spotifyServiceFnVm.getMeTheSong = getMeTheSong;
        spotifyServiceFnVm.getNewReleases = getNewReleases;
        spotifyServiceFnVm.token = "BQBxRwccFbhONQ-TDAqIJYv5wSNZW9UJASZvdh2cmYjKU4YE-9qegpIXvWxD2WhlN052T6Fe17LehdLkcz1yUYHLYCtdCwS5TxAGNdhIYBtVHLfyxhPa5IBFj0Jd8UBhaGTIMD1WY-puUgIM9bJTJFzAU_kvZp6y18cwq0t4OKYm04Ob3PTuulCeDmuaRyIp0qK4Nc_9ZSQL7V8FA1HGvibTLPxfbVg3e078avOAnBM_DXhX6YpYOc8AeroZUGiDGZe_KmU8KZiYjH-VzIpQioRi4tP6RYNzCKXvSyKTxLC9_7g";

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