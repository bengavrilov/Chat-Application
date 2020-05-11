const io = require('socket.io')(3000);

io.on('connection', socket => {
    socket.on('client-send-message', array => {
        socket.broadcast.emit('other-client-message', array);
    })
})