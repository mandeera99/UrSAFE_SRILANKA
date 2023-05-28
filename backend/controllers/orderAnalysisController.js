const Order = require('../models/orderModel')
const User = require('../models/userModels')
const mongoose = require('mongoose')

const getorderAnalysis = async (req, res) => {
    const { userId } = req.params;
    try {
      const monthlyIncome = await Order.find({ pharmacy: userId })
        .select('order_cost Date')
        .sort('Date')
        .lean();
  
      const monthlyCosts = {};
      monthlyIncome.forEach(order => {
        const month = order.Date.getMonth();
        if (!monthlyCosts[month]) {
          monthlyCosts[month] = {
            month,
            totalCost: order.order_cost,
          };
        } else {
          monthlyCosts[month].totalCost += order.order_cost;
        }
      });
  
      const result = Object.values(monthlyCosts).sort((a, b) => a.month - b.month);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
  
  

const getOrders = async (req, res) => {
    const { userId } = req.params;
  
    try {
  
      // Find the user's storemeds and sort by lot number
      const orders = await Order.find({ user: userId }).sort({ lot_no: 1 });
  
      res.status(200).json(orders)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }


module.exports = {
    getorderAnalysis,
    getOrders
}