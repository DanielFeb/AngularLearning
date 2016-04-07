angular.module("myapp.constService",[])
.service("constService",function(){
    this.urlHeader = function(){
        return "http://localhost:7777";
    }
});