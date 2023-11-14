const express = require('express');
const authRoutes = require('./authRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});

app.use('/auth', authRoutes);
app.use('/', authRoutes);

// This should be your last middleware
app.all('*', (req, res) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
