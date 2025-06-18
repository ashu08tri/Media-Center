const express = require('express');
const router = express.Router();
const advertisement = require('../controllers/advertise.controller');
const { auth, isAdmin } = require('../middleware/auth');

router.post("/", advertisement.addAdvertisement);
router.get("/", auth, isAdmin, advertisement.getAdvertisements);
router.patch("/edit/:id", auth, isAdmin, advertisement.updateAdStatus);
router.delete("/delete/:id", auth, isAdmin, advertisement.deleteAd);

module.exports = router;