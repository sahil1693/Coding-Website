const router=require('express').Router();
const User=require('../models/signup.model');
const jwt=require('jsonwebtoken');
function verifyToken(req, res, next) {
  const bearerHeader = req.body.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.body.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
router.post('/',async (req,res)=>{
    let found = await User.findOne({email:req.body.email});
    res.set('Content-Type',"application/json");
    if(found)
    {
        let found1=await User.findOne({password:req.body.password});
        if(found1)
        {
            jwt.sign({user:found},"s",(err,token)=>{
                if(err) {
          res.sendStatus(403);
        } else {
                res.send({
                   token: token,
                    found:found
                })
           
        }
        })}
        else{
           return res.status(401).send("password doesnot match");
        }
    }
    else{
        return res.status(401).send("email does not exist");
    }
});
router.post('/profile',verifyToken,async (req,res)=>{
       jwt.verify(req.body.token, "s", (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          res.json({
            authData
          });
        }
      });
});
router.put("/",async(req,res)=>{
    let found = await User.findOne({name:req.body.username});
    User.updateOne({"_id":found._id},{$set:req.body})
    .then(()=>res.send('upate'))
    .catch(()=>{ return res.status(400).send('data updated');})
});

module.exports=router;
