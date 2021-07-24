const express =require("express");
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRouter=require('./routes/auth')
const userRouter=require('./routes/users')
const postRouter=require('./routes/posts')
const catRouter=require('./routes/categories')

dotenv.config();

 app.use(express.json());
 mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
     useNewUrlParser: true,
     useFindAndModify:true
},()=>{
    console.log('mongodb connected')
}) 
//  mongoose.connect(process.env.MONGO_URL,{
//     useUnifiedTopology: true,
//      useNewUrlParser: true 
//  }).then(console.log('mongodb connection successful successful')).catch((error)=>{
//      console.log("not successful")
//  })

 app.use("/api/auth",authRouter);
 app.use("/api/users",userRouter);
 app.use("/api/users",userRouter);
 app.use("/api/posts",postRouter);
 app.use("/api/categories",catRouter);


app.listen("5000",(req,res)=>{
    console.log(" server connection successful ")
});