const router=require('express').Router();
const Mcq=require('../models/mcq.model');
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
router.get('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    Mcq.find().then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+err));
});
router.post('/',verifyToken,async (req,res)=>{
 jwt.verify(req.body.token, "s", (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
    const questionname=req.body.questionname;
    const image=req.body.image;
    const output=req.body.output;
    const newMcq=new Mcq({questionname,image,output});
    res.set('Content-Type',"application/json");
    newMcq.save().then(()=>res.json('MCQ added!'))
    .catch(err=>res.status(400).json('Error: '+ err)); 
    }
    })
});
module.exports=router;
