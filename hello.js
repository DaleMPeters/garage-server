var http = require('http');

var sleep = require('sleep');

var exec = require('child_process').exec;
var cmd_start = ['gpio mode 7 out', 'gpio write 7 0'];
var cmd_end = 'gpio write 7 1';

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type":"text/plain"});
	cmd_start.forEach(function(item, index){
		exec(item);
	});
	sleep(3.5);
	exec(cmd_end);
	response.end("Hellow World\n");
});

server.listen(8000);

console.log("Server running");
