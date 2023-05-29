const Orders = require("../models/ordermodel")

const express = require('express');
const router = express.Router();

router.get('/getOrderCostByMonth', async (req, res) => {
    const currentMonth = new Date.getFullMonth();
    const oldestMonth = new currentMonth -4;
  // get data from the last 4 months
  
    try {
      const countValues = await Orders.aggregate([
        { $match: {month: {$gte: oldestMonth,$lte: currentMonth}}},
        {$group: {_id:  "$month", countValue: { $sum: "$order_cost" } } },
        { $sort:  { _id: 1 } } // sort by year and month in ascending order
      ]);
  
      res.json(countValues);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;