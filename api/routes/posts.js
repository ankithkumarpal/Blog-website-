const router=require('express').Router();
const User=require('../models/user');
const Post=require('../models/post');
const { rawListeners } = require('../models/user');
const { route } = require('./users');


///  update  of post 
router.post('/', async (req,res)=>{
    const newPost= new Post(req.body)
    try{
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);

    }catch(error){
        res.status(500).json(error);
    }
});


///  update post method

router.put('/:id', async (req,res)=>{
   try{
       const post= await Post.findById(req.params.id);
       if(post.username==req.body.username){
           try{
          const updatedPost = await Post.findOneAndUpdate(req.params.id,{
              $set:req.body,
          },{new :true}) 
          
          res.status(200).json("post updated");
          
        } catch(error){
            res.status(401).json(error);
        } 

       }else{
           res.status(401).json("you cannnot update ")
       }

   }catch(error){
       res.status(401).json(error);
   }
})

router.delete("/:id", async (req,res)=>{
    try{
          const post= await Post.findById(req.params.id);
          if(post.username==req.body.username){
                try{
                    await post.delete();
                    res.status(200).json("post deleted");

                }catch(error){
                    res.status(401).json(error);
                }
          }
          else{
              res.status(401).json("you cannot delete this post ")
          }
    }catch(error){
        res.status(401).json(error);
    }
})

/// fetching single post data 
router.get("/:id", async (req,res)=>{
          try{   
               const post=await  Post.findById(req.params.id);
               res.status(200).json(post);
          }catch(error){
              res.status(500).json(error)
          }
})

// fetching All data of particular user or category wise 

router.get('/',async (req,res)=>{
    const username= await  req.query.user;
    const categoryname= await req.query.cat;
    try{
        let posts ;
        if(username){
            posts = await Post.find({username});
        }else if(categoryname){
            posts =await Post.find({category:{$in:[categoryname]}})
        }
        else{
            posts =await Post.find();
        }

        res.status(200).json(posts)

    }catch(error){
        res.status(401).json(error)
    }
})

module.exports=router;