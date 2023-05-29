const Storemed = require('../models/storemedModel');
const mongoose = require('mongoose')

exports.findExpiringMedicine = async (req, res) => {
  const { userId } = req.params;
  const currentDate = new Date();
  const ninetyDaysFromNow = new Date();
  ninetyDaysFromNow.setDate(ninetyDaysFromNow.getDate() + 90);

  try {
    const expiringMedicine = await Storemed.find({
      user: userId,
      expiry_date: { $lte: ninetyDaysFromNow },
    }).sort({expiry_date: 1});
    res.status(200).json(expiringMedicine);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};




