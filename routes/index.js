const express=require('express')
const router=express.Router()
const urlController=require('../controller/url_controller')
const passport = require('passport')

router.post('/short',passport.authenticate('jwt',{session:false}),urlController.shorten)
router.get('/my-urls',passport.authenticate('jwt',{session:false}),urlController.getAll)
router.get('/:urlId',urlController.direct)

router.use('/user',require('./user'))

module.exports=router