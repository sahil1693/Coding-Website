const router=require('express').Router();
const Sample=require('../models/sample.model');
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
    Sample.find().then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+err));
    }
    );
router.post('/',verifyToken,async (req,res)=>{
    const questionname=req.body.questionname;
    const image=req.body.image;
    const type=req.body.type;
    const per=req.body.per;
    const newSample=new Sample({questionname,image,type,per});
    res.set('Content-Type',"application/json");
    jwt.verify(req.body.token, "s", (err, authData) => {
                if(err){
                return res.status(403).send('error occured');
                }
                else{
                 newSample.save().then(()=>res.json('Question Name added!'))
    .catch(err=>res.status(400).json('Error: '+ err)); 
    }
            });
});
router.delete('/deletequestion',verifyToken,async (req,res)=>{

    res.set('Content-Type',"application/json");
    jwt.verify(req.body.token, "s", (err, authData) => {
            if(err){
            res.sendStatus(401)
            }
            else { Sample.deleteOne({questionname:req.body.sss})
    .then(res1=>res.send(res1))
    .catch(res1=>res.status(401).send("unauthored"));            
                }
            });
})
router.post('/search',async (req,res)=>{
    res.set('Content-Type',"application/json");
     var a=req.body.key;
    await Sample.findOne({questionname:a})
    .then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+ err)); 
});
module.exports=router;
