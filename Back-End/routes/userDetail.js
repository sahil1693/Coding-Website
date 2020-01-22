const router=require('express').Router();
const User=require('../models/signup.model');
router.post('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    User.find()
    .then(res1=>{
        return res.json(res1)
    })
    .catch(res1=>{
       return  res.status(401).send("Unauthorised")
    })
}
);
router.post('/deleteuser',async (req,res)=>{
 res.set('Content-Type',"application/json");
    User.deleteOne({_id:req.body.sss})
    .then(res1=>res.send(res1))
    .catch(res1=>res.status(401).send("unauthored"));

})
router.post('/admin',async (req,res)=>{
    res.set('Content-Type',"application/json");
    User.updateOne({_id:req.body.sss} , {$set: {isAdmin:true,isUser:false}})
    .then(res1=>res.send(res1))
    .catch(res1=>res.status(401).send("unauthored"));

})
router.post('/radmin',async (req,res)=>{
    res.set('Content-Type',"application/json");
    User.updateOne({_id:req.body.sss} , {$set: {isAdmin:false,isUser:true}})
    .then(res1=>res.send(res1))
    .catch(res1=>res.status(401).send("unauthored"));

})
module.exports=router;
