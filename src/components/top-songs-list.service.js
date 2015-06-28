(function(angular){
    angular.module('app')
        .service('topSongsListService',topSongsListService);

    topSongsListService.$inject = ['$http','$q'];

    function topSongsListService($http, $q){
        var sl=this;
        sl.getTopSongs = function(){
            var deferred  = $q.defer();
            var request = {
                url:'https://partner.api.beatsmusic.com/v1/api/discoveries/featured?client_id=pqqpeejv5hfstfxmub7xz4uv',
                method:'GET'
            };

            $http(request)
                .success(function (result){
                deferred.resolve(result);
            }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        };
    };
}(angular));