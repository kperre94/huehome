require('dotenv').config();

const express = require('express');
const path = require('path');
const device = require('express-device');
const db = require('./controllers/database');
const huejay = require('huejay');
const app = express();

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "../client/dist/public/")));
app.use(express.json());
app.use(device.capture());
// ROUTES

app.get('/device', (req, res) => {
  res.send(`Hi ` + req.device.type.toUpperCase()+ `User`);
});

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Ready on port: ${process.env.PORT}`);
})