const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const testSchema=new Schema({
    contestName:{type:String,required:true},
    startday:{
        type:String,  required:true,
    },
    endday:{
    type:String,required:true
    },
    starttime:{
    type:String,  required:true
    },
    endtime:{
    type:String, required : true
    },
    objective:{
    type:Array
    },
    objectiveOption:{
    type:Array
    },
    objectiveAnswer:{
    type:Array
    },
    code:{
    type:Array
    },
    input:{
    type:Array
    },
    output:{
    type:Array
    }
    
})
const test=mongoose.model('test',testSchema);
module.exports=test;
