const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const signupSchema=new Schema({
    name:{type:String, required:true},
    email:{ type:String, required:true},
    password:{type:String, required:true},
    isUser:{type:Boolean , required:true},
    isAdmin:{type:Boolean, required:true},
    isSuperAdmin:{type:Boolean, required:true},
    mobile:{ type:String},
    institute:{ type:String},
    cgpa:{ type:String},
    yearofcomplete:{ type:String},
    degree:{ type:String},
    branch:{ type:String},
    address:{ type:String}
})
const Signup=mongoose.model('login',signupSchema);
module.exports=Signup;
