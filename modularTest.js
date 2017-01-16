var getHTML = require('./HTMLprintAndget');

var input = process.argv.slice(2);

function printHTML (html) {
  console.log(html);
}

getHTML(input, printHTML);
