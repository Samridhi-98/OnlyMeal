const mongoose = require("mongoose");
const userData = require("./userSchema").schema;

let foodInfoData = new mongoose.Schema({
    title: String,
    type: String,
    category: String,
    state: String,
    date: {
        type: Date,
        default: Date.now
    },
    quantity: Number,
    others: String,
    phoneno: Number,
    email: String,
    city: String,
    pincode: String,
    address: String,
    userID:[{
        type:mongoose.Schema.Types.ObjectId,ref: 'userData'
    }]
},
{
    timestamps: true    
});


// foodInfoData.plugin(passportLocalMongoose);
module.exports = mongoose.model("FoodData", foodInfoData);