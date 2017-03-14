var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
  var arrayHtml = html.split(" ");
  var reverseArray = arrayHtml.reverse();
  var result = arrayHtml.join(" ")
  console.log(result);
}

getHTML(requestOptions, printReverse);