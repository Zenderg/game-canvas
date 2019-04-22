const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');


const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(require('./api'));

app.set('port', 3000);
app.set('view engine', 'pug');
app.use(express.static('dist'));
app.use(express.json());

server.listen(3000, function() {
  console.log('Starting server on port 3000');
});
