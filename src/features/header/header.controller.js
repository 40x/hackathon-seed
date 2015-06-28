(function() {
    'use strict';

    angular.module('app').controller('HeaderController', HeaderControllerFn );
    HeaderControllerFn.$inject = ['beatsService','$state'];

    function HeaderControllerFn (beatsService, $state) {
        var headerVm = this;
        headerVm.search = search;
        headerVm.searchSuccess = searchSuccess;
        headerVm.error = error;
        headerVm.onSelect = onSelect;

        function search(item){
            var paramsObj = {
                'q' : item,
                'client_id' : 'pqqpeejv5hfstfxmub7xz4uv'
            };

            return beatsService.getAllData(paramsObj).then(searchSuccess,error);
        }

        function searchSuccess(res) {
            headerVm.searchList = res.data;
            return headerVm.searchList.map(function(item){
                return item.display;
            });
        }

        function error(res) {
            console.log(res);
        }

        function onSelect() {
            $state.go('app.search', {searchText : headerVm.searchText});
        }
    }

})();