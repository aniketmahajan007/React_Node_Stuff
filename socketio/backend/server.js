const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: 'http://localhost:3000'
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('upload-chat',(msg, roomid) => {
        console.log('Payload: '+msg);
        socket.to(roomid).emit('download-chat',msg)
    });

});

httpServer.listen(8000);