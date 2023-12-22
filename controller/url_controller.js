const Url=require('../models/urlSchema')
const crypto = require("crypto");
const validate=require('../config/validateUrl')

module.exports.shorten=async (req,res)=>{
    const { origUrl } = req.body;
    const base = 'http://localhost:8888';

    const urlId = crypto.randomBytes(16).toString("hex");
    if (validate.validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${base}/${urlId}`;

                url = await Url.create({
                    origUrl,
                    shortUrl,
                    urlId,
                    userId:req.user._id
                });

                return res.json(url);
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
}

module.exports.getAll=async (req,res)=>{
    try {
        let urls=await Url.find({userId:req.user._id})
        return res.json(200,{urls})
    } catch (error) {
        console.log(error)
        return res.json(500)
    }
}

module.exports.direct=async (req,res)=>{

    try {
        const url = await Url.findOne({ urlId: req.params.urlId });
        if (url) {
          return res.redirect(url.origUrl);
        } else res.status(404).json('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
}
