const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root: __dirname})
})


mongoose.connect("mongodb+srv://osamatalal744:o123@cluster0.d2wvcro.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  });
})
.catch((err) => {console.log(err)});
