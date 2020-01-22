const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
require('dotenv').config();
const app=express();
app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running on 5000`);
    });
app.use(cors());
app.use(express.json());
const url=process.env.ATLAS_URI;
mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
console.log('database successfully connected');
})
const signupRouter=require('./routes/signup');
const loginRouter=require('./routes/login');
const FeedbackRouter=require('./routes/Feedback');
const sampleRouter=require('./routes/sample');
const questionRouter=require('./routes/question');
const McqRouter=require('./routes/mcq');
const Compiler=require('./routes/sample1');
const forgot=require('./routes/forgot');
const test=require("./routes/test")
const userDetail=require("./routes/userDetail")
const show=require("./routes/show");
// app.use('/',express.static('public/build'));
function verifyToken(req, res, next) {
    const bearerHeader = req.body.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
app.use('/Feedback',FeedbackRouter);
app.use('/sample',sampleRouter);
app.use('/question',questionRouter);
app.use('/Compiler',Compiler);
app.use('/mcq',McqRouter);
app.use('/signup',signupRouter);
app.use('/forgot',forgot);
app.use('/login',loginRouter);
app.use("*",verifyToken,(req,res,next)=>
{
jwt.verify(req.token, 's', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } 
    else {
     next()
      };
    });
})
app.use("/createTest",test);
app.use("/userDetail",userDetail);
app.use("/show",show);
