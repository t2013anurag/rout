var app = angular.module("plunker", [])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/home',
    {
      templateUrl:    'index/index',
      controller:     'HomeCtrl'
    });
    $routeProvider.when('/about',
    {
      templateUrl:    'about/abput',
      controller:     'AboutCtrl'
    });
    $routeProvider.when('/contact',
    {
      templateUrl:    'contact/contact',
      controller:     'ContactCtrl'
    });
    $routeProvider.otherwise(
    {
      redirectTo:     '/home',
      controller:     'HomeCtrl', 
    }
  );
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