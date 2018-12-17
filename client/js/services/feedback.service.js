WeddingPlanner.factory('Feedback', function ($http) {
  var getFeedback = function() {
    return $http({
      method: 'GET',
      url: '/feedback/feedback'
    })
    .then(function(response) {
      return response;
    });
  };

  var submitFeedback = function(feedback) {
    return $http({
      method: 'POST',
      url: '/feedback/feedback',
      data: feedback
    })
    .then(function(response) {
      return response;
    });
  };

  var updateFeedback = function(feedback) {
    return $http({
      method: 'PUT',
      url: '/feedback/feedback',
      data: feedback
    })
    .then(function(response) {
      return response;
    });
  };

  var deleteFeedback = function(feedback) {
    return $http({
      method: 'POST',
      url: '/feedback/delete',
      data: feedback
    })
    .then(function(response) {
      return response;
    });
  };

  return {
    getFeedback: getFeedback,
    submitFeedback: submitFeedback,
    updateFeedback: updateFeedback,
    deleteFeedback: deleteFeedback
  };
});
