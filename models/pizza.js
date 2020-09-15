var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  nom : String,
  ingredients : [String],
  taille : String,
  prix : Number,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Todo', TodoSchema);