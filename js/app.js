angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'redditCtrl',
    templateUrl: 'templates/home.html'
  })
  .when('/login', {
    controller: 'LoginController',
    template: '<h2>login</h2>'
  })
  .otherwise({redirectTo: '/'});
}]);