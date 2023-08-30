const express = require('express');
const router = express.Router();
const db = require('./db'); 

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const username = email.substring(0, email.indexOf("@"));
  try {
    const query = `INSERT INTO Users (Email, Password, Username) VALUES (@param0, @param1, @param2)`;
    const result = await db.executeQuery(query, [email, password, username]);
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
