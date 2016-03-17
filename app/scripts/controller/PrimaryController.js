angular.module("Primary",[])
.controller("PrimaryController",function($scope){
	$scope.student = {
		firstname:"Vector",
		lastname: "Wang",
		fullname: function(){
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstname + " " + studentObject.lastname;
  		}
	};
});
