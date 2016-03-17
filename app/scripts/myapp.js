angular.module("myapp",["Primary"])
.controller("StudentController",function($scope){
	$scope.student = {
		firstname:"Daniel",
		lastname: "Xu",
		fullname: function(){
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstname + " " + studentObject.lastname;
  		}
	};
});
