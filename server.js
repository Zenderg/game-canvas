const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set('port', 3000);
app.set('view engine', 'pug');
app.use(express.static('dist'));
app.use(express.json());

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'dist'));
});

app.get('/login', function(request, response) {
  response.render('login');
  // response.sendFile(path.join(__dirname, 'dist'));
});

server.listen(3000, function() {
  console.log('Starting server on port 3000');
});
