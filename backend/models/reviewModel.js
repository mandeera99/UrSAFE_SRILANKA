const mongoose=require("mongoose")
const ObjectId = require("mongodb").ObjectId

const reviewSchema = mongoose.Schema({
    comment:{type:String,required:true,},
    rating:{type:Number,required:true,},
    user:{
        _id: {type:ObjectId,required:true},
        name: {type:String,required:true}
    }
    },{
        timestamps:true,
})

const Review =mongoose.model("Review",reviewSchema)
module.exports=Review