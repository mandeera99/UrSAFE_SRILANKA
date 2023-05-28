const mongoose = require("mongoose")
const User = require("./userModels")
const { Schema } = mongoose;

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User,
    },
    pharmacy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    },
    Date:{
        type: Date,
        // required:true
    },
    order_cost:{
        type:Number,
    },
    orderTotal: {
        itemsCount: {type: Number, required: true},
        cartSubtotal: {type: Number, required: true}
    },
    medicine_qty:{
        type:Number,
    },
    order_items:{
        type:Array,
    },
    orderItems: [
        {
            name: {type: String, required: true},
            price: {type: Number, required: true},
            image: {path: {type: String, required: true}},
            quantity: {type: Number, required: true},
            pharmacy:{type: String, required: true},
            count: { type: Number, required: true, default: 1 }
        }
    ],
    medicine_name:{
        type:String,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    transactionResult: {
        status: {type: String},
        createTime: {type: String},
        amount: {type: Number}
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date
    },
    year:{
        type:Number
    },
    productID:[]
}, {
    timestamps: true,
})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order
