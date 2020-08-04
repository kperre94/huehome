require('dotenv').config();

const express = require('express');
const path = require('path');
const db = require('./controllers/database');
const cors = require('cors');
const axios = require('axios');

const host = "http://192.168.86.73";
const username = "kTbxhpG9ZObv7b7ZTJ7Ytu0dCro6cZuey88an1y5";
const hueUrl = `${host}/api/${username}`;

const app = express();
// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist/public/")));

// ROUTES
app.get('/lights', async (req, res) => {
  try {
    let lights = await axios.get(`${hueUrl}/lights`)
    res.json(lights.data);
  } catch (e) { console.log(e) };
})
app.get(`/lights/:id`, async (req, res) => {
  try {
    console.log(req.params)
    let id = req.params.id;
    let response = await axios.get(`${hueUrl}/lights/${id}`);
    res.json(response.data)
  } catch (e) { console.error(e) };
})


// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Ready on port: ${process.env.PORT}`);
})