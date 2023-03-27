const mongoose = require("mongoose")
const ObjectId = require("mongodb").ObjectId

const Review = require("./ReviewModel")
const imageScema = mongoose.Schema({
    path:{type:String, required:true}
})
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    pricePrevious: {
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
    pharmacy:{
        _id: {type:mongoose.Schema.Types.ObjectId,required:true},
        name: {type:String,required:true}
    },
    attrs: [
        {key: {type: String}, value: {type: String}}
        // [{ key: "color", value: "red" }, { key: "size", value: "1 TB" }]
    ],
    images: [imageScema],
    reviews: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Review,
        }
    ]
}, {
    timestamps: true,
})

const Product = mongoose.model("Product", productSchema)
productSchema.index({name:"text",description:"text"},{name:"TextIndex"})
productSchema.index({"attrs.key":1,"attrs.value":1})
module.exports = Product