var http = require('http');
var getBalence = require('./modulethree');
http.createServer(function(req, res) {
	res.writeHead(200);
	res.write(getBalence.accBal());
	res.write(getBalence.money(100, 1000000));
	res.end();
}).listen(3000);
