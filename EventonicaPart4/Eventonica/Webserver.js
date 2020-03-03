var http = require("http"); // load modules
var fs = require("fs"); // File system

var server = http.createServer(function(req, res) {
  console.log(`request was made:` + req.url); // checking the url in console
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    //fs.createReadStream("./index.html").pipe(res);
  }
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello this is Amy'); // ending the request
});

server.listen(3000);
console.log(`you are listening to port 3000`); // Making sure we are listiening to the port
