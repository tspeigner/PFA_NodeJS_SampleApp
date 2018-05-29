var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
if (ip.substr(0, 7) == "::ffff:") {ip = ip.substr(7)};
    response.end('Hello Portland from Puppet Pipelines. Your Node.js application is working!\n' + `\n Your client IP ${ip} is.`);
}).listen(80);

console.log('Server started');
