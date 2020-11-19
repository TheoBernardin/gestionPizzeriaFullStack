var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  nom : String,
  description : String,
  prix : String,
});

module.exports = mongoose.model('Pizza', PizzaSchema);