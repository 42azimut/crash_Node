const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });

connectDB();  // connectDB cluster0 연결실행! 

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('hi there');
})

app.listen(PORT, 
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)); 
