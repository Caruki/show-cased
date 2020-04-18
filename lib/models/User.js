const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },

  email: {
    type: String,
    required: true,
    min: 6,
  },

  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },

  towatch: {
    type: Array,
  },

  watched: {
    type: Array,
  },
});

module.exports = mongoose.model('User', userSchema);
