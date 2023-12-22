const User=require('../models/userSchema')
const jwt=require('jsonwebtoken');
require('dotenv').config()

module.exports.signup=async (req,res)=>{
    try {
        const {email,password}=req.body
        let user=await User.findOne({email:email})
        if(!user){
            user=await User.create(req.body)
            return res.json(200,{user,message:'User Created'})
        }else{
            return res.json(403,{user,message:'User Already exists'})
        }
    } catch (error) {
        console.log(error)
        return res.json(500)
    }
    
}

module.exports.signin=async function(req,res){
    try {
        const {email,password}=req.body
        let user=await User.findOne({email:email});

        if(!user||user.password!=req.body.password){
            return res.json(422,{
                message:'Invalid username/password'
            })
        }
        return res.json(200,{
            message:'signin successful',
            data:{
                token: jwt.sign(user.toJSON(),process.env.SECRET_KEY,{expiresIn:100000})
            }
        })
    } catch (error) {
        console.log(error);
        return res.json(500,{message:'internal server error'})
    }
    
}