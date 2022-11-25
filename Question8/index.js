const express = require('express');
const app = express();
const router = require('./routes/router');
require('./models/studentSchema');
require('dotenv').config();
require('./Config/db');
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use(router);

app.get('/', (req, res) => {
  res.send('Crud API mongo');
})

app.listen(3001);