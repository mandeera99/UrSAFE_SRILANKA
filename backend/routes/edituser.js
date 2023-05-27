const express = require('express');
const router = express.Router();
const usereditController = require('../controllers/usereditController');

router.put('/editinguser/:id', usereditController.UpdateUser);
router.get('/profileofuser/:userId',usereditController.getUser);

module.exports = router;