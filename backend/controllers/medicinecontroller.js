/* const express = require('express');
const router = express.Router();
const Medicine = require('../models/module');

// Search for medicines by name
router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    const regex = new RegExp(name, 'i');
    const medicines = await Medicine.find({ name: regex });
    res.json(medicines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
 */