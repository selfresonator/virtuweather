var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
  city: String,
  default: ''
});

module.exports = mongoose.model('city', CitySchema);
