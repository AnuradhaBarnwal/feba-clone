const express = require('express');
const db = require('./database/db')
const checkEmail = require('./email/mailer')
const bodyParser = require('body-parser')
const cron = require('node-cron')
const cors = require('cors');
const mailer = require('./email/mailer')


var app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/email', checkEmail)
//create user
app.post('/user', db.createUser)

app.get('/', (req, res) => {
    mailer('Krishna Jha', 'krishnajharediff@gmail.com')

    res.send('Hello this is a demo app')
})

var task = cron.schedule('* * * * *', () => {
    db.getUserById()
});

// task.start();

app.get('/users', db.getUsers)

const port = process.env.PORT || 4000

app.get('/users/:id', db.getUserById)

app.listen(port, () => {
    console.log("Server is running on 4000..");
});

