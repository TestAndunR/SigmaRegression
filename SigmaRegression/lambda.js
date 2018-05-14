let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {
	
	let r = event.radius;

	let area = pi*r*r;

	console.log(area);

	callback(null, 'Successfully executed');
}