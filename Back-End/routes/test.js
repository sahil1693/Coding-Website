
var path = require('path');
var Router = require('express').Router();
var test = require('../models/test.model');
Router.post('/',async (req,res)=>{
    var i=0;
    const contestName=req.body.vb.ContestName;
    const startday=req.body.vb.StartDay;
    const endday=req.body.vb.EndDay;
    const starttime=req.body.vb.StartTime;
    const endtime=req.body.vb.EndTime;
    const objective=req.body.vb.Objective;
    const objectiveOption=req.body.vb.Objinput;
    const objectiveAnswer=req.body.vb.Objoutput;
    const code=req.body.vb.Coding;
    const input=req.body.vb.Codinput;
    const output=req.body.vb.Codoutput;
    const newSample=new test({contestName,startday,endday,starttime,endtime,objective,objectiveOption,objectiveAnswer,code,input,output});
    res.set('Content-Type',"application/json");
    newSample.save().then(()=>res.json('Question Name added!'))
    .catch(err=>res.status(400).json('Error: '+ err)); 
});
module.exports = Router;
