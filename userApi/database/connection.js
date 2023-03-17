const dotenv = require('dotenv')
dotenv.config()


const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : process.env.PG_HOST,
    port : 5432,
    user : 'postgres',
    password : process.env.PG_PASS,
    database : 'user'
  }
});

module.exports = knex