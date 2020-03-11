const my_event = require('./index.js');
//import {EventRecommender, User, Event} from 'index';
const path = require('path');

const express = require('express');

const app = express();



app.use(express.json());
app.use(express.static(path.join(__dirname + '/')));
const project = new my_event.EventRecommender;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//users Why is my list not displaying
app.get('/users', (req, res) => {
    //project.user is to go into eventrecommender to get users
    res.status(200).send(project.users);
});

app.post('/users', (req, res) => {
    console.log(req.body, "Hello"); // To check console if it is printing
    var info = {id: req.body.id, name: req.body.name};
    res.status(200).send(project.addUser(info));
});

app.put('/users'), (req,res) => {
    res.status(200).send(project.addUser(str,num));
}

app.delete('/users', (req, res) => {
    res.status(200).send(project.deleteUser);
});

// $("#add-user").submit(function() {
//     event.preventDefault();
//     let str = $("#add-user-name").val().toUpperCase();
//     let num = $("#add-user-id").val();
//     console.log();
    
//     if(str == "" || num == ""){
//         alert("Error! Missing name or id nubmer.");
//     } else{
//         // $("#all-users").html(`<dt>${str}</dt> <dd><strong>ID:</strong> ${num} <dd>`),
//         eventRecommender.addUser(num,str);
//         // $("#all-users").html(`<dt> ${eventRecommender.users}</dt>`);
//     };
// });

//Event This is crashing the server for some reason

// app.get('/users', (req, res) => {
//     //project.event is to go into eventrecommender to get event
//     res.status(200).send(project.events);
// });

// app.post('/submit-event-data', (req, res) => {
//     res.status(200).send();
// });

// app.put('/update-event-data'), (req,res) => {
//     res.status(200).send(project.addEvent(req.body.name));
// }

// app.delete('/delete-event-data', (req, res) => {
//     res.status(200).send(project.deleteEvent);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));