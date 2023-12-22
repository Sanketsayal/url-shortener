const express=require('express');
const router=express.Router();
const userController=require('../controller/user_controller')

router.get('/signup',userController.signup)
router.get('/signin',userController.signin)

module.exports=router