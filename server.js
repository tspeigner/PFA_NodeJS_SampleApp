var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var ip = request.headers["X-Forwarded-For"] || request.connection.remoteAddress;
    response.end('Hello Portland from Puppet Pipelines. Your Node.js application is working!\n' + ip);
}).listen(80);

console.log('Server started');
