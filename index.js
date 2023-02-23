const express = require('express');
const dataMember = require('./members.js');
const dataUsers = require('./users.js');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  res.send('This Is the Home Page');
});

app.get('/about', (req, res) => {
  res.json({
    status: 'success',
    message: 'response success',
    description: 'Exercise #03',
    date: moment().format(),
    data: dataMember,
  });
});

app.get('/users', (req, res) => {
  res.json(dataUsers);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});