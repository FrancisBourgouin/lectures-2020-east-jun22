const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require('pg')
const generateHelpers = require('./helpers')
require("dotenv").config();

const client = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
})

const { fetchAllBottles, fetchSpecificBottle } = generateHelpers(client)
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/bottles", (req, res) => {
  fetchAllBottles()
    .then(dbRes => res.json(dbRes.rows))
    .catch(err => res.send('infinite sadness again'))
})

app.get("/bottles/:bottle_id", (req, res) => {
  const bottleId = req.params.bottle_id

  fetchSpecificBottle(bottleId)
    .then(dbRes => {
      if (dbRes.rows.length) {
        res.json(dbRes.rows[0])
      } else {
        res.send("Infinite sadness ocurred.")
      }
    })
    .catch(err => {
      console.log(err)
      res.send("Infinite sadness ocurred.")
    })
})

client.connect(() => {
  app.listen(port, () => {
    console.log('server is ready')
  })
})