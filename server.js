var http = require('http');
var os = require('os');
var dns = require('dns');

var h = os.hostname();
console.log('UQDN: ' + h);

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
if (ip.substr(0, 7) == "::ffff:") {ip = ip.substr(7)};
    response.end('Hello Portland from Puppet Pipelines. Your Node.js application is working!\n' + `\n Your client IP ${ip} is.` + `\n And your hostname is ${h}.`);
    dns.lookup(h, { hints: dns.ADDRCONFIG }, function(err, ip) {
    console.log('IP: ' + ip);
    dns.lookupService(ip, 0, function (err, hostname, service) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('FQDN: ' + hostname);
        console.log('Service: ' + service);
    });
});
}).listen(80);

console.log('Server started');
