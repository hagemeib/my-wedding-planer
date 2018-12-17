var Feedback = require('./models/feedback');
var mongoose = require('mongoose');

exports.submitFeedback = function(req, res) {
  const feedback = req.body;

  var newFeedback = new Feedback(feedback);
  newFeedback.save(function (err) {
    if (err) {
      return res.json({
        success: false
      });
    }
    return res.json({
      success: true, 
      data: newFeedback
    });
  });

};

exports.getFeedback = function(req, res) {
  Feedback.find({}, function(err, feedbackList) {
    if (err) {
      return res.json({
        success: false
      });
    }
    return res.json({
      success: true,
      data: feedbackList
    });
  });
};

exports.updateFeedback = function(req, res) {
    const id = req.body._id;
    const feedback = Object.assign({}, req.body);

    Feedback.findByIdAndUpdate(id, feedback, function(err, updatedFeedback) {
      if (err) {
        return res.json({
          success: false
        });
      }
      return res.json({
        success: true,
        data: updatedFeedback
      });
    });
};

exports.deleteFeedback = function(req, res) {
  const id = req.body._id;

  Feedback.findByIdAndRemove(id, function(err, deletedFeedback) {
    if (err) {
      return res.json({
        success: false
      });
    }
    return res.json({
      success: true
    });
  });
};
