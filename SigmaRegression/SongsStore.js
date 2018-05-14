let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	let song = event.song;
	let source = event.source;
	let artist = event.artist;

	ddb.put({
		TableName: 'TestDynamo',
		Item: { 'Song': 'song', 'Source': 'source', 'Artist': 'artist' }
	}, function (err, data) {
		if (err) {
			console.log(err);
			//handle error
		} else {
			//your logic goes here
			console.log(data)
		}
	});



	callback(null, 'Successfully executed');
}