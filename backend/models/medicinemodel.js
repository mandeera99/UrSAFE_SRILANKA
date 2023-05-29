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
  price:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  }, lot_no: {
    type: Number,
    required: false,
  },
  brand: {
    type: String,
    required: false
  },
 
  expiry_date: {
    type: Date,
    required: false,

  },
  supplier_name: {
    type: String,
    required: false
  },
  // Add more fields as necessary
});

module.exports = mongoose.model('medicines', MedicineSchema);