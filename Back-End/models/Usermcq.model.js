const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const mcqSchema=new Schema({
    questionname:{type:String,required:true},
    image:{type:String,required:true},
    output:{type:String,required:true},
})
const Mcq=mongoose.model('Usermcq',mcqSchema);
module.exports=Mcq;