const express = require('express');
const db = require('./database/db')
const bodyParser = require('body-parser')
const cron = require('node-cron')
const cors = require('cors');
// var cronJob = require('cron').CronJob


var app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//create user
app.post('/user', db.createUser)

app.get('/', (req, res) => {
   

    res.send('Hello this is a demo app')
})

cron.schedule('5 8 * * *', () => {
    console.log("Cron job running")
    db.getUsers()
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

// task.start();


const port = process.env.PORT || 4000

app.get('/users/:id', db.getUserById)

app.listen(port, () => {
    console.log("Server is running on 4000..");
});

