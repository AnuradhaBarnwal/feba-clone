const Pool = require('pg').Pool;
const mailer = require('../email/mailer')
require('dotenv').config()


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

const createUser = (request, response) => {

    const { name, date, email } = request.body
    console.log(request.body)
    pool.query('INSERT INTO users (email, name, dob) VALUES ($1, $2, $3)', [email, name, date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('User added')
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY person_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        for (const data of results.rows) {
            var tableDate = data.dob.split('/')
            var today = new Date()
            // console.log(today.getMonth() + 1)
            if (tableDate[1] == today.getMonth() + 1 && tableDate[0] == today.getDate()) {
                console.log("Month matched")
                console.log(data.name, data.email)
                mailer(data.name, data.email)

            }
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE person_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    createUser,
    getUserById,
    getUsers
};