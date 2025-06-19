const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtube.controller');

// Public routes
router.get('/shorts', youtubeController.getYoutubeShorts);

module.exports = router; 