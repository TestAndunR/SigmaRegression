let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {
	let para = event.para;
	let key = event.key;
	// let subject = event.subject;
	// let body = event.body;
	console.log(event);

	kinesis.putRecord({
		Data: para,
		PartitionKey: key,
		StreamName: 'Kinesis-data-resource'
	}).promise()
		.then(data => {
			// your logic goes here
			console.log(data);
		})
		.catch(err => {
			console.log(err);
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}