(function() {
    'use strict';

    angular.module('app').service('beatsService', beatsServiceFn );
    beatsServiceFn.$inject = ['$http','$q'];

    function beatsServiceFn ($http, $q) {
        var beatsServiceVm = this;
        beatsServiceVm.getAllData = getAllData;
        beatsServiceVm.getDataBySearchText = getDataBySearchText;
        beatsServiceVm.getMusicByGenre = getMusicByGenre;
        beatsServiceVm.getAllGenre = getAllGenre;

        function getAllData(paramsObj) {
            var deferred = $q.defer();

            var request = {
                url: 'https://partner.api.beatsmusic.com/v1/api/search/predictive',
                params : paramsObj,
                method: 'GET'
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                }).error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function getDataBySearchText(paramsObj) {
            var deferred = $q.defer();

            var request = {
                url: 'https://partner.api.beatsmusic.com/v1/api/search',
                params : paramsObj,
                method: 'GET'
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                }).error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }


        function getAllGenre() {
            var deferred = $q.defer();

            var request = {
                url: 'https://partner.api.beatsmusic.com/v1/api/genres?client_id=pqqpeejv5hfstfxmub7xz4uv',
                method: 'GET'
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                }).error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function getMusicByGenre(id) {
            var deferred = $q.defer();

            var request = {
                url: 'https://partner.api.beatsmusic.com/v1/api/genres/'+id+'/featured?limit=20&offset=0&client_id=pqqpeejv5hfstfxmub7xz4uv',
                method: 'GET'
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