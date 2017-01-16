var getHTML = require('./GetModule');

var input = process.argv.slice(2);

function printLowerCase (html) {
	console.log(html.toLowerCase());
}

getHTML(input, printLowerCase);
