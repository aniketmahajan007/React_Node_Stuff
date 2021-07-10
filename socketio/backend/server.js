const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: 'http://localhost:3000'
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('upload-chat',(payload) => {
        console.log('Payload: '+payload);
        socket.broadcast.emit('download-chat',payload)
    });

});

httpServer.listen(8000);