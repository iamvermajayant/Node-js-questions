const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.send('I am the get request');
})

app.get('/manthan',(req,res) =>{
    res.send('I am from page manthan')
})

//This route is used to make any HTTP request whether get put delete 
app.all('/users', function(req, res, next){
    console.log('i am the app.all request');
    next();
})

app.listen(4000);