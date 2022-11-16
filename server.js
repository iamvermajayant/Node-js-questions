const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    res.send(`UserName : ${username}, Password : ${password})`);
})

const port = 5000;

app.listen(port, () => {
console.log(`running on port : ${port}`);
})
