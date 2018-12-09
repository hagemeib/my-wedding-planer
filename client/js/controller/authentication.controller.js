WeddingPlanner.controller('AuthenticationController', function($scope, AuthService, $state) {
    $scope.User = { 
        email: 'hochzeit@yb.de',
        password: ''
    };
    $scope.error = false;

    $scope.login = function() {
        AuthService.login($scope.User).then(function(msg) {
            $state.go('welcome');
        }, function(errMsg) {
            $scope.error = true;
        })
    };

    $scope.logout = function() {
        AuthService.logout().then(function(msg) {
            $state.go('welcome');
        }, function(errMsg) {
        });
    };

    $scope.isAuthenticated = function() {
        return AuthService.isAuthenticated();
    }
});