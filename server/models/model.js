/**
 * Module for the model
 */

var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: String
});

var Model = mongoose.model('Model', schema, 'testData');


module.exports = {
	Model: Model
};