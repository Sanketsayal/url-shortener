const express=require('express')
const app=express()
const port=8888
const db=require('./config/mongoose')
const passportJwt=require('./config/auth')

app.use(express.urlencoded())

app.use('/',require('./routes'))

app.listen(port,()=>{
    console.log(`Running on port:${port}`)
})