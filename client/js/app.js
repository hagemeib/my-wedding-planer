var TrainingsPortal = TrainingsPortal || angular.module('trainings-portal', ['ui.router']);

TrainingsPortal.config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '../views/welcome.login.html',
      requireLogin: false,
      controller: 'AuthenticationController'
    })
    .state('welcome', {
      url: '/welcome',
      templateUrl: '../views/welcome.html',
      requireLogin: true
    })
    .state('invitation', {
      url: '/invitation',
      templateUrl: '../views/invitation.html',
      requireLogin: true,
    })
    .state('locations', {
      url: '/locations',
      templateUrl: '../views/locations.html',
      requireLogin: true,
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: '../views/schedule.html',
      requireLogin: true,
    })
    .state('accomodation', {
      url: '/accomodation',
      templateUrl: '../views/accomodation.html',
      requireLogin: true,
    })
    .state('feedback', {
      url: '/feedback',
      templateUrl: '../views/feedback.html',
      requireLogin: true,
    })
    .state('app', {
      url: '',
      abstract: true,
      requireLogin: true
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '../views/dashboard.html',
      requireLogin: true
    });

  $urlRouterProvider.otherwise('/login');

})

.run(function($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
    var requireLogin = toState.requireLogin;
    if (requireLogin && !AuthService.isAuthenticated()) {
      event.preventDefault();
      $state.go('login');
    }
  });
});