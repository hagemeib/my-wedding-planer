WeddingPlanner.directive('navigation', function(AuthService) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/directives/navigation.directive.html',
        scope: {
            tab: '@',
        },
        link: function(scope) {
            scope.isAuthenticated = function() {
                return AuthService.isAuthenticated();
            };
            scope.logout = function() {
                AuthService.logout();
            };
            scope.isActive = function(value) {
                return scope.tab === value;
            }
        }
    }
});