const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const key=require("../config/index");

// load user model
const  User=require("../models/userSchema");
const chalk = require("chalk");

// router.get("/",(req,res)=>{
//     console.log(chalk.magenta("get in here user"));
// })
router.post("/register",(req,res)=>{

    console.log(chalk.red("into register"));
    console.log(req.body);
    User.findOne({email:req.body.email}).populate("feed").then(user=>{
        if(user){
            console.log(chalk.red("USER EXIST"));
            console.log(chalk.green("user data: ",res.json(user))); //changes
            return res.status(400).json({email:"Email already exist"});
        }
        else{
            console.log(chalk.red("USER NOT EXIST"));
            const newUser=new User({
                name:req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            // hash password before saving in database
            // STUPID MISTAKE : Its geN not geT :Facepalm emoji:
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err){
                        throw err;
                    }
                    newUser.password=hash;
                    newUser.save().then(user=>res.json(user)).catch(err=>console.log(err));
                })
            })
        }
    })
})

router.post("/login",(req,res)=>{
    const email=req.body.email;
    const password= req.body.password;
    console.log(chalk.magenta(req.body));
    //find user by email
    User.findOne({email}).populate("feed").then(user=>{
        // check if user exists
        if(!user){
            console.log(chalk.red("nahi mila yaar"));
            return res.status(404).json({emailnotfound:"Email not found"});
        }

        //check password
        bcrypt.compare(password,user.password).then(isMatch=>{
            if(isMatch){
                console.log("=>>>>>>password sahi hai",user.name);
                //User matched
                //Create JWT Payload
                const payload={
                    id:user.id,
                    name:user.name
                };

                // sign token
                jwt.sign(
                    payload,
                    key.secretOrKey,
                    {
                        expiresIn: 31556926 //1 yr in seconds
                    },
                    (err,token)=>{
                        res.json({
                            success:true,
                            token:"Bearer"+token
                        })
                    }
                )
            }
            else{
                return res.status(400).json({passwordincorrect: "Password incorrect"});
            }
        })
    })
})

module.exports= router;