const express = require('express');
const ShortUrls = require('../models/urlModels');
const router = express.Router();

router.get('/', async (req, res) => {
    const urls = await ShortUrls.find();
    console.log(urls);
    res.send("done")
})

router.post('/', async (req, res) => {
    try {
        await ShortUrls.create({ full: "https://facebook.com" });
        res.redirect('/api/url');
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:ShortUrl', async (req,res)=>{
    try{
        const Shorturl=await ShortUrls.findOne({short:req.params.ShortUrl});
        Shorturl.clicks++;
        Shorturl.save();
        res.redirect(Shorturl.full)
    }catch(error){
        console.error('Error creating short URL:', error);
        res.status(500).send('Internal Server Error');
    }
})




module.exports = router;