const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }))
const Mydata = require("./models/mydataSchema")
app.set('view engine', 'ejs')
app.use(express.static('public'))



// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});





app.get('/', (req, res) => {
  //array of objects
  res.render("index", { })


})


app.get('/user/add.html', (req, res) => {
  res.render("user/add")
});


app.get('/user/view.html', (req, res) => {
  res.render("user/view")
});

app.get('/user/edit.html', (req, res) => {
  res.render("user/edit")
});



mongoose.connect("mongodb+srv://osamatalal744:o123@cluster0.d2wvcro.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    });
  })
  .catch((err) => { console.log(err) 
    
  });
