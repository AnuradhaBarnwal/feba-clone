const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'rootuser2345',
    database: 'feba_clone',
    host: 'localhost',
    port: 5432
});

const createUser = (request, response) => {
    console.log(request.body)
    const { name, date, email } = request.body
    pool.query('INSERT INTO person (name, date, email) VALUES ($1, $2, $3)', [name, date, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('User added')
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM person ORDER BY person_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        for (const data of results.rows) {
            var tableDate = data.date.split('/')
            var today = new Date()
            // console.log(today.getMonth() + 1)
            if (tableDate[1] == today.getMonth() + 1 && tableDate[0] == today.getDate()) {
                // console.log("Month matched")

                console.log("dshf mtched")

            }
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM person WHERE person_id = $1', [id], (error, results) => {
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