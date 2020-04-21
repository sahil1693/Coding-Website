const router=require('express').Router();
const showTest=require('../models/test.model');
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
router.post('/question/submit', async (req,res)=>{

	res.set('Content-Type','application/json');
	showTest.findOne({contestName:req.body.contestName}).then(response=>{
	
		console.log('Coming to the backend');
		return res.json(response);
	})
	.catch((err)=>{
	res.status(400).json('An error occured');
	})

})
module.exports=router;
