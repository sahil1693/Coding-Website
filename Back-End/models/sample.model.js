const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const sampleSchema=new Schema({
    questionname:{type:String,required:true},
    image:{type:String,required:true},
    type:{type:String,required:true},
    per:{type:String,required:true},
    test:{type:Array,required:true},
    output:{type:Array,required:true}
})
const Sample=mongoose.model('sample',sampleSchema);
module.exports=Sample;
