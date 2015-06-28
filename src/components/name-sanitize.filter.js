(function() {
    'use strict';

    angular.module('app').filter('sanitize', sanitizeFn );

    function sanitizeFn () {
        return function(input) {
            return input.substring( input.indexOf(' '));
        };
    }

})();