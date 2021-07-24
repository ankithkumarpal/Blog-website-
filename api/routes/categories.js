const router=require('express').Router();
const Category= require('../models/catergory');


/// creating new categories 
 
router.post('/', async (req,res)=>{
    const cat=new Category(req.body)
    try{
        const savedcat= await cat.save();
        res.status(200).json(savedcat);
    }catch(error){
        res.status(401).json(error);
    }
});



////   fetching all categories 

router.get("/", async (req,res)=>{
    try{ 
        const cat =await Category.find();
        res.status(200).json(cat);

    }catch(error){
        res.status(401).json(error);
    }
})

module.exports=router;
