var app = angular.module("myapp",[
    "ngRoute",
    "myapp.requestController",
    "myapp.nameController",
    "myapp.constService",
    "myapp.helloService"
    ])

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
    when('/request', {
        controller: 'requestController',
        templateUrl: './views/request.html'
    }).
    otherwise({
        redirectTo: '/'
    });
};

app.config(routeConfig);

app.controller("signinController",function($scope){
	$scope.pageTitle = "Signin";
})
app.controller("signupController",function($scope){
	$scope.pageTitle = "Signup";
})
app.controller("mainController",function($scope){
	$scope.pageTitle = "Main";
})

