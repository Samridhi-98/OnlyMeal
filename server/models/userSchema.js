const mongoose = require("mongoose");

//Exporting module isn't Schemas, they are Models.When you do const foodInfoData = require('./foodIInfoData'); 
//You are requiring the foodInfoData Model, not the foodInfoData Schema so use .schema to resolve the issue.
const foodInfoData = require("./foodInfoData").schema;

let userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    feed: [foodInfoData],
},{
    toJSON: {
        virtuals: true,
    },
},
{
    timestamps: true
});

module.exports=mongoose.model("userData",userSchema);


//https://stackoverflow.com/questions/43024285/embedding-schemas-is-giving-error/43024503