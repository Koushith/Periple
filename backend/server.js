// const express = require('express');
import express from 'express';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('server is running');
});

app.use('/api/posts', postRoutes);

// custom middlewares
app.use(notFound);

app.use(errorHandler);

app.listen(5000, console.log('app running in port 3000'));
