(function() {
    'use strict';

    angular.module('app').service('beatsService', beatsServiceFn );
    beatsServiceFn.$inject = ['$http','$q'];

    function beatsServiceFn ($http, $q) {
        var beatsServiceVm = this;
        beatsServiceVm.getAllData = getAllData;

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

    }

})();