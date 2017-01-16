var getHTML = require('./GetModule');

var input = process.argv.slice(2);

function printReverse(html) {
	html.split("").reverse;
	console.log(html);
}

getHTML(input, printReverse);
