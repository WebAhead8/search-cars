const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connectionString =process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString });
db.query("SELECT * FROM employes").then((result) => console.log("result"));

module.exports = db;