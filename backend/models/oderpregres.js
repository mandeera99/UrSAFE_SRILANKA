const mongoose = require('mongoose');

const OderprogressSchema = new mongoose.Schema({
  oder_number: {
    type: String,
    required: true
  },
  succesfull: {
    type: Boolean,
    required: true
  },
  cancelled: {
    type: Boolean,
    required: true
  },
  // Add more fields as necessary
});

module.exports = mongoose.model('oderprogresses', MedicineSchema);