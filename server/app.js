const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
const routes = require('./db/routes/index')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use('/api', routes)

app.use(cors())
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = app;

