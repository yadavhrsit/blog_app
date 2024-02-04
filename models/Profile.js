const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, default: '' },
    location: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);