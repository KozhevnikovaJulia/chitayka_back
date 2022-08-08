const { Schema, model } = require('mongoose');

const schema = new Schema({
  word: String,
  level: String,
  img: String,
  read: Boolean,
});

module.exports = model('Picture', schema);




