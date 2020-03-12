// const  = require('/App.js');
const path = require('path');

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname + '/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('', (req, res) => {
    res.status(200).send();
});