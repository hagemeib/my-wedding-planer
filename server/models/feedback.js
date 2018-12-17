var mongoose = require('mongoose');

var feedbackScheema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    noOfPersons: Number,
    namesOfRelatives: String,
    participate: Boolean,
    sleepingWithUs: Boolean
});

module.exports = mongoose.model('Feedback', feedbackScheema);