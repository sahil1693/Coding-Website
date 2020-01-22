const nodemailer = require('nodemailer');
const router=require('express').Router();
const User=require('../models/signup.model');
require('dotenv').config();
router.post('/',async (req,res)=>{
    let found = await User.findOne({email:req.body.email});
    res.set('Content-Type',"application/json");
    if(found)
    {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.user,
                pass: process.env.password
            }
        });
        let mailOptions = {
            from: 'Sackerrank Team',
            to: req.body.email,
            subject: 'Reset Password Instruction',
            html: '<p><center><h2>Sackerrank\n</h2></center><br></br><h3>Hello '+ found.name+'!</h3><br></br>Someone has requested a link to change your password. You current password is given below.<br></br>If you didnot request this, please ignore this email.<br></br><h3>Your password is '+found.password+'</h3></p>'
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return res.status(401).send("error");
            }
            return res.send("password send successfully");
        });
    }
    else{
        return res.status(401).send("email does not exist");
    }
});

module.exports=router;
