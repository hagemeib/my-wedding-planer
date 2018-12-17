var WeddingPlanner = WeddingPlanner || angular.module('wedding-planner', ['ui.router']);

WeddingPlanner.config(function ($stateProvider, $urlRouterProvider) {
  
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
    .state('groomsmen', {
      url: '/groomsmen',
      templateUrl: '../views/groomsmen.html',
      requireLogin: true,
    })
    .state('newlyweds', {
      url: '/newlyweds',
      templateUrl: '../views/newlyweds.html',
      requireLogin: true,
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '../views/contact.html',
      requireLogin: true,
    })
    .state('app', {
      url: '',
      abstract: true,
      requireLogin: true
    });

  $urlRouterProvider.otherwise('/welcome');
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