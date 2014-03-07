/**
 * Module for a RESTful API
 */

function addAll(server, Model) {
	// add api routes here
	server.get('/api/hello', function (req, res) {
		console.log("/api/hello");
		res.json({ msg: 'hello world' });
	});


	server.get('/api/dbtest', function (req, res) {
		console.log("/api/dbTest");
		Model.find({ name: "mongo" }, function (err, docs) {
			console.log("find:", err, docs);
			if (err) {
				res.json(err);
			} else {
				res.json(docs[0]);
			}
		});
	});
}


module.exports = {
	addAll: addAll
};