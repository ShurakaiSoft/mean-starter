/**
* Unit tests for utils module
*/

// dependencies
var mongoose = require('mongoose'),
	should = require('should'),
	sinon = require('sinon');


// modules under test
var config = require('../../server/config/config'),
	utils = require('../../server/utils/utils');


describe("Initialisation", function () {

	this.timeout(50);	// milliseconds
	before(function () {
		;
	});

	after(function () {
		;
	});

	beforeEach(function () {
		;
	});

	afterEach(function () {
		;
	});

	describe("Use config options to connect to a mongo database", function () {
		it("should exist", function (done) {

			should.exist(unit);
			done();
		});
		it("should ");
	});
});