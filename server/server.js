 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const shipsRoutes = require('./routes/ships.routes');
const errorMiddleware = require('./middleware/error.middleware');

 
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

 
app.use('/api/auth', authRoutes);
app.use('/api/ships', shipsRoutes);

 
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Maritime Dashboard API' });
});

 
app.use(errorMiddleware);

 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});