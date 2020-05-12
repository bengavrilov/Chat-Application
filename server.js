
var express = require('express');
var socket = require('socket.io');
var http = require('http');

const PORT = process.env.PORT || 5000;

var app = express();
var server = http.createServer(app);

//const io = require('socket.io')(3000);
const io = socket(server);

server.listen(PORT, () => console.log('Server has started on port'));

io.on('connection', socket => {
    socket.on('client-send-message', array => {
        socket.broadcast.emit('other-client-message', array);
    })
})