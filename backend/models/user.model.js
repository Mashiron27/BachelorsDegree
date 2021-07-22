const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  surname: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  },
  rights: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true,
});

const UsersDb = mongoose.connection.useDb('Users');
const User = UsersDb.model('User', userSchema);

module.exports = User;