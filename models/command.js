var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommandSchema = new Schema({
  client : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  pizza : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pizza'
  }],

  prix : Number,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Command', CommandSchema);