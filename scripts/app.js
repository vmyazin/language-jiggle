var langJiggle = angular.module('langJiggle', ['ngResource']);

langJiggle.factory('Data', function () {
    return {message:"Hello, World! I'd like to drink a huge cup of mango juice!"};
});


langJiggle.controller('LJCtrl', function LJCtrl($scope, Data, $resource, $routeParams, $location) {
  // $scope.$route = $route;
  $scope.data = Data;

  $scope.isActive = function(route) {
      return route === $location.path();
  }

});

langJiggle.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
                        templateUrl: 'partials/msg-input.html', controller: 'LJCtrl'})
                .when('/about', {
                        templateUrl: 'partials/about.html'})
                .otherwise({
                        redirectTo: '/'})
}]);

langJiggle.filter('makeBad', function() {
  return function(text) {
    var result = "";
    b = text.split(",");
    for(var i=0; i<b.length; i++) {
      result = result + b[i] +" and screw it!! "
    }
    return result;
  }
});

langJiggle.filter('makeGood', function() {
  return function(text) {
    var result = "";
    b = text.split("!");
    for(var i=0; i<b.length; i++) {
      result = result + b[i] +" and i love you!! "
    }
    return result;
  }
});
