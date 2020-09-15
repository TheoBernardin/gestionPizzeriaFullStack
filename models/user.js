var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  nom : String,
  prenom : String,
  telephone : String,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Todo', TodoSchema);