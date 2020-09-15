var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  nom : String,
  prenom : String,
  telephone : String,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('User', UserSchema);