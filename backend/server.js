// const express = require('express');
import express, { json } from 'express';
import connectDB from './config/db.js';
import JournalRoutes from './routes/journalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('server is running');
});

app.use(express.json());

app.use('/api/journal', JournalRoutes);

app.use('/api/users', userRoutes);

// custom middlewares
app.use(notFound);

app.use(errorHandler);

app.listen(5000, console.log('app running in port 3000'));
