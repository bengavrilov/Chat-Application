
var express = require('express');
var socket = require('socket.io');
var cors = require('cors');

var app = express();
app.use(cors());

var server = app.listen(3000, function() {
    console.log('listening to requests on port number 3000');
})

//const io = require('socket.io')(3000);
const io = socket(server);

io.on('connection', socket => {
    socket.on('client-send-message', array => {
        socket.broadcast.emit('other-client-message', array);
    })
})