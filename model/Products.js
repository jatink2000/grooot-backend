const { default: mongoose } = require("mongoose");

const productschema = new mongoose.Schema({
  Username:String,
  email:String,
  password:String
});

module.exports = mongoose.model('Products', productschema);