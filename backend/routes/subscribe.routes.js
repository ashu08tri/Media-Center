const express = require('express');
const router = express.Router();
const subscription = require('../controllers/subscription.controller');
const { auth, isAdmin } = require('../middleware/auth');

router.post('/subscribe', subscription.subscribe);
router.get('/subscribers', auth, isAdmin, subscription.allSubs);
router.put('/subscriber/edit/:id', auth, isAdmin, subscription.editSubs);
router.delete('/subscriber/delete/:id', auth, isAdmin, subscription.deleteSubs);

module.exports = router;