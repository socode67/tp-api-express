const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'facture',
    password: ''
})

module.exports = pool.promise();