const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const username = email.substring(0, email.indexOf("@"));
  const hashedPassword = await bcrypt.hash(password, 10);  // Hashing the password
  try {
    const query = `INSERT INTO Users (Email, Password, Username) VALUES (@param0, @param1, @param2)`;
    const result = await db.executeQuery(query, [email, hashedPassword, username]);  // Saving the hashed password
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `SELECT * FROM Users WHERE Email = @param0`;
    const users = await db.executeQuery(query, [email]);

    if (users.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    
    const user = users[0];
    
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    
    // Create a token
    const token = jwt.sign({ userId: user.Id }, 'your_secret_key', { expiresIn: '1h' });
    
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
