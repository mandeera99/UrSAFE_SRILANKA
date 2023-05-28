const express = require('express');
const router = express.Router();

const { getOrder, updateOrderToPaid, createOrder,getOrders,updateOrderItemCount,getOrderCostByMonth  } = require('../controllers/orderController');

//user Routes
router.post("/", createOrder);
router.put("/paid/:id", updateOrderToPaid);
router.get("/",getOrders)
router.get("/user/:id",getOrder)
router.put("/paid/:id", updateOrderToPaid);
router.put('/orders/:orderId/items/:itemId', updateOrderItemCount);
router.get('/getOrderCostByMonth',getOrderCostByMonth);
  
module.exports = router;

module.exports = router