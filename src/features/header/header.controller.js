(function() {
    'use strict';

    angular.module('app').controller('HeaderController', HeaderControllerFn );
    HeaderControllerFn.$inject = ['beatsService'];

    function HeaderControllerFn (beatsService) {
        var headerVm = this;
        headerVm.search = search;
        headerVm.success = success;
        headerVm.error = error;

        function search(){
            beatsService.getAllData().then(success,error);
        }

        function success(res) {
            headerVm.list = res.data;
        }

        function error(res) {
            console.log(res);
        }
    }

})();