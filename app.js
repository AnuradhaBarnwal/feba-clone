const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

var app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('This is a new app')
})

app.listen(4000, () => {
    console.log("App is runnig")
})