(function(angular) {
    var config = ['$stateProvider',function($stateProvider){

        $stateProvider.state('app.search',{
            url : '/search/:searchText',
            controller : 'searchController',
            controllerAs : 'scVm',
            templateUrl : 'src/features/searchContent/searchContent.html',
            resolve : {
                results: function(beatsService, $stateParams){
                    var paramsObj = {
                        'q' : $stateParams.searchText,
                        'type' : 'track',
                        'client_id' : 'pqqpeejv5hfstfxmub7xz4uv'
                    };
                   return beatsService.getDataBySearchText(paramsObj);
                }
            }
        })
    }];

    angular.module('app.search',[]).config(config);

}(angular));
