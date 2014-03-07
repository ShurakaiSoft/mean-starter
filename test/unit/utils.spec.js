/**
 * Unit tests for utils module
 */

// dependencies
var should = require('should'),
	sinon = require('sinon');


// module under test
var utils = require('../../server/utils/utils');


describe("Utils:", function () {
	var options;
	this.timeout(50);	// milliseconds
	beforeEach(function () {
		options = {
			host: 'localhost',
			database: 'testdb'
		};
	});


	describe("create a mongo connect URL:", function () {
		it("should exist", function () {
			should.exist(utils.createMongoConnectUrl);
			utils.createMongoConnectUrl.should.be.a.Function;
		});
		it("should create a connect string with host and database", function () {
			utils.createMongoConnectUrl(options).should.equal('mongodb://localhost/testdb');
		});
		it("should return an empty string when host option is missing", function () {
			utils.createMongoConnectUrl({ port: 1234 }).should.equal('');

		});
		it("should return an empty string when no argument is given", function () {
			utils.createMongoConnectUrl().should.equal('');
		});
		it("should return an empty string when database option is missing", function () {
			utils.createMongoConnectUrl({ host: 'localhost' }).should.equal('');
		});
		it("should accept an optional port option", function () {
			options.port = 3000;
			utils.createMongoConnectUrl(options).should.equal('mongodb://localhost:3000/testdb');
		});
	});
});
