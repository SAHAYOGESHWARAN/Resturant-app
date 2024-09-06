const Restaurant = require('../models/Restaurant');

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.addRestaurant = async (req, res) => {
  const { name, location, menuItems } = req.body;
  try {
    const restaurant = new Restaurant({ name, location, menuItems });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
