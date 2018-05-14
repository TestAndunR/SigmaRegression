let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

	console.log(process.env)

	// You must always end/destroy the DB connection after it's used
	// rds.beginTransaction({
	// 	instanceIdentifier: 'andun123'
	// }, function (error, connection) {
	// 	if (error) { throw err; }
	// 	connection.end();

	// });
	ddb.query({
		TableName: 'TestDynamo',
		ExpressionAttributeValues: {':s':"song1"},
		KeyConditionExpression: 'Song = :s',
		FilterExpression: '',
	}, function (err, data) {
		if (err) {
			//handle error
			console.log("error");
		} else {
			//your logic goes here
			console.log("Success");
		}
	});





	callback(null, 'Successfully executed');
}