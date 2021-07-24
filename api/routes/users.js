const router=require('express').Router();
const User=require('../models/user');
const bcrypt =require('bcrypt');
const { findByIdAndUpdate, findById } = require('../models/user');

router.put('/:id',async (req,res)=>{
    if(req.body.userId==req.params.id){
             if(req.body.password){
                  const salt= await bcrypt.genSalt(10);
                  req.body.password= await bcrypt.hash(req.body.password,salt);
             }
             try{
                   const updateUser=await findByIdAndUpdate(req.params.Id,{
                       $set:req.body,
                   },{new:true})
                 res.status(200).json(updatedUser);
            
              }catch(error){
                  res.status(401).json('sorry updation failed');
              }
    }else{
        res.status(401).json("you are not authorized to change details ");
    }
})



//  deleting user 

router.delete("/:id", async(req,res)=>{
    if(req.body.userId==req.params.id){
            const user= await findById(req.params.id);
            try{
                try{
                     await User.findByIdAndDelete(req.params.id);
                      res.status(200).json('user deleted');
                }catch(error){
                    res.status(401).json(error);
                }
            }
            catch(error){
                res.status(404).json(error);
            }
    }else{
        res.status(401).json("authentication failed for delete ");
    }
})



router.get("/:id", async (req,res)=>{
    try{
            const user= await User.findById(req.params.id);
            const {password,...others}=user._doc;
            res.status(200).json(others)
    }catch(error){
        res.status(500).json(error)
    }
});


module.exports=router;