const mysql = require('mysql');
require('dotenv').config();
console.log(`USER: ${process.env.DB_USER}`)
console.log(`HOST: ${process.env.DB_HOST}`)
console.log(`PASSWORD: ${process.env.DB_PASS}`)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,

    port: 3306,

    user: process.env.DB_USER,

    password: process.env.DB_PASS,
    database: 'etrack_db'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log(`connected as ${connection.threadId}`)
});



module.exports = connection
