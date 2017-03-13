var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
   host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  console.log(requestOptions);

  https.get(requestOptions, function (error,response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received:', data, '\n');
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
}

getAndPrintHTMLChunks();

