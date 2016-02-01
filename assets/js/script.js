var app = angular.module("plunker", [])
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
            .when('/about', {
                templateUrl : 'partials/about',
                controller : mainController
            })
            .when('/contact', {
                templateUrl : 'partials/contact',
                controller : mainController
            });
    
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });


app.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {  
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };
}]);

app.controller('AboutCtrl', function($scope, $compile) {
  console.log('inside about controller');

});

app.controller('HomeCtrl', function($scope, $compile) {
  console.log('inside home controller');

});

app.controller('ContactCtrl', function($scope, $compile) {
  console.log('inside contact controller');

});