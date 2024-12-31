const express=require("express");
const advisorRouter=express.Router();
advisorRouter.route('/')
.get(async(req,res,next)=>{
    try{
       return res.status(200).json({success:true,message:"Advisor route"});
    }catch(err){
        next(err);
    }
});


module.exports=advisorRouter;