(function(angular) {
    var RadioController = ['$http','radioService',function($http,radioService){
    	var vm = this;
        var onOK = function(response){
            console.log(response.data);
        }
        radioService.getSomeArtists('taylor swift')
            .then(onOK);
    }];

    angular.module('app.radio')
    .controller(RadioController)
}(angular))
