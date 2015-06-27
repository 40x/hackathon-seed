(function(angular) {

    angular.module('app.search').controller('searchController', searchControllerFn );

    searchControllerFn.$inject = ['beatsService', 'results'];

    function searchControllerFn(beatsService, results) {
        var scVm = this;
        scVm.onSelectList = results.data;
    }

}(angular));
