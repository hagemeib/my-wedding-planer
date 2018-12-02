TrainingsPortal.directive('titleWrapper', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/titleWrapper.directive.html',
        scope: {
            title1: '@',
            title2: '@'
        },
        link: function(scope) {
        }
    }
});