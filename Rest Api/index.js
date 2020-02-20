// Pair partner Nasreen
// Resource 
// https://www.youtube.com/watch?v=pKd0Rpw7O48


const express = require('express');
const app =express();
const lists = new Map();

listsArray = [["staff"],
["cohort-h1-2020"]];

app.get('/', (req, res) => {
    res.send('Hello World!!!');

});

app.get('/lists', (req, res) => {
    const listsArray = Array.from(lists.keys());
    res.send(listsArray);
  });

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}...`));