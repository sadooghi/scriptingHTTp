var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');
  var buff = [];
  response.on('data', function (data) {
    buff.push(data);
    console.log('Data Recived:', buff);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
}

getAndPrintHTML();

