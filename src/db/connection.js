const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()

let connectionString
if (process.env.NODE_ENV == 'production') {
  connectionString = process.env.PRODUCTION_DATABASE_URL
} else {
  connectionString = process.env.DATABASE_URL
}

const db = new pg.Pool({ connectionString })
db.query('SELECT * FROM employes').then(result => console.log('result'))

module.exports = db
