var http = require('http');
var dt = require('././app.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
// const konek = require('./app.js');

const coba = document.getElementById('masuksini');
coba.innerHTML= data;