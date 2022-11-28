const express = require('express');
const app = express();
const path = require('path');

// app.set('view engine', 'ejs');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'))
})


io.on('connection', socket => {
    console.log('A user Connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })

    socket.on('message', msg=>{
        console.log(msg);
    })
})


http.listen(4000, ()=>{
    console.log('listening on 4000...');
});