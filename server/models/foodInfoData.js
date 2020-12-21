const mongoose = require("mongoose");
const validator = require('validator');


let foodInfoData = new mongoose.Schema({
    userid:mongoose.Schema.Types.ObjectId,
    title: String,
    type: String,
    category: String,
    state: String,
    date: {
        type: Date,
        default: Date.now
    },
    quantity:{ 
        type: Number,
        min:0,
        max:10
    },
    image:{
        type:String
    },
    other: String,
    phoneno: Number,
    email:{
        type:String,
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        },
    },
    city: String,
    pincode: String,
    address: String,
    // userID:{
    //     type:mongoose.Schema.Types.ObjectId,ref: 'userData',required:true
    // }
},
{
    timestamps: true    
});


// foodInfoData.plugin(passportLocalMongoose);
module.exports = mongoose.model("FoodData", foodInfoData);