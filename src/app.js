const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/feedback', feedbackRoutes);

module.exports = app;
