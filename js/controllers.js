angular.module('myApp.controllers', [])
.controller("redditCtrl", ['$scope', '$http', function($scope, $http) {
  $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/r/hot.json?jsonp=JSON_CALLBACK'
  }).success(function(data, status, headers, config) {
    $scope.articles = data.data.children;
    // console.log('testing', data.data.children);
    console.log('success');
  }).error(function(data, status, headers, config) {
    console.log('error');
  });
}]);