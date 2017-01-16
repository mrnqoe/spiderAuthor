var https = require('https');

function getHTML (options, callback) {
	var buf;
	var requestOptions = {
		host: options[0],
		path: options[1]
	};
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

function printHTML (html) {
  console.log(html);
}

var input = process.argv.slice(2);
getHTML(input, printHTML);
