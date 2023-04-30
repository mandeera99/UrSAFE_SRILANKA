const express = require('express');
const router = express.Router();
const exmedController = require('../controllers/exmedController');

router.get('/expiring', exmedController.findExpiringMedicine);

module.exports = router;