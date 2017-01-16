var https = require('https');
function getAndPrintHTML (options) {
	var buf;
  var requestOptions = {
    host: options[0],
    path: options[1]
  };

  https.get(requestOptions, function(response){
		response.setEncoding('utf8');
		var buf;

	 // the callback is invoked when a `data` chunk is received
		 response.on('data', function (data) {
				buf += data;
			 console.log('Buffered data:', buf);
		 });

		 // the callback is invoked when all of the data has been received
		 // (the `end` of the stream)
		 response.on('end', function() {
			 console.log('Response stream complete.');
		 });
	});
}

var input = process.argv.slice(2);
getAndPrintHTML(input);
