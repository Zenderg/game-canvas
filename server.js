const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.send('server');
});

io.on('connection', function (socket){
  console.log('connection');

  socket.on('CH01', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
  });

});

http.listen(3000, function () {
  console.log('listening on *:3000');
});