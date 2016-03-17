angular.module("Math",[])
.service("MathService",function(){
	this.add = function(a,b){
		return a + b;
	}
	this.minus = function(a,b){
		return a - b;
	}

});
