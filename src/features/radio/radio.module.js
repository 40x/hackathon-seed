(function(angular) {
    var config = ['$stateProvider',function($stateProvider){
    	console.log('in config');
    	$stateProvider.state('app.radio',{
    		url : '/radio',
    		controller : 'radioController',
    		controllerAs : 'rc',
    		templateUrl : 'src/features/radio/radio.html'
    	})
    }];

    angular.module('app.radio',[]).config(config);
}(angular))
