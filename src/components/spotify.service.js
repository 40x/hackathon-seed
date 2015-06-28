(function() {
    'use strict';

    angular.module('app').service('spotifyService', spotifyServiceFn );
    spotifyServiceFn.$inject = ['$http','$q'];

    function spotifyServiceFn ($http, $q) {

        var spotifyServiceFnVm = this;
        spotifyServiceFnVm.getMeTheSong = getMeTheSong;
        spotifyServiceFnVm.getNewReleases = getNewReleases;
        spotifyServiceFnVm.token = "BQCk3saxkE05OAfGK0wJ8_9pTHfdCqzePONUUDsBzMg0Rf0-6c8Y0IeplOnPE7aJpXnlUhxaLp8OMCevzxR9UYph3RWInH5xIWWHdw5CQ9be3Y1GecOz2WBaKW9soN-ua3wk2hvNgOdj1ttggnzc_lMSavcSp4sVGseqnE3Kb90flBf4XzWa60Vts_kElWGx9QWctlVgYkyrYcjdo4PJq-nI_N-afqLT9gwFr1Q41TfcCUdn2XuGc2lVZ4JvFhLT42fJh6o3ZPbGYjWTwe2qrdGD1wGMjKXlQAG83iIbEJDiY1c";

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