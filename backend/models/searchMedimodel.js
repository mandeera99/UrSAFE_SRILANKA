const mongoose = require('mongoose')

const Schema = mongoose.Schema

const searchmedSchema = new Schema({
   
    medicine_name: {
        type: String,
        required: true
        
    },
    brand: {
        type: String,
        required: true
    },
    does: {
        type: Number,
        required: true
    },
   
},{timestamps: true})

// const Searchmed = mongoose.model('Searchmed', searchmedSchema);
const Searchmed = mongoose.model('Searchmed', searchmedSchema);

module.exports = Searchmed;
