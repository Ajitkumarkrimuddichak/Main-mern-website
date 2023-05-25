// mongodb Atlis cloud  ans cluster  used in this project 
// About pe tabhi jana hai jab login Authorize persion not working resion token error
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Dotenv file connect
dotenv.config({path:'./config.env'}); 
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

//we link the router file
app.use(require('./router/auth'));

const PORT = process.env.PORT;
 


// app.get("/about" ,middleware, (req,res) => {
//     console.log(`Hello About Page`);
//     res.send(`Hello World server About Page`);
// });

app.get("/contact" , (req,res) => {
    res.cookie("Test",'Ajit_kumar')
    res.send(`Hello World server Contact Page`);
});

app.get("/signin" , (req,res) => {
    res.send(`Hello World server Login/Singin Page`);
});

app.get("/signup" , (req,res) => {
    res.send(`Hello World server Registration/singup Page`);
});
 
app.listen(PORT, () => {
    console.log(`Server is Running at port no ${PORT}`);
})