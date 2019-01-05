WeddingPlanner.controller('AdminController', function ($scope, $location, $state, Feedback) {
    $scope.data = {};
    $scope.getFeedback = function() {
        Feedback.getFeedback()
        .then(function(response) {
            console.log("Response of getFeedback(): ", response.data.data);
            $scope.data.feedbackList = response.data.data;
        })
        .catch(function(error) {
            console.error(error);
        });
    };
    $scope.getFeedback();
    
    $scope.deleteFeedback = function(feedback) {
        Feedback.deleteFeedback(feedback)
        .then(function(response) {
            $state.reload();
        })
        .catch(function(error) {
            console.error(error);
        });
    };
});