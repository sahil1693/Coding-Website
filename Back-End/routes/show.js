const router=require('express').Router();
const showTest=require('../models/test.model');
const User=require('../models/signup.model');
router.post('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    showTest.find().then(exer=>
{        for(var i=0;i<exer.length;i++){
        exer[i].objectiveAnswer='';
        exer[i].output='';
        exer[i].input='';
        exer[i].output='';
        exer[i].objective='';
        exer[i].objectiveOption='';
        exer[i].code='';
        exer[i].passcode='';
}
        return res.json(exer)})
    .catch(err=>res.status(400).json('Error: '+err));
});
router.post('/question', async (req,res)=>{
    res.set('Content-Type','application/json');
    showTest.findOne({contestName:req.body.contestName,passcode:req.body.passcode}).then(response=>{
        response.objectiveAnswer='';
        response.output='';
        response.input='';
        return res.json(response);
    })
    .catch((err)=>{
        res.status(400).json('An error occured');
    })
})
router.post('/checkPasscode',async(req,res)=>{
	res.set('Content-Type','application/json');
	showTest.findOne({contestName:req.body.contestName,passcode:req.body.passcode}).then(response=>{
        return res.json(response);
    })
    .catch((err)=>{
        res.status(400).json('An error occured');
    })

})
router.post('/question/submit', async (req,res)=>{

	res.set('Content-Type','application/json');
	showTest.findOne({contestName:req.body.contestName}).then(response=>{
	var count=0;
		req.body.question.map((a)=>{
			count=count+a;
		})
		response.objectiveAnswer.map((a,index)=>{
			if(req.body.MCQ[index]==a)
				count++;
			
		})
		User.updateOne({name:req.body.name},{$set:{result:{contestName:req.body.contestName,result:count}}})
		.then((response)=>{
		console.log(count+"Data updated successfully");
		return res.json(response);
		})
		.catch(err=>{
		return res.json(err);
		})
	})
	.catch((err)=>{
	res.status(400).json('An error occured');
	})

})
module.exports=router;
