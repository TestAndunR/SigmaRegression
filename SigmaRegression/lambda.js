let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {
	// let subject = event.subject;
	// let body = event.body;
	console.log(event);
	// ses.sendEmail({
	// 	Destination: {
	// 		ToAddresses: ['andun@adroitlogic.com'],
	// 		// CcAddresses: [],
	// 		// BccAddresses: []
	// 	},
	// 	Message: {
	// 		Subject: {
	// 			Data: subject
	// 		},
	// 		Body: {
	// 			Text:{
	// 				Data: ""
	// 			}
	// 		}
	// 	},
	// 	Source: 'kannangarar1993@gmail.com',
	// }, function (err, data) {
	// 	if (err) console.log(err, err.stack); // an error occurred
	// 	else console.log(data);           // successful response
	// });


	callback(null, 'Successfully executed');
}