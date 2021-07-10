const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: 'http://localhost:3000'
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('chat',(payload) => {
        console.log('Payload: '+payload);
        socket.to('Y1rFDIt3n7rROMOfAACE').emit('server-chat',payload)
    });

});

httpServer.listen(8000);