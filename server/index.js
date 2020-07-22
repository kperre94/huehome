require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const db = require('./controllers/database');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "../client/dist/public/")));
app.use(express.json());
// ROUTES

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Ready on port: ${process.env.PORT}`);
})