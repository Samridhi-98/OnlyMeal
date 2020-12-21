const mongoose = require("mongoose");
const validator = require('validator');
//Exporting module isn't Schemas, they are Models.When you do const foodInfoData = require('./foodIInfoData'); 
//You are requiring the foodInfoData Model, not the foodInfoData Schema so use .schema to resolve the issue.
const foodInfoData = require("./foodInfoData").schema;

//?The validator dosn't play well with mongoose to get rid of the warning set isAsync to false

let userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    feed: {
        type:[foodInfoData],
        
    },
    recieved: {
        type:[foodInfoData],
        
    },
},
{
    timestamps: true
});

module.exports=mongoose.model("userData",userSchema);


//https://stackoverflow.com/questions/43024285/embedding-schemas-is-giving-error/43024503