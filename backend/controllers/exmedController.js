const Storemed = require('../models/storemedModel');
const mongoose = require('mongoose')

exports.findExpiringMedicine = async (req, res) => {
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  try {
    const expiringMedicine = await Storemed.find({
      expiry_date: { $lte: thirtyDaysFromNow },
    });
    res.status(200).json(expiringMedicine);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};


