var getHTML = require('./GetModule');

var input = process.argv.slice(2);

function printUpperCase (html) {
	console.log(html.toUpperCase());
}

getHTML(input, printUpperCase);
