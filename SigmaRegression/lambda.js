let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

	console.log(process.env.PORT)

	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'andun123'
	}, function (error, connection) {
		if (error) { throw err; }
	});



	callback(null, 'Successfully executed');
}