const mysql = require('mysql');
const dotenv = require('dotenv');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3006,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'etrack_db'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log(`connected as ${connection.threadId}`)
});

connection.end();