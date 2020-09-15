require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const jwt = require('express-jwt');
// const auth = jwt({ secret: process.env.JWT_SECRET })

const { host, username } = require('../config');
const hueUrl = `${host}/api/${username}`;

const app = express();
// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist/public/")));

// ROUTES
app.post('/signup', require('./controllers/postSignup'));
app.post('/signin', require('./controllers/postSignin'));

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

app.post(`/lights/:id`, async (req, res) => {
  try {
    let options = req.body;
    let id = req.params.id
    let response = await axios.put(`${hueUrl}/lights/${id}/state`, options);
    res.json(response.data)
  } catch (e) { console.error(e) };
})

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Ready on port: ${process.env.PORT}`);
})