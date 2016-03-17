angular.module("English",[])
.service("EnglishService",function(){
	this.hello = function(str){
		return "Hello " + str + "!";
	}
});
