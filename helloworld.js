var http = require('http');
var dt=require('./TimeModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The curret date and time"+dt.myDateTime());
    res.end();
}).listen(8080);