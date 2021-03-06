WeddingPlanner.controller('AppController', function($scope, $state, AuthService, AUTH_EVENTS) {
    $scope.User = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
    $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
      AuthService.logout();
      $state.go('login');
      alert('Session Lost! Sorry, You have to login again.');
    });
  });