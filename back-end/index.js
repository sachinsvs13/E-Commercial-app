const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000


//middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}));


// routes
const mobileRoute = require('./src/mobile/mobileRoute.js');
app.use('/api/phones', mobileRoute);


async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send('Welcome to server')
  })
}

main().then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})