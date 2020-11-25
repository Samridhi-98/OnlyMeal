const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

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
    phone_no: Number,
    email: String,
    city: String,
    pincode: String,
    address: String,
})


// foodInfoData.plugin(passportLocalMongoose);
module.exports = mongoose.model("FoodData", foodInfoData);