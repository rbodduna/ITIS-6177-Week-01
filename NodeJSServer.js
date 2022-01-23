var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
    // set response content    
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();

});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')