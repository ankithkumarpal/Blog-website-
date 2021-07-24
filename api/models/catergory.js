const mongoose =require ('mongoose');

 const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},{timestamp:true});

module.exports=mongoose.model('category',categorySchema);