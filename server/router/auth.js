const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require("../model/userSchema");

//Route
router.get("/", (req, res) => {
    res.send(`Hello World server Main Router`);
}); 

// Using Promises used in Reg..
// router.post("/register" ,(req,res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Plz Filled the field Properly"});
//     }
//     User.findOne({email:email}).then((userExist) => {
//         if(userExist){
//           return res.status(422).json({ error: "Email already Exist" });  
//         }
//         const user = new User({ name, email, phone, work, password, cpassword });
//         user.save().then(() => {
//             res.status(201).json({ message:"user registered successfully"});
//         }).catch((err) => res.status(500).json({error:"Failed to Registered"}));
//     }).catch(err => {console.log(err);});    
// });

// Async-Await used in Reg..
router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz Filled the field Properly" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            //yeha pe 
            await user.save();
            res.status(201).json({ message: "user registered successfully" });
        }

    } catch (err) {
        console.log(err);
    }
});

//Login route
router.post("/signin", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz Filled the data" })
        }
        const userLogin = await User.findOne({ email: email });
        //console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            //jwt token call
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials Error" });
            } else {
                res.status(201).json({ message: "User Signin Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials Error" });
        }

    } catch (err) {
        console.log(err);
    }
});

// about us ka page
router.get("/about", authenticate, (req, res) => {
    console.log(`Hello About Page`);
    res.send(req.rootUser);
});
 

module.exports = router;


