const express = require('express');
const chalk = require('chalk');
const mongoose = require("mongoose");
const morgan= require("morgan"); //HTTP logger
const path=require('path');
const user = require("./routes/user");    //user
const passport=require("passport"); //importing passport
const bodyParser=require("body-parser");
// --------------------Routes-----------------------
const routes=require('./routes/api');



const app = express();


// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

// data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//---------Middleware--------------
app.use(express.static('public'));
app.use(passport.initialize());

// HTTP request logger
app.use(morgan('tiny'));

//passport config
require("./config/passport")(passport);



//database added

//cluster user name: ritik
const password= 'masala_dosa'
const MONGODB_URI = 'mongodb+srv://ritik:masala_dosa@onlymeal.wkqyo.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Creating database connection
mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/onlyMealDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,   //(node:63208) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead [duplicate]

}, (err) => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.yellow("Connected to database"));
    }
})

app.use("/api",routes);
//routes
//STUPID MISTAKE : its "/user" not "./user"
app.use("/user",user);

//------------Server Site---------------    
app.listen(5000, () => {
    console.log(chalk.green("Server running on port 5000!!"));
});
