TrainingsPortal.directive('imageContainer', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/directives/imageContainer.directive.html',
        scope: {
            title1: '@',
            title2: '@',
            imagesrc: '@'
        },
        link: function(scope) {
        }
    }
});