//these approaches are the cleaner code approaches 
//u can initialize express app in two it's up to u but in modern world 
//u will see more often this kind of syntax so just don't get confused

const app = require('express')()
const server = require('http').createServer(app);

const io = require('socket.io')(server, { 
    cors : {
        origin : '*'
    }
});

io.on("connection" , (socket)=>{
    console.log("what is socket ", socket)
    console.log("socket is active running");


    socket.on("chat", (payload) => {
        console.log("what is payload", payload);
        io.emit("chat", payload);
    });
});


server.listen(5000, ()=>{
    console.log("listening")
})