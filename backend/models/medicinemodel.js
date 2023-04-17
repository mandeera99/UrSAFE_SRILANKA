const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  medi_name: {
    type: String,
    required: true
  },
  pharmacy_name: {
    type: String,
    required: true
  },
  qty: {
    type: String,
    required: true
  },
  // Add more fields as necessary
});

module.exports = mongoose.model('medicines', MedicineSchema);