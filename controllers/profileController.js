const Profile = require('../models/Profile');

// Get user profile
exports.getProfile = async(req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.userData.userId });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update user profile
exports.updateProfile = async(req, res) => {
    try {
        const { bio, location } = req.body;
        const updatedProfile = await Profile.findOneAndUpdate({ userId: req.userData.userId }, { bio, location }, { new: true, upsert: true });
        res.status(200).json(updatedProfile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};