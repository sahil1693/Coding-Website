const router=require('express').Router();
let user=require('../models/Feedback.model');
router.post('/',async (req,res)=>{
        const email=req.body.email;
        const text=req.body.text;
        const newUser=new user({email,text});
        newUser.save().then(()=>res.json('user added!'))
        .catch(err=>res.status(400).json('Error: '+ err));
});
module.exports=router;
