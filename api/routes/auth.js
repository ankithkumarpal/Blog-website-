const router=require('express').Router();
const User=require('../models/user');
const bcrypt =require('bcrypt');


//register config
router.post('/register', async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(req.body.password,salt);
        const  newUser=new User({
             username:req.body.username,
             email:req.body.email,
             password:hashpassword
             
         });
         const user= await newUser.save();
        //  res.send('ok')
         res.status(200).json(user);
    }catch(error){
        res.status(500).json(error);
    }
})

//login congig

router.post("/login", async (req,res)=>{
   try{
          const user= await User.findOne({username:req.body.username});
          if(!user){
              res.status(400).json('wrong credential');
          }

          const validation= await bcrypt.compare(req.body.password,user.password);
          if(!validation){
              res.status(400).json("wrong credentials");
          }
          else {
              const {password,...others}=user._doc;
              res.status(200).json(others);
          }

   }catch(error){
       res.status(500).json(error)
   }
})


module.exports=router;