const express = require('express');
const chalk = require('chalk');
const mongoose = require("mongoose");
const morgan= require("morgan"); //HTTP logger
const path=require('path');
// --------------------Routes-----------------------
const routes=require('./routes/api');



const app = express();

// data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//---------Middleware--------------
app.use(express.static('public'));

// HTTP request logger
app.use(morgan('tiny'));

//database added

//cluster user name: ritik
const password= 'masala_dosa'
const MONGODB_URI = 'mongodb+srv://ritik:masala_dosa@onlymeal.wkqyo.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Creating database connection
mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/onlyMealDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.yellow("Connected to database"));
    }
})

app.use("/api",routes);


//------------Server Site---------------    
app.listen(5000, () => {
    console.log(chalk.green("Server running on port 5000!!"));
});
