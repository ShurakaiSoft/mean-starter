/**
 * New node file
 */

// dependencies
var	mongoose = require('mongoose'),
	express = require('express'),


	config = require('./server/config/config');
	routes = require('./server/routes/index'),
	utils = require('./server/utils/utils');


// variables
var	server = express();

// setup connection to database
mongoose.connect(utils.createMongoConnectUrl(config.mongo), function (err, res) {
	if (err) {
		console.log("Error: failed to connect to database:", err);
	} else {
		console.log("Connected to MongoDB: ", config.mongo.database + "@" +
				config.mongo.host + ':' + config.mongo.port);
	}

	// config server
	server.set('port', process.env.PORT || config.port);
	server.set('views', __dirname + '/server/views');
	server.set('view engine', 'jade');

	// standard express middleware
	//server.use(express.favicon(__dirname + 'client/public/images/favicon.ico'));
	server.use(express.bodyParser());
	server.use(express.methodOverride());
	server.use(server.router);
	server.use(express.static(__dirname + '/client/public'));

	// load all routes
	routes.addAll(server);

	// start server
	server.listen(server.get('port'), function (err) {
		if (err) {
			console.log("Error:", err);
		} else {
			console.log("Server listening on:", server.get('port'));
		}
	});
});