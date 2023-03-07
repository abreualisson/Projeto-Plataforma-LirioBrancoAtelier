const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '85459210',
        database: 'liriobranco'
    }

})

module.exports = knex