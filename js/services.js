angular.module('myApp.services', [])
.factory('SessionService', ['$http', 'serverRoute', function($http, serverRoute) {

}])
.factory('getReddit', ['$http', '$q', 'serverRoute', function($http, $q, serverRoute) {

  return function() {
    var d = $q.defer();
      $http({
        method: 'JSONP',
        url: 'http://api.reddit.com/r/hot.json?jsonp=JSON_CALLBACK'
      }).success(function(data, status, headers, config) {
        d.resolve(data.data.children);
        // console.log('success');
      }).error(function(data, status, headers, config) {
        // console.log('error');
        d.reject(data);
      });
      return d.promise;
  };
}]);