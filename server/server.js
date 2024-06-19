const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors=require('cors');
const axios = require('axios');
const app = express();
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


const port = 8000;

// Middleware
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SriMysql45#',
    database: 'server'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Signup route

const ZeroBounceApiKey = 'e55158c2ee6946c3b253950455b965eb'; 

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('Please provide username, email, and password');
    }

 
    try {
        const response = await axios.get(`https://api.zerobounce.net/v2/validate`, {
            params: {
                api_key: ZeroBounceApiKey,
                email: email,
                ip_address: '', 
            }
        });

        console.log('ZeroBounce API Response:', response.data);

        if (response.data.status === 'valid') {
           
            const hashedPassword = await bcrypt.hash(password, 10);
            const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            db.query(query, [username, email, hashedPassword], (err, results) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return res.status(500).send('Server error');
                }
                res.status(201).send('User registered successfully');
            });
        } else {
            
            return res.status(400).send('Invalid email address');
        }
    } catch (error) {
        console.error('Error validating email:', error);
        res.status(500).send('Server error');
    }
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Please provide email and password');
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).send('Server error');
        }

        if (results.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        res.send({ message: 'Login successful', user });
    });
});


app.post('/deluxe-room', (req, res) => {
    const { username, quantity,date } = req.body;

    // Update the user's table in MySQL with the booked rooms
    const dquery = 'INSERT INTO bookings (username, deluxe_room_quantity, deluxe_room_booked_time) VALUES (?, ?, ?)';

    db.query(dquery, [username ,quantity,date], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'An error occurred while booking the room' });
        } else {
            res.json({ success: true, message: 'Room booked successfully' });
        }
    });
});


app.post('/standard-room', (req, res) => {
    const { username, quantity,date } = req.body;

    // Update the user's table in MySQL with the booked rooms
    const squery = 'INSERT INTO bookings (username, standard_room_quantity, standard_room_booked_time) VALUES (?, ?, ?)';

    db.query(squery, [username ,quantity,date], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'An error occurred while booking the room' });
        } else {
            res.json({ success: true, message: 'Room booked successfully' });
        }
    });
});


app.post('/contact-us', (req, res) => {
    const { name, email, phone, comments } = req.body;
  
    const insertQuery = 'INSERT INTO contacts (name, email, phone, comments) VALUES (?, ?, ?, ?)';
    db.query(insertQuery, [name, email, phone, comments], (err, results, fields) => {
      if (err) {
        console.error('Error inserting data:', err.stack);
        return res.status(500).send('Failed to submit form data');
      }
      res.status(200).send('Form data submitted successfully');
    });
  });
// Server endpoint to retrieve booking history for a user
app.post('/booking-history', (req, res) => {
    const { username } = req.body;

    // Query the database to fetch booking history for the specified username
    const query = 'SELECT * FROM bookings WHERE username = ?';
    db.query(query, [username], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'An error occurred while fetching booking history' });
        } else {
            res.json({ success: true, bookingHistory: results });
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
