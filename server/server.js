const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors=require('cors');
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
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('Please provide username, email, and password');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query1 = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const query2 = 'INSERT INTO bookings (username) VALUES (?)';

        // Start a transaction
        db.beginTransaction((err) => {
            if (err) {
                console.error('Transaction error:', err);
                return res.status(500).send('Transaction error');
            }

            // Insert into users table
            db.query(query1, [username, email, hashedPassword], (err, results) => {
                if (err) {
                    db.rollback(() => {
                        console.error('Error inserting user data:', err);
                        return res.status(500).send('Error inserting user data');
                    });
                } else {
                    // Insert into bookings table
                    db.query(query2, [username], (err, results) => {
                        if (err) {
                            db.rollback(() => {
                                console.error('Error inserting booking data:', err);
                                return res.status(500).send('Error inserting booking data');
                            });
                        } else {
                            // Commit the transaction
                            db.commit((err) => {
                                if (err) {
                                    db.rollback(() => {
                                        console.error('Error committing transaction:', err);
                                        return res.status(500).send('Error committing transaction');
                                    });
                                } else {
                                    res.status(201).send('User registered successfully');
                                }
                            });
                        }
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
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
    const { username, quantity } = req.body;

    // Update the user's table in MySQL with the booked rooms
    const dquery = 'UPDATE bookings SET deluxe_room_quantity = ? WHERE username = ?';

    db.query(dquery, [quantity, username], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'An error occurred while booking the room' });
        } else {
            res.json({ success: true, message: 'Room booked successfully' });
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
