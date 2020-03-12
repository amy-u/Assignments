const express = require('express');
const path = require('path');
const app = express();

const pgp = require("pg-promise")();
const db = pgp("postgres://tpl1219_11@localhost:5432/tracker");

const port = 3000

app.use(express.json());

// This is species db
app.get('/species', (req, res) => {
    db.any('SELECT * FROM species',)
    .then(function(data) {
        res.status(200).send(data);
        return data;
    })
});

app.put('/species', (req, res) => {
    return db.any('INSERT INTO species(name,scientific,number,status) VALUES($1,$2,$3,$4)', RETURNING name,scietific,number,status,[])
    .then(function(data) {
        res.status(200).send(data);
        return data;
    })
});

// This is individuals db
app.get('/individuals', (req, res) => {
    db.any('SELECT * FROM individuals', [true])
    .then(function(data) {
        res.status(200).send(data);
        console.log(data);
        return data;
    })
});


// This is sightings db
app.get('/sightings', (req, res) => {
    db.any('SELECT * FROM sightings', [true])
    .then(function(data) {
        res.status(200).send(data);
        return data;
    })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))