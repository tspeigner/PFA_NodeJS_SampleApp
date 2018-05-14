var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Puppet Forecast Call from Puppet Pipelines. Yourr Node.js application is working!\n');
}).listen(80);

console.log('Server started');
