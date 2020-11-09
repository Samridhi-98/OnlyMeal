const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let foodInfoData = new mongoose.Schema({
    title: String,
    type: String,
    category: String,
    state: String,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    },
    others: String,
    email: String,
    phone_no: Number,
    city: String,
    pincode: String,
    address: String,
})


foodInfoData.plugin(passportLocalMongoose);
module.exports = mongoose.model("FoodData", foodInfoData);