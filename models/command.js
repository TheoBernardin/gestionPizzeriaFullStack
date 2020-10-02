var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommandSchema = new Schema({
  client : UserSchema,
  pizza : [PizzaSchema],
  prix : Number,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Command', CommandSchema);