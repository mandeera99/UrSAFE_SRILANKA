const mongoose =require("mongoose")
const imageSchema = mongoose.Schema({
    path:{type:String, required:true}
})

const userSchema =mongoose.Schema({
    name:{type:String,unique:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:String},
    address:{type:String},
    country:{type:String},
    zipCode:{type:String},
    city:{type:String},
    province:{type:String},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false},
    isPharmacy:{type:Boolean,required:true,default:false},
    images: [imageSchema],
},{
    timestamps:true,
});

const User =mongoose.model("User",userSchema)
module.exports=User;