const express = require('express');
const db = require('./database/db')
const bodyParser = require('body-parser')
const cron = require('node-cron')
const cors = require('cors');

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// parse application/json
app.use(bodyParser.json())

//create user
app.post('/user', db.createUser)

app.get('/', (req, res) => {
    res.send('Hello this is a demo app')
})

var task = cron.schedule('* * * * *', () => {
    console.log('Every minute');
});

// task.start();

app.get('/users', db.getUsers)

const port = process.env.PORT || 4000

app.get('/users/:id', db.getUserById)

app.listen(port, () => {
    console.log("Server is running on 4000..");
});

