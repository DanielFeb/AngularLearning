var app = angular.module("myapp",["ngRoute","name"])

function routeConfig($routeProvider){
    $routeProvider.
    when('/', {
        controller: 'signinController',
        templateUrl: './views/signin.html'
    }).
    when('/signin', {
        controller: 'signinController',
        templateUrl: './views/signin.html'
    }).
    when('/signup', {
        controller: 'signupController',
        templateUrl: './views/signup.html'
    }).
    when('/main/:name', {
        controller: 'mainController',
        templateUrl: './views/main.html'
    }).
    otherwise({
        redirectTo: '/'
    });
};

app.config(routeConfig);

app.controller("appNameController",function($scope){
	$scope.student = {
		firstname:"Daniel",
		lastname: "Xu",
		fullname: function(){
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstname + " " + studentObject.lastname;
  		}
	};
})

app.controller("signinController",function($scope){
	$scope.pageTitle = "Signin";
})
app.controller("signupController",function($scope){
	$scope.pageTitle = "Signup";
})
app.controller("mainController",function($scope){
	$scope.pageTitle = "Main";
})

