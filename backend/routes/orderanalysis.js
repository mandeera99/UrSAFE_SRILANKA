const Orders = require("../models/orderModel")
const User = require("../models/userModels")
const {getorderAnalysis, getOrders} = require("../controllers/orderAnalysisController");
const express = require('express');
const router = express.Router();



router.get('/getMonthlyIncome/:userId', getorderAnalysis);
router.get('/getOrd/:userId',getOrders);

  module.exports = router;