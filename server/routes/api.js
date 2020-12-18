const express = require('express');
const router = express.Router();
const chalk = require('chalk');
//---------------------Database---------------------
// const User = require("./models/user");
const FoodData = require("../models/foodInfoData");
const userData= require("../models/userSchema");
router.get("/", (req, res) => {
    FoodData.find({ })
            .then((data)=>{
                console.log(chalk.magenta(data));
                res.json(data);
            })
            .catch((error) => {
                console.log(chalk.bgRed('error: ', error));
            });
    // console.log(chalk.blue(req.body));
    
})

router.post("/save",(req,res)=>{
    console.log("save=> ",req.body);
    const data=req.body;
    // create instance of database model
    const newFoodData=new FoodData(data);
    // save data to database
    newFoodData.save()
    .then((result)=>{
        console.log("result:",result)
        // const id=req.body.userID
        // console.log("user id :",id);
        userData.findOne({email:req.body.email},(err,user)=>{
            if(user){
                user.feed.push(data);
                user.save();
                console.log(chalk.white("Data successfully fed"))
                res.json({message:"food item dropped"});
            }else{
                console.log(chalk.white("Data error ",err))
            }
        })
    })
    .catch((error)=>{
        console.log(chalk.red("Data wasent been fed",error));
    })
   
})
// need to put "s" in export
module.exports= router;



// (error)=>{
//     if(error){
//         console.log(chalk.red("internal server database error",error));
//         res.status(500).json({msg:"sorry! database error"}); 
//         return;
//     }
    
//     return res.json({
//         msg:"Data recieved"
//     })
    
// }