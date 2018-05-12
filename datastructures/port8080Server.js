var http = require('http');
var fs = require('fs');
var PORT=8080; 

//            Start Server code
fs.readFile('./file.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
    console.log("[+] Server started on port 8080");
});
//            End Server Code
