const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const profileController = require("../controllers/profileController");

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get("/profile:/:id", profileController.getProfile);
router.put("/profile:/:id", profileController.updateProfile);

module.exports = router;