angular.module("myapp.requestController",["myapp.helloService"])
.controller("requestController",["$scope","helloService",function($scope,helloService){
	$scope.pageTitle = "Request test!"
	var setTitle = function(titleValue){
		$scope.pageTitle  = titleValue;
	};
	$scope.onGetButtonClick = function(e){
		helloService.helloRequest(setTitle);
	}
	$scope.onPostButtonClick = function(e){
		helloService.postRequest(setTitle);
	}
	
}]);