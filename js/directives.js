var myApp = angular.module('myApp.directives', []);
myApp.directive('articleView', function() {
  return {
    template: '<a href="{{data.url}}"><img ng-src="{{data.thumbnail}}" />{{ data.title }}</a><button ng-click="plusVote(article)">+</button><button ng-click="negVote(article)">-</button>{{ article.votes }}',
    link: function(scope, elem, attr, ctrl) {
      scope.article.votes = 0;
      scope.$watch(attr.ngModel, function(v) {
        scope.data = v.data;
      });
    }
  };
});
