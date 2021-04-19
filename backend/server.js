// const express = require('express');
import express from 'express';
import postRoutes from './routes/postRoutes.js';

const app = express();

app.get('/', (req, res) => {
  res.send('server is running');
});

app.use('/api/posts', postRoutes);

// app.get('/api/posts/:id', postRoutes);

app.listen(5000, console.log('app running in port 3000'));
