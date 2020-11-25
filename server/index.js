const express = require('express');
const chalk = require('chalk');
const mongoose = require("mongoose");
const morgan= require("morgan");
const path=require('path');

//---------------------Database---------------------
// const User = require("./models/user");
const FoodData = require("./models/foodInfoData");

// const cors = require('cors'); //connect express to react

// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcryptjs");
// const session = require("express-session");
//----------------Passport----------------
// const passport = require('passport');
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

//---------------------Other Files---------------------
// const keys = require("./config/index");

const app = express();

// data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//---------Middleware--------------
app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(cors({
//     origin: "http://localhost:3000", //location of react app to connect
//     credentials: true
// }));
// app.use(session({
//     secret: 'keyboard kitty',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(cookieParser("KittyKat"));
// app.use(passport.initialize());
// app.use(passport.session())
// require("./config/passportConfig")(passport);

// HTTP request logger
app.use(morgan('tiny'));

//database added
// Creating database connection
mongoose.connect("mongodb://localhost:27017/onlyMealDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.yellow("Connected to database"));
    }
})

app.get("/", (req, res) => {
    const data={
        "name":"chuimui",
        "message":"hum"
    }
    // console.log(chalk.blue(req.body));
    res.json(data);
})

app.post("/save",(req,res)=>{
    console.log("body",req.body);
    const data=req.body;
    // create instance of database model
    const newFoodData=new FoodData(data);
    // save data to database
    newFoodData.save((error)=>{
        if(error){
            console.log(chalk.red("internal server datavase error"));
            res.status(500).json({msg:"sorry! database error"});
            return;
        }
        
        return res.json({
            msg:"Data recieved"
        })
        
    })
   
})

// passport.serializeUser((user, cb) => {
//     cb(null, user);
// });

// passport.deserializeUser((user, cb) => {
//     cb(null, user);
// });

//----------------------Google Strategy----------------------
// passport.use(new GoogleStrategy({
//     clientID: keys.GOOGLE.clientID,

//     clientSecret: keys.GOOGLE.clientSecret,
//     callbackURL: "http://localhost:3000/auth/google/dashboard",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
// },
//     (accessToken, refreshToken, profile, cb) => {
//         console.log(chalk.blue(JSON.stringify(profile)));
//         user = { ...profile };
//         return cb(null, profile);
//     }))

// app.get("/auth/google", passport.authenticate("google", {
//     scope: ["profile", "email"]
// }));

// app.get("/auth/google/dashboard",
//     passport.authenticate("google", { failureRedirect: "/" }),
//     (req, res) => {
//         res.redirect("/dashboard");
//     });


//-----------------Local Strategy-----------------

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.redirect("/dashboard");
// })

// app.post("/", (req, res) => {
//     User.findOne({ Username: req.body.Username }, async (err, checkUser) => {
//         if (err) throw err;
//         if (checkUser) {
//             res.send("user exists please login");
//             res.redirect("/login");
//         } else {
//             const hashedPassword = await bcrypt.hash(req.body.password, 5);

//             const newUser = new User({
//                 Username: req.body.username,
//                 email: req.body.email,
//                 password: hashedPassword,
//                 phoneno: req.body.phoneno,
//             });
//             await newUser.save(() => {
//                 console.log(chalk.yellow("User has been registered!"));
//                 res.redirect("/dashboard")
//             });
//         }
//     });
// });




//------------Server Site---------------    
app.listen(5000, () => {
    console.log(chalk.green("Server running on port 5000!!"));
});
