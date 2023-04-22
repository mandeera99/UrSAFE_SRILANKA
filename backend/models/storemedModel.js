const mongoose = require('mongoose')

const Schema = mongoose.Schema

const storemedSchema = new Schema({
    lot_no: {
        type: Number,
        required: true, 
        unique: true
    },
    medicine_name: {
        type: String,
        required: true
        
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expiry_date: {
        type: Date,
        required: true,

    },
    supplier_name: {
        type: String,
        required:true
    },
},{timestamps: true})

module.exports = mongoose.model('storemed', storemedSchema);
