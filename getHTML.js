var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, callback);
};

// function printHTML (html) {
//   html.setEncoding('utf8');
//   var buff = [];

//   html.on('data', function (data) {
//     buff.push(data);
//   });

//   html.on('end', function() {
//      console.log('Data Recived:', buff.join(""));
//     console.log('Response stream complete.');
//   });
// }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

