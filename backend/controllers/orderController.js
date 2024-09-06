const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { userId, restaurantId, items, totalPrice } = req.body;
  try {
    const order = new Order({ user: userId, restaurant: restaurantId, items, totalPrice });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
