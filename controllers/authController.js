const User=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const register=async(req,res) => {

    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword

        });

        res.status(201).json({
            success:true,
            user
        });    
    }

    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }

};

const login=async(req,res) => {
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        
        const isMatch=await bcrypt.compare(req.body.password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message:"Invalid credentials"
            });
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        return res.status(200).json({
            message:"Login successful",token
        });

    }

    catch(error){
        res.status(500).json({
            message:error.message
        });

    }
}
module.exports={register,login};
