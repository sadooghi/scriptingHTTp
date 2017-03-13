var https = require('https');

function getAndPrintHTML (options) {

https.get(options, function (response) {

  response.setEncoding('utf8');
  var buff = [];

  response.on('data', function (data) {
    buff.push(data);
  });

  response.on('end', function() {
    console.log(buff.join(""));
    console.log('Response stream complete.');
  });

});
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
