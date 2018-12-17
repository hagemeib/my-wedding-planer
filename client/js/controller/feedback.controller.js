WeddingPlanner.controller('FeedbackController', function ($scope, $location, $state, Feedback) {
  $scope.feedback = {
    participate: true,
    sleepingWithUs: true
  };
  
  $scope.submitFeedback = function(feedback) {
    $scope.loading = true;
    Feedback.submitFeedback({
      firstname: feedback.firstname,
      lastname: feedback.lastname,
      email: feedback.email,
      address: feedback.address,
      noOfPersons: feedback.noOfPersons,
      namesOfRelatives: feedback.namesOfRelatives,
      participate: feedback.participate,
      sleepingWithUs: feedback.sleepingWithUs
    })
    .then(function(response) {
      $scope.loading = false;
      $scope.feedbackSent = true;
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  
  $scope.reload = function() {
    $state.reload();
  }
  
  $scope.name = 'FeedbackController';
  $scope.loading = false;
  $scope.feedbackSent = false;
  
  // $scope.data = {};
  // $scope.getFeedback = function() {
  //   Feedback.getFeedback()
  //     .then(function(response) {
  //       $scope.data.feedbackList = feedbackList;
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  // };

  // $scope.deleteFeedback = function(feedback) {
  //   Feedback.deleteFeedback(feedback)
  //   .then(function(response) {
  //       $state.reload();
  //   })
  //   .catch(function(error) {
  //       console.error(error);
  //   });
  // };

});