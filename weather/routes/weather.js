const express=require("express");
const weatherRouter=express.Router();
weatherRouter.route('/')
.get(async(req,res,next)=>{
    try{
       return res.status(200).json({success:true,message:"Weather route"});
    }catch(err){
        next(err);
    }
});


module.exports=weatherRouter;