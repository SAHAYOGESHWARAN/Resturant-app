const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem'); 

router.get('/menu-items', async (req, res) => {
  try {
    const menuItems = await MenuItem.find(); 
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
