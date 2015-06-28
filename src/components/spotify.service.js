(function() {
    'use strict';

    angular.module('app').service('spotifyService', spotifyServiceFn );
    spotifyServiceFn.$inject = ['$http','$q'];

    function spotifyServiceFn ($http, $q) {

        var spotifyServiceFnVm = this;
        spotifyServiceFnVm.getMeTheSong = getMeTheSong;
        spotifyServiceFnVm.token = "BQC7hw7z64cPgMy7dRgkPHTkIXnXzrn4cWUSS4_k6d-5JMkcJDihHrJqqjqd5hVZe96kt7lUFFFNB2QXrwsfnVQWQE_qE89T4arQwzmROErFIzB-KhcJqD06hpUZRccbtxIFCBN0tbqbTODtsTqfMD3jkkAt6kNwEJAV3aNhb-SGhxVgPNT1jPYKtK4gq-UsMBA3ODRKEDmXVfTpjGGQJL8mHUJ6vpf968xrEu7oTn-MtJ2vl1msMh6PZA0AQUp2W7h_auGh-OxdoYnYePABCEIRJuykXcCtnlY63y6LRnYjqAk";

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

    }

})();