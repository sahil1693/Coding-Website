const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const FeedbackSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    text:{type:String,required:true},
})
const Feedback=mongoose.model('Feedback',FeedbackSchema);
module.exports=Feedback;
