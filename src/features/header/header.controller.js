(function() {
    'use strict';

    angular.module('app').controller('HeaderController', HeaderControllerFn );
    HeaderControllerFn.$inject = ['beatsService'];

    function HeaderControllerFn (beatsService) {
        var headerVm = this;
        headerVm.search = search;
        headerVm.success = success;
        headerVm.error = error;

        function search(item){
            var paramsObj = {
                'q' : item,
                'client_id' : 'pqqpeejv5hfstfxmub7xz4uv'
            };

            return beatsService.getAllData(paramsObj).then(success,error);
        }

        function success(res) {
            headerVm.list = res.data;
            return headerVm.list.map(function(item){
                return item.display;
            });
        }

        function error(res) {
            console.log(res);
        }
    }

})();