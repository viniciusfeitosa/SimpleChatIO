var express = require('express'),
		app = express(),
		port = 3000,
		server = require('http').createServer(app),
		io = require('socket.io').listen(server);
		
server.listen(port);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});;