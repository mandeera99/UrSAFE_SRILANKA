const mongoose = require('mongoose');
const Review = require("./reviewModel")
const imageSchema = mongoose.Schema({
  path:{type:String,required:true}
})

const MedicineSchema = new mongoose.Schema({
  medi_name: {
    type: String,
    required: true
  },
  pharmacy_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  qty: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviewsNumber: {
    type: Number,
  },
  sales: {
    type: Number,
    default: 0
  },
  lot_no:[
    {type: String}
  ],
  images: [imageSchema],
  reviews: [
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:Review,
    }
  ]

  // Add more fields as necessary
});
const Medicine =mongoose.model('Medicine', MedicineSchema);
MedicineSchema.index({name:"text",description:"text"},{name:"TextIndex"})
module.exports =  Medicine;