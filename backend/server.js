// const express = require('express');
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/errrorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

// initilizations
const app = express();
dotenv.config();
app.use(cors());
connectDB();

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //acceptes only certain type

//routes
app.get('/', (req, res) => {
  res.send('server is running');
});

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(5000, console.log('app running in port 3000'));
