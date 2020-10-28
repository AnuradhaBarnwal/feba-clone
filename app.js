const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

var app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('This is a new app')
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("App is runnig")
})