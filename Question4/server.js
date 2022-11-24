const express = require('express');

// A middleware is a function that runs in between the time when server sends the request and the time when server respond to the request back
const app = express();

app.use(logger); //Global middleware runs everytime when we make request

//A middleware also depends on which order u are using it in your code

app.get('/', (req, res) => {
    res.send('HELLO FILE');
})

app.get('/users' , auth, (req, res) => {
    res.send("hello from users page");
    
})

function logger(req, res, next) {
    console.log('log')
    next();
}

function auth(req, res, next){
    if(req.query.admin === 'true'){
        next();
    }
    else{
        res.send('No Auth')
    }
    next();
}

const PORT = 4000;

app.listen(PORT)