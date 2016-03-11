/*jslint node: true */
'use strict';

var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(6969, function () {
    console.log('Server started and listening on 6969 hehe');   
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

io.on('connection', function(socket) {
   socket.on('msg', function(msg) {
      socket.broadcast.emit('msg', msg);
     
   });

    
});