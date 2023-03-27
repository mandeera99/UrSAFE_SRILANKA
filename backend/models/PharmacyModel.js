const mongoose=require("mongoose")
const ObjectId = require("mongodb").ObjectId
const imageSchema = mongoose.Schema({
    path:{type:String, required:true}
})

const pharmacySchema = mongoose.Schema({
    name:{type:String,required:true,},
    rating:{type:Number,required:true,},
    regOrg:{type:String,required:true,},
    regNum:{type:String,required:true,},
    pharmacist:{
        name:{type:String,required:true,},
        phoneNumber:{type:String}
    },
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:String},
    address:{type:String},
    country:{type:String},
    zipCode:{type:String},
    city:{type:String},
    province:{type:String},
    password:{type:String,required:true},
    images: imageSchema,
    lot_No:{type:String},
},{
        timestamps:true,
})

const Pharmacy =mongoose.model("Pharmacy",pharmacySchema)
module.exports=Pharmacy