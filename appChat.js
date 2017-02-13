var io = require("socket.io").listen(5000);

io.sockets.on("connection", function(socket){
	console.log("Connected...");
	socket.on("sendMsg", function(data){
		io.sockets.emit("updateMsg", data);
	});
});
