var https = require('https');

module.exports = function getHTML (options, callback) {
	var buf;
	switch(options[0]){
		case 'lowercase':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step6/lowercase.html'
			}
			break;
		case 'uppercase':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step6/uppercase.html'
			}
			break;
		case 'reverse':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step6/reverse.html'
			}
			break;
		case '1337':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step6/1337.html'
			}
			break;
		case '1':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step1.html'
			}
			break;
		case '2':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step2.html'
			}
			break;
		case '3':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step3.html'
			}
			break;
		case '4':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step4.html'
			}
			break;
		case '5':
			var requestOptions = {
				host: 'sytantris.github.io',
				path: '/http-examples/step5.html'
			}
			break;
		default:
			var requestOptions = {
				host: options[0],
				path: options[1]
			};
	}
	https.get(requestOptions, function(response){
		response.setEncoding('utf8');

	 // the callback is invoked when a `data` chunk is received
		response.on('data', function (data) {
			buf += data;
		});

		 // the callback is invoked when all of the data has been received
		 // (the `end` of the stream)
		response.on('end', function() {
			callback(buf);
			console.log('Response stream complete.');
		});
	});
}
