var getHTML = require('./GetModule');

var input = process.argv.slice(2);

function print1337(html) {
	html.split("");
	var arr = []
	for (var i in html){
		var skip = 0;
		switch(html[i]){
			case 'a' :
				arr.push('4');
				break;
			case 'e' :
				arr.push('3');
				break;
			case 'l' :
				arr.push('1');
				break;
			case 'o' :
				arr.push('0');
				break;
			case 's' :
				arr.push('5');
				break;
			case 't' :
				arr.push('7');
				break;
			case 'c':
				if(html[i+1]=='k'){
					arr.push('x');
					skip = 1;
				}
				break;
			case'e' :
				if(html[i+1]=='r'){
					arr.push('0r');
					skip = 1;
				}
				break;
			case 'you' :
				if(html[i+1]=='o'&&html[i+2]=='u'){
					arr.push('j00');
					skip = 2;
				}
				break;
			default:
				arr.push(html[i]);
		}
		i += skip;
	};
	console.log(arr.join(""));
}

getHTML(input, print1337);
