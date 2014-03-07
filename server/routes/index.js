/**
 * Module to load routes.
 */

var model = require('../models/model'),
	api = require('./api'),
	ui = require('./ui');



function addAll(server) {
	ui.addAll(server);
	api.addAll(server, model.Model);
}


module.exports = {
	addAll: addAll
};
