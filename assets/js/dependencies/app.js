var app = angular.module("fitsquare", [])
  .config(function ($routeProvider, $locationProvider) {

     $routeProvider
            .when('/', {
                templateUrl : 'index',
                controller : mainController
            })
            .when('/home', {
                templateUrl : 'partials/home',
                controller : mainController
            })
            .when('/login', {
                templateUrl : 'partials/about',
                controller : mainController
            })
            .when('/contact', {
                templateUrl : 'partials/about',
                controller : mainController
            })
            .when('/about', {
                templateUrl : 'partials/contact',
                controller : mainController
            });
    
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
	/******************************************************************************************************
								Client side controllers.
	******************************************************************************************************/

	
	/******************************************************************************************************
								Controller to get the location.
	******************************************************************************************************/

	app.controller('get_location', function ($scope, $http) {
		function getLocation() {
   			if (navigator.geolocation) {
       			navigator.geolocation.getCurrentPosition(showPosition);
   			} else { 
       			alert("Geolocation is not supported by this browser.");
   			}
		}
		getLocation();
		function showPosition(position) {
			latitude = position.coords.latitude;
		    longitude = position.coords.longitude;
		    // console.log(latitude);
		    // console.log(longitude);	
		$scope.latitude = latitude;
		$scope.longitude = longitude;
		// console.log("Scope position" + $scope.longitude);
		// console.log("Scope position" + $scope.latitude);
		
		$http
		    .get('http://52.91.86.68:1330/location', {
		        params: {
		            latitude: $scope.latitude,
		            longitude: $scope.longitude
		        }
		     })
		     .success(function (data,status) {
		          $scope.location = data.location.formatted_address
		     })
		     .error(function (data, status){
                console.log("Error status : " + status);
                $scope.location = status
            });
		}
	});


	/******************************************************************************************************
								Login Controller
	******************************************************************************************************/

	app.controller('login',function($scope, $http){
		$http
			.get('http://52.91.86.68:1330/login/create',{
				params: {
					email: $scope.email,
					password: $scope.password
				}
			})
			.success(function (data, status){
				$scope.data = data
			})
			.error(function(data, status){
				console.log("Error status: " + status);
				$scope.status = status
			});
	});


//function beginning closed

