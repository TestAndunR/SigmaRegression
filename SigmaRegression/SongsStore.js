let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	let Id = event.id;
	let song = event.song;
	let source = event.source;
	let artist = event.artist;
	console.log(Id,song,source,artist);
	ddb.put({
		TableName: 'TestDynamo',
		Item: {
			'Song': song,
			'Source': source,
			'Artist': artist,
			'Id': 'id2'
		}
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