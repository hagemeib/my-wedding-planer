const router = require('express').Router();
const feedbackHandler = require('../feedback-handler.js');
var api = require('./api')();

module.exports = function(passport) {

    router.get('/feedback',
        passport.authenticate('jwt', { session: false }),
        api.isUserAllowed,
        feedbackHandler.getFeedback);

    router.post('/feedback', 
        passport.authenticate('jwt', { session: false }),
        api.isUserAllowed,
        feedbackHandler.submitFeedback);

    router.put('/feedback',
        passport.authenticate('jwt', { session: false }),
        api.isUserAllowed,
        feedbackHandler.updateFeedback);

    router.post('/delete',
        passport.authenticate('jwt', { session: false }),
        api.isUserAllowed,
        feedbackHandler.deleteFeedback);

    return router;
}
