const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes'); 
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;