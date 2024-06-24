const axios = require('axios');
const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


function handleDisconnect() {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); 
        } else {
            console.log('Connected to MySQL database');
            connection.release();
        }
    });
}

handleDisconnect();

function fetchUsers(offset, limit) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT id, username, email, password
            FROM users
            LIMIT ?, ?
        `;
        pool.query(query, [offset, limit], (err, results) => {
            if (err) {
                console.error('Error fetching users:', err);
                return reject(err);
            }
            resolve(results);
        });
    });
}

const api_key = process.env.ZEROBOUNCE_API_KEY;
const api_url = 'https://bulkapi.zerobounce.net/v2/validatebatch';


let apiCallCount = 0;
const maxApiCalls = 5;
const apiCallInterval = 2 * 60 * 1000; // 2min in milliseconds
let lastApiCallTime = Date.now();


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
