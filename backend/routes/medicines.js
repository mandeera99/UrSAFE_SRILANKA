const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicinemodel');

router.route('/').get((req, res) => {
  Medicine.find()
      .then(medicines => res.json(medicines))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/search/:name', async (req, res) => {
  const mediName = req.params.name;

  try {
    const medicine = await Medicine.find({ medi_name: { $regex: mediName, $options: 'i' } });
    if (medicine.length === 0) {
      return res.status(404).send({ error: 'Medicine not found' });
    }
    res.send(medicine);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

module.exports = router;