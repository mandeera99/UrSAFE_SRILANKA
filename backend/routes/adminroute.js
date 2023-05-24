const express = require('express');
const router = express.Router();
const userController = require('../controllers/admincontroller');

router.get('/getusercount', userController.getUserCount);

module.exports = router;
