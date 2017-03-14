var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var result = html.toUpperCase();
  console.log(result);
}

getHTML(requestOptions, printUpperCase);