const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const keys=require("../config/index");

// load user model
const  User=require("../models/userSchema");
const chalk = require("chalk");

router.get("/",(req,res)=>{
    console.log(chalk.magenta("get in here user"));
})
router.post("/register",(req,res)=>{

    console.log(chalk.red("into register"));
    console.log(req.body);
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            return res.status(400).json({email:"Email already exist"});
        }
        else{
            const newUser=new User({
                name:req.body.name,
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
                    newUser.save().then(user=>res.json(user).catch(err=>console.log(err)));
                })
            })
        }
    })
})

router.post("/login",(req,res)=>{
    const email=req.body.email;
    const password= req.body.password;

    //find user by email
    User.findOne({email}).then(user=>{
        // check if user exists
        if(!user){
            return res.status(404).json({emailnotfound:"Email not found"});
        }

        //check password
        bcrypt.compare(password,user.password).then(isMatch=>{
            if(isMatch){
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