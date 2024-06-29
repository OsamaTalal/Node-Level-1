const mongoose = require('mongoose');
const Schema = mongoose.Schema;
















// define the Schema (the structure of the article)
const articleSchema = new Schema({
    userNameee: String
  });
  



  const Mydata = mongoose.model('Mydataa', articleSchema);


  module.exports = Mydata;

