const { default: mongoose } = require("mongoose");

const Userschema = new mongoose.Schema({
  Username:String,
  email:String,
  password:String
});

module.exports = mongoose.model('Users', Userschema);