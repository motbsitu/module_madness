//apps file
var http = require('http');
var converted = require('./modulethree');


http.createServer(function(req, res){
  res.writeHead(200);
  //res.write('Test ');
  res.write(converted.output());
  res.write(converted.newNumber());

  res.end();

}).listen(3000);
