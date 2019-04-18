const io = require('socket.io-client'),
    socket = io.connect('localhost', {
      port: 1337
    });
socket.on('connect', function () { console.log("socket connected"); });
socket.emit('private message', { user: 'me', msg: 'whazzzup?' });