const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bio: { type: String, default: "" },
  location: { type: String, default: "" },
  avatar: { type: String, default: "" },
});

module.exports = mongoose.model('User', userSchema);