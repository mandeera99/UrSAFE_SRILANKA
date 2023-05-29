const Order = require("../models/orderModel");
const Medicine = require("../models/medicinemodel");
const ObjectId = require("mongodb").ObjectId;

const getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: ObjectId(req.user._id) });
        res.send(orders);
    } catch (error) {
        next(error)
    }
}

const getOrderCostByMonth = async (req,res) => {

    const currentMonth = new Date.getFullMonth();
    const oldestMonth = new currentMonth -4;
  // get data from the last 4 months
  
    try {
      const countValues = await Order.aggregate([
        { $match: {month: {$gte: oldestMonth,$lte: currentMonth}}},
        {$group: {_id:  "$month", countValue: { $sum: "$order_cost" } } },
        { $sort:  { _id: 1 } } // sort by year and month in ascending order
      ]);
  
      res.json(countValues);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}


const getOrder = async (req, res, next) => {
    try {
       const order = await Order.findById(req.params.id).populate("user", "-password").orFail();
        res.send(order);
    } catch (err) {
        next(err)
    }
}

const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({}).populate("user","-password").sort({ createdAt: "desc" });
        res.send(orders);
    } catch (err) {
        next(err)
    }
}

const createOrder = async (req, res, next) => {
    try {
      const { cartItems, orderTotal, paymentMethod, user } = req.body;
      if (!cartItems || !orderTotal || !paymentMethod || !user) {
        return res.status(400).send("All inputs are required");
      }
  
      const productIds = cartItems.map((item) => item.productID);
      const quantities = cartItems.map((item) => Number(item.quantity));
  
      await Medicine.find({ _id: { $in: productIds } }).then((products) => {
        products.forEach((product, idx) => {
          product.sales += quantities[idx];
          product.save();
        });
      });
  
      const order = new Order({
        user: new ObjectId(user),
        orderTotal: orderTotal,
        orderItems: cartItems,
        paymentMethod: paymentMethod,
      });
  
      const createdOrder = await order.save();
      res.status(201).send(createdOrder);
    } catch (err) {
      next(err);
    }
  };

  
const updateOrderToPaid = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params._id).orFail();
        order.isPaid = true;
        order.paidAt = Date.now();

        const updatedOrder = await order.save();
        res.send(updatedOrder);

    } catch (err) {
        next(err);
    }
}
const updateOrderToDelivered = async (req, res, next) => {
    try {
       const order = await Order.findById(req.params.id).orFail();
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        const updatedOrder = await order.save();
        res.send(updatedOrder);
    } catch (err) {
        next(err);
    }
}

const updateOrderItemCount = async (req, res) => {
    const { orderId, itemId } = req.params;
    const { count } = req.body;
  
    try {
      // Find the order by its ID
      const order = await Order.findById(orderId);
  
      // Find the index of the order item in the OrderItems array
      const itemIndex = order.OrderItems.findIndex((item) => item._id.equals(itemId));
  
      if (itemIndex !== -1) {
        // Update the count of the order item
        order.OrderItems[itemIndex].count = count;
  
        // Save the updated order
        await order.save();
  
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: 'Order item not found' });
      }
    } catch (error) {
      console.error('Error updating order item count:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    getOrder,
    getUserOrders,
    createOrder,
    updateOrderToPaid,
    getOrders,
    updateOrderToDelivered,
    updateOrderItemCount,
    getOrderCostByMonth
}