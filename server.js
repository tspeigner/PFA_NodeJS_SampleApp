var http = require('http');
var ip = req.headers["X-Forwarded-For"] || req.connection.remoteAddress;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Portland from Puppet Pipelines. Your Node.js application is working!\n' + ip);
}).listen(80);

console.log('Server started');
