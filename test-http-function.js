
var getHTML = require('./getHTML');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
function printHTML (html) {
  html.setEncoding('utf8');
  var buff = [];

  html.on('data', function (data) {
    buff.push(data);
  });

  html.on('end', function() {
     console.log('Data Recived:', buff.join(""));
    console.log('Response stream complete.');
  });
}

getHTML(requestOptions, printHTML);