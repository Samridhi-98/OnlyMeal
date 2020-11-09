const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

let user = new mongoose.Schema({
    Username: String,
    email: String,
    password: String,
    phone: Number,
    googleID: String
});

user.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", user);