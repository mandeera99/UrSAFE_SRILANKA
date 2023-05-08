
const mongoose = require('mongoose');

const OrderSchema =new mongoose.Schema({
    order_number:{
        type:String,
        required:true
    },
    order_items:{
        type:Array,
        required:true
    },
    order_cost:{
        type:Number,
        required:true
    },
    medicine_name:{
        type:String,
        required:true
    },
    medicine_qty:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
});

module.exports =mongoose.model('orders',OrderSchema);