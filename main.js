let http = require('http');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    response.write('teste');
    response.end();

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');