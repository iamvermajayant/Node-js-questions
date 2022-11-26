const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/myget', (req, res) => {
    res.send(req.body);
})

app.post('/mypost', (req, res) => {
    res.send(req.body);
})

app.get('/postForm', (req, res) => {
    res.render('postForm');
})

app.get('/getForm' , (req, res)=>{
    res.render('getForm');
})

app.listen(3001);