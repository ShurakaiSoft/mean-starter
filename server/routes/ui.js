/**
 * Module for user interface routes
 */


function addAll(server) {
	server.get('/', function (req, res) {
		res.render('index', {});
	});
}


module.exports = {
	addAll: addAll
};