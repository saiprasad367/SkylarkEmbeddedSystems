const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');

router.post('/send', mailController.sendContactEmail);

module.exports = router;
