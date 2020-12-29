require('dotenv').config();

const express = require('express');
const router = express.Router();
const chalk = require('chalk');
//---------------------Database---------------------
// const User = require("./models/user");
const FoodData = require("../models/foodInfoData");
const userData= require("../models/userSchema");
const { route } = require('./user');
// ------nodemailer-----
const nodemailer = require("nodemailer");

let currentCard;
// nodemailer transporter
let transporter =nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"onlymeal3024@gmail.com",
        pass:"UgewARkhOReSOnRyPtiV"
    }
})

sendConformationMail = (doner,claimer)=>{
    let mailOptions = {
        from:"onlymeal3024@gmail.com",
        to:doner.email,
        subject:"Notification regarding donation from ONLY MEAL",
        text:`Your food item has been requested\nBy: ${claimer.name}\nEmailID: ${claimer.email}\n\nThankyou\nRegards Team 1's&&0's `
    }
    
    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            console.log("Error Occures",err);
        }
        else{
            console.log("Email sent!!!",data);
        }
    })
}

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
        userData.findById(data.userid,(err,user)=>{
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

router.post("/recieve",(req,res)=>{
    const data=req.body;
    currentCard=data;
    //console.log("Current CARD:",currentCard);
    console.log("inside recieve: ",data);
    userData.findById(data.recieverId,(err,user)=>{
        if(user && data.recieverId !== data.cardData.userid){
            user.recieved.addToSet(data.cardData);
            console.log(chalk.white("user recieved: ",user.recieved));
            user.save();
            console.log("user is: ",user);
            res.json({message:"added to recieved array"});
            sendConformationMail(data.cardData.email,user);
        }else{
            console.log(chalk.red("recieved data didnt pushed into user array",err));
        }
    })
})
router.get('/recieve/:userid',(req,res)=>{
    const userid=req.params.userid;
    
    userData.findById(userid,(err,user)=>{
        if(user){
            res.json(user.recieved);
        }else{
            console.log(chalk.red("error occured while fetching recieved data for user"));
        }
    })
})
router.get('/donate/:userid',(req,res)=>{
    const userid=req.params.userid;
    
    userData.findById(userid,(err,user)=>{
        if(user){
            res.json(user.feed);
        }else{
            console.log(chalk.red("error occured while fetching recieved data for user"));
        }
    })
})

router.get('/foodinfo',(req,res)=>{
    console.log("current card from server : ",currentCard);
    res.json(currentCard);
})
// need to put "s" in export
module.exports= router;



