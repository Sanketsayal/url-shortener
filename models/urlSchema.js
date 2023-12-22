const mongoose=require('mongoose')

const UrlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  origUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  userId:{
    type:String,
    required:true,
  }
});

const Url=mongoose.model('Url',UrlSchema)
module.exports=Url