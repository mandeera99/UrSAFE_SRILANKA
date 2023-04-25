const mongoose = require('mongoose');

const OderprogressSchema =new mongoose.Schema({
    oder_number:{
        type:String,
        required:true
    },
    successfull:{
        type:Boolean,
        required:true
    },
    cancelled:{
        type:Boolean,
        required:true
    },
});

module.exports =mongoose.model('oderprogresses',OderprogressSchema);