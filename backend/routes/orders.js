

const express = require('express');
const router = express.Router();
const { getOrderCostByMonth } = require('../controllers/orderController');
router.get('/getOrderCostByMonth',getOrderCostByMonth);
  
module.exports = router;