var myApp = angular.module('myApp.directives', []);
myApp.directive('articleView', function() {
  return {
    template: '<a href="{{data.url}}"><img ng-src="{{data.thumbnail}}" /><br />{{ data.title }}</a>',
    link: function(scope, elem, attr, ctrl) {
      console.log(scope);

      scope.$watch(attr.ngModel, function(v) {
        // if (v) {
          scope.data = v.data;
        // }
      });

    }
  };
});
