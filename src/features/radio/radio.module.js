(function(angular) {
    var config = ['$stateProvider',function($stateProvider){
    	$stateProvider.state('app.radio',{
    		url : '/radio',
    		controller : 'radioController',
    		controllerAs : 'rc',
    		templateUrl : 'src/features/radio/radio.html'
    	})
    }];

    angular.module('app.radio',[]).config(config);
}(angular))
