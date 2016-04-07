angular.module("myapp.helloService",["myapp.constService"])
.service("helloService",["$http","constService",function($http,constService){
	this.postRequest = function(callback){
	     $http({
	     	url: constService.urlHeader + "/post",
	     	method: "POST"
	     })
	     .success(function(data){
	     	callback(data)
	     });
	};

	this.helloRequest = function(callback){
	     $http({
	     	url: constService.urlHeader + "/hello",
	     	method: "GET"
	     })
	     .success(function(data){
	     	callback(data)
	     });
	};
	
}]);