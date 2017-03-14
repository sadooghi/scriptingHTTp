var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  var result = html.toLowerCase();
  console.log(result);
}

getHTML(requestOptions, printLowerCase);